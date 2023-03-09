import React from "react";
import styled from "./Pagination.module.css"

const Pagination = ({ totalPerros, perrosEnPantalla, paginate, delante, atras }) => {
  const numeroPaginas = [];

  for (let i = 1; i <= Math.ceil(totalPerros / perrosEnPantalla); i++) {
    numeroPaginas.push(i);
  }

  return (
    <div className={styled.list}>
      {console.log(numeroPaginas)}
      {console.log(Math.ceil(totalPerros / perrosEnPantalla))}
      <ul>
        <li>
          <a onClick={()=>atras()} href="#">Atras</a>
        </li>

        {numeroPaginas.map(number => (
          <li key={number}>
            <a onClick={() => paginate(number)} href="#">
              {number}
            </a>
          </li>
        ))}

        <li>
          <a onClick={()=>delante()} href="#"> Delante </a>
        </li>

        {/* <li key={number} >
          <a onClick={() => paginate(number+1)}></a>
        </li> */}
      </ul>
    </div>
  );
};

export default Pagination;
