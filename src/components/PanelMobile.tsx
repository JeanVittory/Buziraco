import { Link } from "react-router-dom";
import { useState, useEffect, MouseEventHandler } from "react";
import closeBtn from "../assets/close-btn.svg";
import { IconContext } from "react-icons";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";


const PanelMobile = (props: {
  panelMobile: Boolean;
  handleClosePanel: MouseEventHandler;
}) => {

  const [positionPanel, setPositionPanel] = useState<string>("");

  useEffect(() => {
    props.panelMobile
      ? setPositionPanel("left-[60%]")
      : setPositionPanel("left-full");
  }, [props.panelMobile]);

  return (
    <aside
      className={`transition-all ease-in-out duration-1000 bg-black  top-0 fixed h-screen ${positionPanel} w-2/5 md:hidden`}
    >
      <div>
       <img src={closeBtn} alt="close button" onClick={props.handleClosePanel} className=" w-8 m-4" />
      </div>
      <div className="h-screen flex flex-col items-center justify-center">
        <nav className="flex flex-col w-full items-center">
          <Link to="./nosotros" className="MabookFont mx-2 text-white py-8">
            Nosotros
          </Link>
          <Link to="./bandas" className="MabookFont mx-2 text-white py-8">
            Bandas
          </Link>
          <Link to="./conciertos" className="MabookFont mx-2 text-white py-8">
            Conciertos
          </Link>
          <Link to="./contacto" className="MabookFont mx-2 text-white py-8">
            Contacto
          </Link>
        </nav>
        <IconContext.Provider value= {{color:"white", size: "1.5rem",  style: { margin: '0 1rem', textAlign:'left'} }}>
          <div className="flex justify-center items-center mt-10 mb-44 ">
            <FaInstagram/>
            <FaFacebook/>
            <FaTwitter/>
          </div>
        </IconContext.Provider>

      </div>
     
    </aside>
  );
};

export default PanelMobile;
