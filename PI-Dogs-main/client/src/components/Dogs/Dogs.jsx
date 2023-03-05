import style from "./Dogs.module.css"
import { Link } from "react-router-dom";

const Dog = (props) => {
   console.log("se ejecutó Dogs")
    return (
       <div className={style.container}>
          <img className={style.imagen} src={props.image} alt={props.name} />
          <Link to={`/dogs/${props.id}`} ></Link>
          <h3>Name: {props.name}</h3>
          <h3>Peso: {props.weight}</h3>
          <h3>Alto: {props.height}</h3>
          <h3>Años de vida : {props.life_span}</h3>
       </div>
    );
}

 export default Dog