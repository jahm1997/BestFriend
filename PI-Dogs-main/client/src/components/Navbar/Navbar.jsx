import Filter from "../Filters/Filter"
import style from "./Navbar.module.css";
import { useLocation } from "react-router-dom";
import homePage from "../imagenes/homePage.jpg"
import CrearDog from "../imagenes/createDog.jpg"
import logoTipo from "../imagenes/logoTipo_dogs_modified.png"

const Navbar = () => {
  const location = useLocation()
  
  return (
    <div className={style.menu} >
          <div className={style.logo} >
              <a href="/">
                <img src={logoTipo} alt={logoTipo} />  
              </a>
          </div>
          
          { location.pathname === "/dogs" ? <Filter/> : <h1>¡ME ESTA QUEDANDO CHIDO!</h1> }
          
          
          <div className={style.homePage} >
              <a href="/dogs">
                <img src={homePage} alt={homePage} />
              </a>
          </div>

          <div className={style.crearDog} >
              <a href="/dogs/add">
                <img src={CrearDog} alt={CrearDog} />
              </a>
              {/* <Link to="/dogs/add">Create Dog</Link> */}
          </div>
    </div>
  );
};

export default Navbar;
