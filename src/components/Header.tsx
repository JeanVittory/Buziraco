import Logo from "../assets/logo.png";
import hamburgerMenu from "../assets/hamburger-menu.svg";
import "../App.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import PanelMobile from "./PanelMobile";

const Header = () => {
  const [panelMobile, setPanelMobile] = useState<Boolean>(false);

  const handleOpenPanel = (): void => {
    setPanelMobile(true);
  };

  const handleClosePanel = () => {
    setPanelMobile(false);
  };

  return (
    <header className="container mx-auto flex justify-between">
      <Link to='/conciertos'>
        <img src={Logo} alt="logo" />
      </Link>
      <nav className="hidden md:flex items-center">
        <Link to="./nosotros" className="MabookFont mx-2">
          Nosotros
        </Link>
        <Link to="./bandas" className="MabookFont mx-2">
          Bandas
        </Link>
        <Link to="./conciertos" className="MabookFont mx-2">
          Conciertos
        </Link>
        <Link to="./contacto" className="MabookFont mx-2">
          Contacto
        </Link>
      </nav>
      <button className="block md:hidden mr-8">
        <img
          src={hamburgerMenu}
          alt=""
          className="w-10 cursor-auto"
          onClick={handleOpenPanel}
        />
      </button>
      <PanelMobile
        panelMobile={panelMobile}
        handleClosePanel={handleClosePanel}
      />
    </header>
  );
};

export default Header;
