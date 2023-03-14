import React from "react"
import style from "./Filter.module.css";

import { useDispatch } from "react-redux";

import { filterCards, orderCards, getAllDogs } from "../redux/actions"

function Filter() {

  const dispatch = useDispatch

  const [propiedad,setPropiedad] = React.useState("")
  const [valor,setValor] = React.useState("")

  const handleOrder = async (e) => {

    dispatch(orderCards(e.target.value))
    
  }

  const handleFilter = (evento) => {
    setPropiedad(evento.target.value)
  }

  const handleChange = (e) => {
    setValor(e.target.value)
  }

  
  const enviar = () =>{
    console.log( valor)
    console.log( propiedad)
    dispatch(filterCards(valor,propiedad))
    setValor("")
  }

  const limpiar = () =>{
    dispatch(getAllDogs())
  }
  
  return (
    <div >
        
          <div className={style.filters} >
            <div>
              <select onChange={handleOrder}>
                <option value="default"  >Default</option>
                <option value="" disabled >Alfabetico---</option>
                <option value="ascendente">A to Z</option>
                <option value="descendente">Z to A</option>
                <option value="" disabled>By weight---</option>
                <option value="maxpeso">max Weight</option>
                <option value="minpeso">Min Weight</option>
              </select>
              <select onChange={handleFilter}>
                <option value="" >Busqueda Por</option>
                <option value="name">Raza</option>
                <option value="weight">Peso</option>
                <option value="height">Estatura</option>
                <option value="life_span">Años de vida</option>
                <option value="temperament">temperamentos</option>
              </select>
            </div>
            <div>
              <input type="text" name="nombre" placeholder="Buscar... " onChange= {handleChange} value={valor}/>
              <button onClick={enviar} >Buscar</button>
              <button onClick={limpiar} >Limpiar Filtro</button>
            </div>
        </div>
    </div>)
}

export default Filter