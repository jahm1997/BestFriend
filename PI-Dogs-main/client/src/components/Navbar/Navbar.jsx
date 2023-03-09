import style from "./Navbar.module.css";

const Navbar = () => {
  
  return (
    <div className={style.menu} >
          <div className={style.logo} >
              <h4 >"BestFriend"</h4>
          </div>
          
          <div>
              <a href="/">Inicio</a>
          </div>
          
          <div>
              <a href="/dogs">Home</a>
          </div>

          <div>
              <a href="/dogs/add">Create Dog</a>
              {/* <Link to="/dogs/add">Create Dog</Link> */}
          </div>
    </div>
  );
};

export default Navbar;
