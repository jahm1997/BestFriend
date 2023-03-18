import style from "./Dogs.module.css"
import { Link } from "react-router-dom";

const Dogs = (props) => {
   return (
      <div className={style.container}>
         <Link to={`/dogs/${props.id}`} >
         <br />
         <img className={style.imagen} src={props.image} alt={props.name} />
            <h3>{props.name}</h3>
         <h4>Peso: {props.weight} Kilogramos</h4>
         <h4>Temperamentos : {props.temperament}</h4>
         </Link>
      </div>
    );
}

 export default Dogs