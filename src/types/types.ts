import { Timestamp } from "firebase/firestore";

export type concertDataFromFirestoreType = {
  id?: number;
  nombre: string;
  fecha: Timestamp;
  lugar: string;
  precio: boolean | number
}

export type dataBuyer = {
  name: string;
  lastName:string;
  email: string;
  phone: number | string
}

export type dataForm = {
  id: number
  name: string
  type: string
  placeholder:string
  pattern?: string 
  errormessage: string
  required: boolean
} 