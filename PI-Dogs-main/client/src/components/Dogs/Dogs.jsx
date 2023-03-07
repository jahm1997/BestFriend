import style from "./Dogs.module.css"
import { Link } from "react-router-dom";

const Dogs = (props) => {
   return (
      <div className={style.container}>
         <img className={style.imagen} src={props.image} alt={props.name} />
         <Link to={`/dogs/${props.id}`} >
            <h3>Name: {props.name}</h3>
         </Link>
         <h4>Peso: {props.weight} Kilogramos</h4>
         <h4>Alto: {props.height} Centimetros</h4>
         <h4>Años de vida : {props.life_span}</h4>
         <h4>Temperamentos : {props.temperament}</h4>
      </div>
    );
}

 export default Dogs