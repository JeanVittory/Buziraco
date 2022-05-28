import { useEffect, useState } from 'react'
import { storage} from '../services/firebase/firebaseData';
import { ref, getDownloadURL } from 'firebase/storage';
import '../App.css';
import ModalConcert from './ModalConcert';
import { Link } from 'react-router-dom';
import { useDataContext } from '../context/ConcertContext';


const ConcertItem = ({...props}) =>{
  const [linkImageFromFirebaseStorage, setLinkImageFromFirebaseStorage] = useState<string>("");
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

  const dataContext = useDataContext();
  const {setSelectedDataConcert} = dataContext

  const handlerSetSelectedDataConcert = () =>{
    setSelectedDataConcert(props)
  }
  

  useEffect(()=>{
      const storageRef = ref(storage, `${props.id}.jpeg`)
      getDownloadURL(storageRef)
        .then(response =>{
        setLinkImageFromFirebaseStorage(response)
       }).catch(error =>{
        console.log(error)
       })
  },[])

  const message = props.precio ? 'Get Tickets': 'It already happened :C'

  const handlerModalIsOpen = () =>{
    if(window.innerWidth <= 768){
      return
    }else{
      setIsOpenModal(true)  
    }   
  };
  const closeModal = () =>{
    setIsOpenModal(false)
  }

  return(
    <>
      <article className='flex flex-col justify-center items-center'>
        <div className='w-4/5'>
          <img loading='lazy' src={linkImageFromFirebaseStorage} alt={`flyer ${props.nombre}`} className="mx-auto shadow-cards md:cursor-pointer" onClick={handlerModalIsOpen}/>
          {isOpenModal && (
            <ModalConcert closeModal = {closeModal}>
              <>
               <img src={linkImageFromFirebaseStorage} alt="Concert Flyer" className='md:w-1/2'/>
               <section className='flex flex-col px-16 w-full'>
                 <ol className='list-decimal'>
                  <li className='text-white py-4 MabookFont text-xl tracking-wider'>CUANTO CUESTA?: <u className='font-mono'>{props.precio?"$" + Number(props.precio).toFixed(3):"no disponible"}</u></li>
                  <li className='text-white py-4 MabookFont text-xl tracking-wider'>DONDE ES?: <span className='font-mono'>{props.lugar}</span></li>
                  <li className='text-white py-4 MabookFont text-xl tracking-wider'>CUANDO LLEGO?: <span className='font-mono'>{props.fecha}</span></li>
                 </ol>
                 <Link  to={`/tickets/${props.id}`} className={`text-center bg-btn-get-tickets rounded ${props.precio? 'w-2/5': 'w-4/6'} px-2 py-1 font-popins mt-5 shadow-btns ${props.precio || 'pointer-events-none'}`}>{message}</Link>
               </section>
              </>
            </ModalConcert>
          )}
         
        </div>
        <Link onClick={handlerSetSelectedDataConcert} to= {`/tickets/${props.id}`} className={` text-center bg-btn-get-tickets rounded px-2 py-1 font-popins mt-5 shadow-btns ${props.precio || 'pointer-events-none'}`}>{message}</Link>
      </article>
    </>
  )
}

export default ConcertItem