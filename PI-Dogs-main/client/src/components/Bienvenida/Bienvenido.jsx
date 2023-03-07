import styled from "./Bienvenido.module.css"
import { Link } from "react-router-dom"

import boton from "../../botonPerrito.jpeg"

const Bienvenido = () => {
return (
    <div className={styled.divImagen}> 

        <div className={styled.divboton} >
            <Link to={"/dogs"} >
                <img  className={styled.imgBoton} src={boton} alt={boton} />
            </Link>
        </div>
        
    </div>
)
}

export default Bienvenido