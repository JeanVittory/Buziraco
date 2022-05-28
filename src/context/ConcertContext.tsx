import { useState, createContext, useContext } from "react";
import { concertDataFromFirestoreType } from "../types/types";

export const SelectedDataConcertAsContext = createContext({});

export const useDataContext = () => {
  return useContext<any>(SelectedDataConcertAsContext);
};

const ConcertContext = ({ children }: any) => {
  const [selectedDataConcert, setSelectedDataConcert] = useState<
    concertDataFromFirestoreType[]
  >([]);

  const values = { selectedDataConcert, setSelectedDataConcert };
  console.log(selectedDataConcert);

  return (
    <SelectedDataConcertAsContext.Provider value={values}>
      {children}
    </SelectedDataConcertAsContext.Provider>
  );
};

export default ConcertContext;
