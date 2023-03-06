import style from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  
  return (
    <div className={style.menu} >
      <ul>
        <li>
          <h4 >"BestFriend"</h4>
        </li>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/dogs">Home</Link>
        </li>
        <li>
          <Link to="/dogs/add">Create Dog</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
