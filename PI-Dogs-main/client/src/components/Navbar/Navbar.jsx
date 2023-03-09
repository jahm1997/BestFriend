import style from "./Navbar.module.css";

const Navbar = () => {
  
  return (
    <div className={style.menu} >
        <ul className={style.menulu}>
          <div>
            <li>
            <h4 >"BestFriend"</h4>
          </li>
          </div>
          
          <div>
           <li className={style.l2}>
            <a href="/">Inicio</a>
          </li> 
          </div>
          
          <div>
            <li>
            <a href="/dogs">Home</a>
          </li>
          </div>
          <div>
          <li>
            <a href="/dogs/add">Create Dog</a>
            {/* <Link to="/dogs/add">Create Dog</Link> */}
          </li>
          </div>
        </ul>
    </div>
  );
};

export default Navbar;
