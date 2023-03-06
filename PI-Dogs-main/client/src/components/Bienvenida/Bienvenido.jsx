import styled from "./Bienvenido.module.css"
import { Link } from "react-router-dom"

import bienvenido from "../..//bienvenidoPag.jpeg"

const Bienvenido = () => {
return (
    <div className={styled.imagen}> 
        <img  src={bienvenido} alt="bienvenido" width="1365rem" height="645rem" >
        </img>
        
        <div className={styled.boton} >
            <Link to={"/dogs"} >
                <button  >Ir a Inicio</button>
            </Link>
        </div>
        
    </div>
)
}

export default Bienvenido