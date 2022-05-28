import { db } from "../services/firebase/firebaseData";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import ConcertItem from "./ConcertItem";
import { concertDataFromFirestoreType } from "../types/types";

const ConcertsContainer = () => {
  const [concertsDataFromFirestore, setConcertsDataFromFirestore] = useState<
    concertDataFromFirestoreType[]
  >([]);

  useEffect(() => {
    const getDataFromFirestore = async (): Promise<void> => {
      const dataConcertDb = await getDocs(collection(db, "concertsData"));
      const concerts = dataConcertDb.docs.map((doc) => {
        const dataDoc = doc.data() as concertDataFromFirestoreType;
        const docId = parseInt(doc.id);
        return { id: docId, ...dataDoc };
      });
      const orderConcerts: concertDataFromFirestoreType[] = concerts.sort(
        (a, b) => {
          return b.id - a.id;
        }
      );
      setConcertsDataFromFirestore(orderConcerts);
    };
    getDataFromFirestore();

    return () => {
      setConcertsDataFromFirestore([]);
    };
  }, []);

  const dateOptions: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };

  return (
    <section className="container mx-auto grid md:grid-cols-3 gap-14 my-20">
      {concertsDataFromFirestore.map((el, idx) => {
        return (
          <ConcertItem
            key={idx}
            id={el.id}
            nombre={el.nombre}
            lugar={el.lugar}
            fecha={el.fecha.toDate().toLocaleString("es", dateOptions)}
            precio={el.precio}
          />
        );
      })}
    </section>
  );
};

export default ConcertsContainer;
