import style from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  
  return (
    <div className={style} >
      <ul>
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
