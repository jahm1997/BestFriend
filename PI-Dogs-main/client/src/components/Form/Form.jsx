import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Form.module.css";
import validateForm from "./validateForm"
import { useDispatch } from "react-redux";
import { postdog } from "../redux/actions";
import Navbar from "../Navbar/Navbar";

const Form = () => {
  console.log("Se ejecutó Form");
  const traslado = useNavigate()
  const dispatch = useDispatch()
  
  const [dog,setDog] = useState({
    name:"",
    weight: "",
    height: "",
    life_span:""
  })
  const [errors,setErrors] = useState({
    name:"",
    weight: "",
    height: "",
    life_span:""
  })
  
  const handleInputChange = (eve)=>{
    setDog({
      ...dog,
      [eve.target.name]:eve.target.value
    })
    setErrors(
      validateForm({
        ...dog,
        [eve.target.name]:eve.target.value
      })
      )
    }
    
    const handleSubmit = async (event) =>{
      event.preventDefault()
      // creacion(dog)
      try {
        console.log(event)
        const formulario = await postdog(dog)
        console.log(formulario)
        traslado(`/dogs`)
      } catch (error) {
        console.log(error)
      }
    }


return(
  <div className={style.divContenedor} >
    <div className={style.divNav} >
      <Navbar/>
    </div>

    <form  onSubmit={handleSubmit} >
      <label htmlFor="name"> Nombre </label>
      <input type="text" name="name" placeholder="ingrese el nombre" value={dog.name} onChange={handleInputChange}  />
      {/* // en este espacio colocamos los errores que lanza si no se introduce username correcto */}
      {errors.name && <p className={style.error}> {errors.name}</p>}
      <br />
      <br />

      <label htmlFor="weight"> Peso </label>
      <input type="text" name="weight" placeholder="ingrese peso del perro" value={dog.weight} onChange={handleInputChange}  />
      {errors.weight && <p className={style.error}> {errors.weight}</p>}
      <br />
      <br />
      
      <label htmlFor="height"> Altura </label>
      <input type="text" name="height" placeholder="ingrese altura del perro" value={dog.height} onChange={handleInputChange}  />
      {errors.height && <p className={style.error}> {errors.height}</p>}
      <br />
      <br />
      
      <label htmlFor="life_span"> Años de vida </label>
      <input type="text" name="life_span" placeholder="años de vida" value={dog.life_span} onChange={handleInputChange}  />
      {errors.life_span && <p className={style.error}> {errors.life_span}</p>}
      <br />
      <br />

      <button type="submit" >Registrar</button>

    </form>
  </div>
)
};

export default Form;


// import style from "./Form.module.css";
// import validateForm from "./validateForm"
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// // import {añadir} from "../../../../api/src/controllers/añadirDogs"

// const Form = () => {
//   const dispatch = useDispatch()
//   const traslado = useNavigate()

//   const mensaje = useSelector(state => state.success)
//   const error = useSelector(state => state.error)
//   console.log(mensaje)
  
//   const [dog,setDog] = useState({
//     name:"",
//     weight: "",
//     height: "",
//     life_span:"",
//     // image:""
//   })
//   const [errors,setErrors] = useState({
//     name:"",
//     weight: "",
//     height: "",
//     life_span:"",
//     // image:""
//   })
  
//   const handleInputChange = (eve)=>{
//     setDog({
//       ...dog,
//       [eve.target.name]:eve.target.value
//     })
//     setErrors(
//       validateForm({
//         ...errors,
//         [eve.target.name]:eve.target.value
//       })
//       )
//     }
    
//     const handleSubmit = (event) =>{
//       event.preventDefault()
//       // creacion(dog)
//       try {
//         if(!Object.keys(error).length){ // aqui la consulta es si error está vacio
//           console.log("entro al if de la 50")
//           dispatch(mensaje)
//           console.log("ya hizo dispatch")
          
//           setDog({
//             name:"",
//             weight: "",
//             height: "",
//             life_span:""
//           })
//           console.log("ya seteo dog")
//           traslado(`/dogs`)
//           console.log("ya nos trasladó")
//         }
//       } catch (error) {
        
//         console.log("entro al error de la 62")
//         alert(error)
//       }
//     }


// return(
//   <form  onSubmit={handleSubmit} >
//     <br />
//     <br />
//     <label htmlFor="name"> Nombre </label>
//     <input type="text" name="name" placeholder="ingrese el nombre" value={dog.name} onChange={handleInputChange}  />
//     {/* // en este espacio colocamos los errores que lanza si no se introduce username correcto */}
//     {errors.name && <p className={style.error}> {errors.name}</p>}
//     <br />
//     <br />
//     <label htmlFor="weight"> Peso </label>
//     <input type="text" name="weight" placeholder="ingrese peso del perro" value={dog.weight} onChange={handleInputChange}  />
//     {errors.weight && <p className={style.error}> {errors.weight}</p>}
//     <br />    
//     <br />    
//     <label htmlFor="height"> Altura </label>
//     <input type="text" name="height" placeholder="ingrese altura del perro" value={dog.height} onChange={handleInputChange}  />
//     {errors.height && <p className={style.error}> {errors.height}</p>}
//     <br />
//     <br />
//     <label htmlFor="life_span"> Años de vida </label>
//     <input type="text" name="life_span" placeholder="años de vida" value={dog.life_span} onChange={handleInputChange}  />
//     {errors.life_span && <p className={style.error}> {errors.life_span}</p>}
//     <br />
//     <br />
//     {/* <label htmlFor="image"> imagen </label>
//     <input type="url" name="image" placeholder="imagen del perro" value={dog.image} onChange={handleInputChange}  />
//     {errors.image && <p className={style.error}> {errors.image}</p>}
//     <br />
//     <br /> */}

//     <button type="submit" >Registrar</button>

//   </form>
// )
// };

// export default Form;
