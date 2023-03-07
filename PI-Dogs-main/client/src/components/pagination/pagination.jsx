import React from "react";
import styled from "./Pagination.module.css"

const Pagination = ({ totalPerros, perrosEnPantalla, paginate }) => {
  const numeroPaginas = [];

  for (let i = 1; i <= Math.ceil(totalPerros / perrosEnPantalla); i++) {
    numeroPaginas.push(i);
  }
  return (
    <div className={styled.list}>
      <ul>
        {numeroPaginas.map(number => (
          <li key={number}>
            <a onClick={() => paginate(number)} href="#">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
