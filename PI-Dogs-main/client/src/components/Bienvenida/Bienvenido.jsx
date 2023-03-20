import styled from "./Bienvenido.module.css"
import { Link } from "react-router-dom"

import Boton from "../imagenes/BotonPerrito.jpeg"

const Bienvenido = () => {
    
return (
    <div className={styled.divImagen}> 
            <div className={styled.divBoton} >
                <Link to={"/dogs"} >
                        <img  className={styled.img} src={Boton} alt="Boton Bienvenido" />
                </Link>
            </div>
    </div>
)
}

export default Bienvenido