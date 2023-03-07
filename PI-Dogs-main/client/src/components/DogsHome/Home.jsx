import styled from "./Home.module.css"

import React from "react";

import { useDispatch, useSelector } from "react-redux"
import { getAllDogs } from "../redux/actions"

import Dogs from "../Dogs/Dogs"
import Pagination from "../pagination/pagination";

function Home() {
  console.log("Se ejecutó Home");

  const dispatch = useDispatch()

  const dogs = useSelector(state => state.myDogs)
  const [inicio,setInicio] = React.useState(1)
  const [perrosEnPantalla] = React.useState(8)

  React.useEffect(
      ()=>{
        dispatch(getAllDogs())
      },[dispatch]
    )

    const paginate = pagina => setInicio(pagina)
    
    
    
    if(!dogs.length){
    return(
      <div>
        <h1>Loading</h1>
      </div>)
  }else{

    const final = inicio * perrosEnPantalla
    const comienzo = final - perrosEnPantalla
    var current = dogs[0].slice(comienzo,final)

    return (
      <div className={styled.contenedor} >
        <div className={styled.filters} c1>
          filtros y paginación
        </div>

        <div className={styled.cartas}  c2>
          {current.map(
            elemento => 
            <Dogs 
            key = {elemento.id}
            id = {elemento.id}
            name = {elemento.name}
            image = {elemento.image}
            weight = {elemento.weight}
            height = {elemento.height}
            life_span = {elemento.life_span}
            temperament = {elemento.temperament}
            ></Dogs>)
          }
        </div>

        <div className={styled.pagi} c3>
          <Pagination perrosEnPantalla={perrosEnPantalla}  totalPerros = {dogs[0].length} paginate = {paginate} />
        </div>
      </div>
    )
  }
}

export default Home