import closeBtn from "../assets/close-btn.svg"

interface childrenProps {
  children: JSX.Element[] | JSX.Element;
  closeModal: any
}

const ModalConcert = ({ children, closeModal}: childrenProps) => {
  return (
    <article className="fixed z-50 top-0 left-0 w-full min-h-screen bg-black/80 flex justify-center items-center" onClick={closeModal} >
      <div className="relative p-4 md:w-3/4 flex md:flex-row justify-center items-center " onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </article>
  );
};

export default ModalConcert;
