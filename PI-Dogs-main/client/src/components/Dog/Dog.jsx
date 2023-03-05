import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import style from "./Dog.module.css"
import { getDog } from "../redux/actions";


const Dog = () => {

    console.log("se ejecutó dog")
   
   const {id} = useParams()
    const [dog,setDog] = useState({})
    
    useEffect(
        ()=>{
            fetch(`http://localhost:3001/dogs/${id}`)
            .then(response=>response.json())
            .then((char)=>{
               if(char.id){
                  setDog(char)
              }else{
                  window.alert("No hay personajes con ese ID")
              }
            })
            .catch(
                err => {window.alert("No hay personajes con ese ID")}
            )
            return setDog({})
        },[id]
    )

    return (
       <div className={style.container}>
         <button>
            <Link to="/dogs">Home</Link>
        </button>
          <h3>Name: {dog.name}</h3>
          <h3>Peso: {dog.weight}</h3>
          <h3>Alto: {dog.height}</h3>
          <h3>Años de vida : {dog.life_span}</h3>
          <img className={style.imagen} src={dog.image} alt={dog.name} />
       </div>
    );
}

 export default Dog