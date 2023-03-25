import React  from "react";
import { Link } from "react-router-dom";
import move from "../imagenes/botonIzquierda.png"
import style from "./Pagination.module.css"
import move2 from "../imagenes/botonDerecha.png"

const Pagination = ({ totalPerros, perrosEnPantalla, paginate, delante, atras, inicio }) => {

  const numeroPaginas = [];


  for (let i = 1; i <= Math.ceil(totalPerros / perrosEnPantalla); i++) {
    numeroPaginas.push(i);
  }

  console.log(inicio)
  
  return (
    <div className={style.list}>
      <ul>
        <li className={style.listToImagenUno}>
          <Link>
            <img  src={move} alt={move} onClick={()=>atras()} />
          </Link> 
        </li>

        {/* {numeroPaginas.map(number => (
          <li key={number} className={style.listCentral} >
            <Link>
              <p onClick={() => {
                paginate(number)
              }}>
                {number}🐶
              </p>
            </Link> 
          </li>
        ))} */}
        
        
        {/* <li>
          <Link>
            <p onClick={() => {paginate(numeroPaginas[inicio-1])}}>{numeroPaginas[inicio-1]}</p>
          </Link>
        </li> */}
        <li>
          <Link>
            <p onClick={() => {paginate(numeroPaginas[inicio])}}>{numeroPaginas[inicio]}</p>
          </Link>
        </li>
        <li>
          <Link>
            <p onClick={() => {paginate(numeroPaginas[inicio+1])}}>{numeroPaginas[inicio+1]}</p>
          </Link>
        </li>
        
        
        <li className={style.listToImagenDos}>
          <Link>
            <img  src={move2} alt={move} onClick={()=>delante()} />
          </Link>   
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
