import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import style from "./Form.module.css";
import validateForm from "./validateForm"
import { postdog } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import imagen from "../imagenes/botonhuesitos.png"

import video from "../videos/videoPerritos.mp4"

const Form = () => {
  console.log("Se ejecutó Form");
  const traslado = useNavigate()
  
  const [dog,setDog] = useState({
    name:"",
    weightUno: "",
    weightDos: "",
    heightUno: "",
    heightDos: "",
    life_span:"",
    temperament:"",
    image:""
  })
  const [errors,setErrors] = useState({
    name:"",
    weightUno: "",
    weightDos: "",
    heightUno: "",
    heightDos: "",
    life_span:"",
    temperament:"",
    image:""
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
    
  const handleSubmit = (event) =>{
    event.preventDefault()
      postdog(dog)      
  }


return(
  <div className={style.divContenedor} >

    <div className={style.menu} >
      <Navbar/>
    </div>

    <div className={style.videito}>
      <div>
        <video width="800px" controls autoPlay loop >
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>

    <div className={style.formularioExt}>
      <div className={style.formularioint} >
        <form  onSubmit={handleSubmit} >

        <div>
          <label htmlFor="name"> Nombre </label>
          <input type="text" name="name" placeholder="ingrese el nombre" value={dog.name} onChange={handleInputChange}  />
          {/* // en este espacio colocamos los errores que lanza si no se introduce username correcto */}
          {errors.name && <p className={style.error}> {errors.name}</p>}
        </div>

          <div>
            <label htmlFor="weightUno"> Peso Minimo</label>
            <input type="text" name="weightUno" placeholder="ingrese peso del perro" value={dog.weightUno} onChange={handleInputChange}  />
            {errors.weightUno && <p className={style.error}> {errors.weightUno}</p>}
            
          </div>

          <div>
            <label htmlFor="weightDos"> Peso Maximo</label>
            <input type="text" name="weightDos" placeholder="ingrese peso del perro" value={dog.weightDos} onChange={handleInputChange}  />
            {errors.weightDos && <p className={style.error}> {errors.weightDos}</p>}
          </div>
          
          <div>
            <label htmlFor="heightUno"> Altura maxima </label>
            <input type="text" name="heightUno" placeholder="ingrese altura del perro" value={dog.heightUno} onChange={handleInputChange}  />
            {errors.heightUno && <p className={style.error}> {errors.heightUno}</p>}
          </div>

          <div>
            <label htmlFor="heightDos"> Altura minima </label>
            <input type="text" name="heightDos" placeholder="ingrese altura del perro" value={dog.heightDos} onChange={handleInputChange}  />
            {errors.heightDos && <p className={style.error}> {errors.heightDos}</p>}
          </div>
          
          <div>
            <label htmlFor="life_span"  > Años de vida </label>
            <input type="text" name="life_span" placeholder="años de vida" value={dog.life_span} onChange={handleInputChange}  />
            {errors.life_span && <p className={style.error}> {errors.life_span}</p>}
          </div>

          <div>
            <label htmlFor="temperament"> temperamentos </label>
            <input type="text" name="temperament" placeholder="temperamentos" value={dog.temperament} onChange={handleInputChange}  />
            {errors.temperament && <p className={style.error}> {errors.temperament}</p>}
          </div>
          
          <div>
            {/*<label htmlFor="image"> imagen </label>
            <input type="url" name="image" placeholder="imagen del perro" value={dog.image} onChange={handleInputChange}  />
            {errors.image && <p className={style.error}> {errors.image}</p>} */}
          </div>
          
          <button type="submit" className={style.botonRegistrar} >
            <img src={imagen} alt="imagen huesito del boton registrar" />  
          </button>
          
        </form>
      </div>

      <div className={style.divBotonRegistro}>
      </div>
    </div>
  </div>
)
};

export default Form;

