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
    const {dog} = useSelector(state=>state)
    
    
    useEffect(
        ()=>{
          dispatch(getDog(id))

        },[dispatch]
      )
      
    if(!dog.length){
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
                        <h3>Name: {dog[0].name}</h3>
                        <h3>Peso: {dog[0].weight}</h3>
                        <h3>Alto: {dog[0].height}</h3>
                        <h3>Años de vida : {dog[0].life_span}</h3>
                        <h3>temperamentos: {dog[0].temperament}</h3>
                    </div>
                </div> 
                <div className={style.containerImg} > 
                    <div  > 
                        <img className={style.imagen} src={dog[0].image} alt={dog[0].name} />
                    </div>
                </div>
            </div>
        );
    }
}

 export default Dog