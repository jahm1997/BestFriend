import style from "./Dog.module.css"
import { useEffect } from "react";

import { Link, useParams } from "react-router-dom";

import {getDog} from "../redux/actions"

import { useDispatch, useSelector } from "react-redux";

function Dog () {


    const dispatch = useDispatch()
   
    const {id} = useParams()
    const dog = useSelector(state=>state.dog)

    useEffect(
        ()=>{
          dispatch(getDog(id))
        },[dispatch]
      )

    if(dog){
        return (
            <div className={style.container}>
               <h3>Name: {dog.data.name}</h3>
               <h3>Peso: {dog.data.weight}</h3>
               <h3>Alto: {dog.data.height}</h3>
               <h3>Años de vida : {dog.data.life_span}</h3>
               <h4>temperamentos: {dog.data.temperament}</h4>
               <img className={style.imagen} src={dog.data.image} alt={dog.data.name} />
            </div>
         );
    }else{
        return (
            <div>
                <h1>
                    Aun no obtenemos el objeto
                </h1>
            </div>
        )
    }
}

 export default Dog