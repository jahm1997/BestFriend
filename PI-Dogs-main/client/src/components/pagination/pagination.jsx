import React from "react";
import { Link } from "react-router-dom";
import style from "./Pagination.module.css"
import move from "../imagenes/paginas.jpg"

const Pagination = ({ totalPerros, perrosEnPantalla, paginate, delante, atras }) => {
  const numeroPaginas = [];

  for (let i = 1; i <= Math.ceil(totalPerros / perrosEnPantalla); i++) {
    numeroPaginas.push(i);
  }

  return (
    <div className={style.list}>
      <ul>
        <li className={style.listToImagen}>
          <Link>
            <img  src={move} alt={move} onClick={()=>atras()} />
          </Link> 
        </li>

        {numeroPaginas.map(number => (
          <li key={number}>
            <Link>
              <p onClick={() => paginate(number)}>
                {number }🐶
              </p>
            </Link> 
          </li>
        ))}
        
        
        <li className={style.listToImagen}>
          <Link>
            <img  src={move} alt={move} onClick={()=>delante()} />
          </Link>   
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
