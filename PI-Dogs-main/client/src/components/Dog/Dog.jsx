import style from "./Dog.module.css"

import cargando from "../imagenes/cargando2.jpg"
import Navbar from "../Navbar/Navbar";

import { useEffect } from "react";

import { useParams } from "react-router-dom";

import {getDog} from "../redux/actions"
import { useDispatch, useSelector } from "react-redux";

function Dog () {


    const dispatch = useDispatch()
   
    const {id} = useParams()
    const perro = useSelector(state=>state.dog)
    const dog = perro[0]
    
    useEffect(
        ()=>{
          dispatch(getDog(id))

        },[dispatch]
      )
      
    if(!perro.length){
        return (
            <div className={style.cargandoDiv}>
                <img className={style.cargando} src={cargando} alt="CargandoPagina" />
            </div>
        )
    }else{
        return (
            <div className={style.contenedorGeneral} >
                <div className={style.menu} >
                    <Navbar/>
                </div>

                <div className={style.container}>
                    <div className={style.containerInt} >
                        <h3>Name: {dog.name}</h3>
                        <h3>Peso: {dog.weight}</h3>
                        <h3>Alto: {dog.height}</h3>
                        <h3>Años de vida : {dog.life_span}</h3>
                        <h3>temperamentos: {dog.temperament}</h3>
                    </div>
                </div> 
                <div className={style.containerImg} > 
                    <div >
                        <img className={style.imagen} src={dog.image} alt={dog.name} />
                    </div>
                </div>
            </div>
        );
    }
}

 export default Dog