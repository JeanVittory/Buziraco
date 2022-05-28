import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { dataBuyer, dataForm } from "../types/types";
import { getDownloadURL, ref } from "firebase/storage";
import { storage, db } from "../services/firebase/firebaseData";
import { collection, addDoc } from "firebase/firestore";
import "../App.css";
import Inputs from "./Inputs";
import { useDataContext } from "../context/ConcertContext";

const FormTickets = () => {
  const imageConcertId = useParams();
  const url = imageConcertId.concertId;
  const [confirmOrder, setConfirmOrder] = useState<Boolean>(false)
  const [linkImageFromFirebaseStorage, setLinkImageFromFirebaseStorage] = useState<string>("");
  const [buyer, setBuyer] = useState<dataBuyer>({
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const {selectedDataConcert, setSelectedDataConcert} = useDataContext()
  const nameConcert = selectedDataConcert.hasOwnProperty("nombre") && selectedDataConcert["nombre"] 
  
  const submitDataBuyerToFirebase = () =>{
    const dataBuyerTobeCommited = {
      name: buyer.name,
      lastName: buyer.lastName,
      email: buyer.email,
      phone: buyer.phone,
      concertAttended: nameConcert,
      date: new Date()
    }
    const collectionRef = collection(db, "buyers")
    addDoc(collectionRef, dataBuyerTobeCommited)
    return setSelectedDataConcert([])
  }

  useEffect(() => {
    const storageRef = ref(storage, `${url}.jpeg`);
    getDownloadURL(storageRef)
      .then((response) => {
        setLinkImageFromFirebaseStorage(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const dataForm: dataForm[] = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Nombre",
      pattern: "^([a-zA-Z]).{3,}$",
      errormessage: "Ingresa un nombre válido. Debe contener más de 3 letras",
      required: true,
    },
    {
      id: 2,
      name: "lastName",
      type: "text",
      placeholder: "Apellidos",
      pattern: "^([a-zA-Z]).{3,}$",
      errormessage:
        "Ingresa unos apellidos válidos. Debe contener más de 3 letras",
      required: true,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Email",
      errormessage: "Ingresa un email válido",
      required: true,
    },
    {
      id: 4,
      name: "phone",
      type: "text",
      placeholder: "Teléfono",
      pattern: "^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$",
      errormessage: "Tu número celular debe contener mínimo 10 digitos y no puede contener espacios",
      required: true,
    },
  ];

  const handlerBuyerData = (e: any) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const handlerSubmit = (e: any) => {
    e.preventDefault();
  };

  useEffect(() =>{
    Object.values(buyer).forEach(e => {
      if(!e){
        setConfirmOrder(false)
      }else{
        setConfirmOrder(true)
      }
    })
  },[buyer])

  return (
    <div className="container mx-auto mt-10">
      <Link to="/conciertos" className="text-sm tracking-wider w-3/5 text-center bg-btn-get-tickets rounded ml-2 px-4 py-1 font-popins shadow-btns">REGRESAR</Link>
      <section className="md:mt-10 lg:mt-0 flex flex-col md:flex-row md:justify-center md:items-center">
        <form
          onSubmit={handlerSubmit}
          className="grid grid-cols-1 w-3/4 mx-auto md:w-2/5 gap-8"
        >
          {dataForm.map((input) => {
            return (
              <Inputs
                key={input.id}
                onChange={handlerBuyerData}
                {...input}
                value={buyer[input.name as keyof dataBuyer]}
              />
            );
          })}
          <button onClick={submitDataBuyerToFirebase} className={`justify-self-center w-3/5 text-center bg-btn-buy rounded px-2 py-1 font-popins mt-5 shadow-btns ${confirmOrder || "pointer-events-none"}`}>
            COMPRAR BOLETAS
          </button>
        </form>
        <div className="flex justify-center items-center my-10 md:my-20 md:ml-20 order-first md:order-none w-1/2 self-center ">
          <img
            src={linkImageFromFirebaseStorage}
            alt="concert flyer"
            className="w-3/4 shadow-cards"
          />
        </div>
      </section>
    </div>
  );
};

export default FormTickets;
