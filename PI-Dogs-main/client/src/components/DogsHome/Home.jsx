import styled from "./Home.module.css"

import React from "react";

import { useDispatch, useSelector } from "react-redux"
import { getAllDogs, filterCards } from "../redux/actions"

import Dogs from "../Dogs/Dogs"
import Pagination from "../pagination/pagination";
import cargando from "../../cargando2.jpg"
import Navbar from "../Navbar/Navbar";

function Home() {
  console.log("Se ejecutó Home");
  
  const dogs = useSelector(state => state.myDogs);
  console.log(dogs);
  
  const dispatch = useDispatch()

  const [propiedad,setPropiedad] = React.useState("")
  const [valor,setValor] = React.useState("")

  const [inicio,setInicio] = React.useState(1)
  const [perrosEnPantalla] = React.useState(8)

  const handleFilter = (evento) => {
    setPropiedad(evento.target.value)
    console.log(evento.target.value)
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
  
  const paginate = pagina => setInicio(pagina)

  React.useEffect(
    ()=>{
      dispatch(getAllDogs())
    },[dispatch]
  )

  if(!dogs.length){
    return(
      <div className={styled.cargandoDiv}>
        <img className={styled.cargando} src={cargando} alt="CargandoPagina" />
      </div>
    )

  }else{

    const final = inicio * perrosEnPantalla
    const comienzo = final - perrosEnPantalla
    var current = dogs.slice(comienzo,final)

    return (
      <div className={styled.contenedor} >
        <div className={styled.menu} >
          <Navbar></Navbar>
        </div>
        <div className={styled.filters} >
          <div>
            <select onChange={handleFilter}>
              <option value="">por Defecto</option>
              <option value="name">Raza</option>
              <option value="weight">Peso</option>
              <option value="height">Estatura</option>
              <option value="life_span">Años de vida</option>
              <option value="temperament">Temperamento</option>
            </select>
          </div>
          <div>
            <input type="text" name="nombre" placeholder="Buscar... " onChange= {handleChange} value={valor}/>
            <button onClick={enviar} >Buscar</button>
            <button onClick={limpiar} >Limpiar Filtro</button>
          </div>
        </div>

        <div className={styled.cartas} >
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

        <div className={styled.pagi} >
          <Pagination perrosEnPantalla={perrosEnPantalla}  totalPerros = {dogs.length} paginate = {paginate} />
        </div>
      </div>
    )
  }
}

export default Home