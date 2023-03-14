import style from "./Navbar.module.css";
import logoTipo from "../imagenes/logoTipo_dogs_modified.png"
import CrearDog from "../imagenes/createDog.jpg"
import homePage from "../imagenes/homePage.jpg"

const Navbar = () => {
  
  return (
    <div className={style.menu} >
          <div className={style.logo} >
              <a href="/">
                <img src={logoTipo} alt={logoTipo} />  
              </a>
          </div>
          
          <div className={style.homePage} >
              <a href="/dogs">
                <img src={homePage} alt={homePage} />
              </a>
          </div>

          <div className={style.bestFriend} >
              <a href="/dogs/add">
                <img src={CrearDog} alt={CrearDog} />
              </a>
              {/* <Link to="/dogs/add">Create Dog</Link> */}
          </div>
    </div>
  );
};

export default Navbar;
