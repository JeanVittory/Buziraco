import { IconContext } from "react-icons";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import Logo from "../assets/logo.png"


const Footer = () =>{
    return(
        <footer className="w-full bg-[#FFDF6C] h-auto flex flex-col justify-center items-center md:flex-row md:justify-around">
            <section className="flex flex-col justify-center items-center">
                <img src={Logo} alt="Logo" className="mt-8 "/>
                <div className="flex justify-content items-center mb-8 py-4">
                    <IconContext.Provider value= {{color:"#3F3F3F", size: "1.3rem",  style: { margin: '0 .5rem'} }}>
                        <FaInstagram/>
                        <FaFacebook/>
                        <FaTwitter />
                    </IconContext.Provider>
                </div>
            </section>
            <section className="flex flex-col justify-center items-center gap-2 w-1/2 md:w-1/4 order-first md:order-none">
                <p className="text-sm font-popins text-[#3F3F3F] tracking-wider font-semibold text-center mt-14 md:mt-0">Ingresa a nuestro email list y enterate de todos los próximos conciertos:</p>
                <form className="flex justify-center gap-2 mt-2">                    
                    <input type="text" placeholder="Email" className="rounded px-3 py-2 shadow-btns-footer" />
                    <button className="font-popins text-white bg-red-500 px-3 py-0 rounded-xl shadow-btns-footer cursor-auto md:cursor-pointer">SEND</button>
                </form> 
            </section>
        </footer>
    )
};

export default Footer;