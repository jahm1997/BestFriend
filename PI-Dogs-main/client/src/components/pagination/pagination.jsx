import React from "react";
import { Link } from "react-router-dom";
import styled from "./Pagination.module.css"

const Pagination = ({ totalPerros, perrosEnPantalla, paginate, delante, atras }) => {
  const numeroPaginas = [];

  for (let i = 1; i <= Math.ceil(totalPerros / perrosEnPantalla); i++) {
    numeroPaginas.push(i);
  }

  return (
    <div className={styled.list}>
      <ul>
        <li>
        <Link>
            <p onClick={()=>atras()} > 
              Atras
            </p>
          </Link> 
        </li>

        {numeroPaginas.map(number => (
          <li key={number}>
            <Link>
              <p onClick={() => paginate(number)}>
                {number}
              </p>
            </Link> 
          </li>
        ))}
        
        
        <li>
          <Link>
            <p onClick={()=>delante()} > 
              Delante
            </p>
          </Link>   
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
