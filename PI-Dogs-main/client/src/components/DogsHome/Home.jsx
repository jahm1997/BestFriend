import styled from "./Home.module.css"

import React from "react";

import { useDispatch, useSelector } from "react-redux"
import { getAllDogs, getAllTemps } from "../redux/actions"

import Dogs from "../Dogs/Dogs"
import Navbar from "../Navbar/Navbar";
import cargando from "../imagenes/cargando2.jpg"
import Pagination from "../pagination/pagination";

function Home() {
  
  const {myDogs} = useSelector(state => state);

  const dispatch = useDispatch()


  const [inicio,setInicio] = React.useState(1)
  const [perrosEnPantalla] = React.useState(8)
  


  const ultimaPagina = Math.ceil(myDogs.length/perrosEnPantalla)
  const delante = () => inicio  ===  ultimaPagina ? setInicio(inicio): setInicio(inicio+1)
  const paginate = pagina => setInicio(pagina)
  const atras = () => inicio === 1? setInicio(inicio):setInicio(inicio-1)

  React.useEffect(
    ()=>{
      dispatch(getAllTemps())
      dispatch(getAllDogs())
    },[dispatch]
  )



  if(!myDogs.length){
    return(
      <div className={styled.cargandoDiv}>
        <img className={styled.cargando} src={cargando} alt="CargandoPagina" />
      </div>
    )

  }else{

    const final = inicio * perrosEnPantalla
    const comienzo = final - perrosEnPantalla
    var current = myDogs.slice(comienzo,final)
    console.log(current)
    return (
      <div className={styled.contenedor} >
        <div className={styled.menu} >
          <Navbar></Navbar>
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
          <Pagination perrosEnPantalla={perrosEnPantalla} totalPerros = {myDogs.length} delante = {delante} atras = {atras} paginate = {paginate} />
        </div>
      </div>
    )
  }
}

export default Home