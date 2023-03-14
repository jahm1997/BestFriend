import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import style from "./Form.module.css";
import validateForm from "./validateForm"
import { getAllTemps, postdog } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import CrearDog from "../imagenes/botonregistromodificado.jpg"
import imagen2 from "../imagenes/BotonPerrito.jpeg"

import video from "../videos/videoPerritos.mp4"
import { useDispatch, useSelector } from "react-redux";

const Form = () => {
  const traslado = useNavigate()
  const dispatch = useDispatch()
  
  const { temperamentos } = useSelector(state => state)
  const [temp, setTemp] = useState(false)
  const [boton,setBoton] = useState(true)
  const arrayTemps = Object.keys(temp)
  console.log(temp);

  //------------------------------BOTONCHECKBOX----------------------------------------------
  const handleTypesClick = () => {
    if(temp === false){
      setTemp(temperamentos)
    }else{
      temp?setTemp(!temperamentos):setTemp(temperamentos)
    }
    boton === false?setBoton(true):setBoton(false)
  };
  
  const handleTypeChange = (event) => {
    const { name, checked } = event.target;
    setTemp({
      ...temp,
      [name]: checked,
    });
    

  };
//------------------------------FORMULARIO------------------------------------------------
  const [dog, setDog] = useState({
    name: "",
    weightUno: "",
    weightDos: "",
    heightUno: "",
    heightDos: "",
    life_span: "",
    image: ""
  })
  const [errors, setErrors] = useState({
    name: "",
    weightUno: "",
    weightDos: "",
    heightUno: "",
    heightDos: "",
    life_span: "",
    image: ""
  })

  const handleInputChange = (eve) => {
    setDog({
      ...dog,
      [eve.target.name]: eve.target.value
    })
    setErrors(
      validateForm({
        ...dog,
        [eve.target.name]: eve.target.value
      })
    )
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    let arraytemps= []
    for (const iterator of temp) {
      if(temp[iterator] === false){
        arrayTemps.push(iterator)
      }
    }
    postdog(dog)
    alert("haz creado una nueva raza! :D")
    traslado("/")
  }

  useEffect(() => {
    dispatch(getAllTemps())
  }, [dispatch])

  return (
    <div className={style.divContenedor} >

      <div className={style.menu} >
        <Navbar />
      </div>

      <div className={style.botonPerrito}>
        <div className={style.videoext} >
          <img src={imagen2} width="200px" alt="BotonPerrito" />
          <div className={style.videoint} >
            <video width="750px" controls autoPlay loop >
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>

      </div>

      <div className={style.formularioExt}>
        <div className={style.formularioint} >
          <form onSubmit={handleSubmit} >

            <div className={style.label} >
              <label htmlFor="name"> Nombre </label>
              <input className={style.input} type="text" name="name" placeholder="ingrese el nombre" value={dog.name} onChange={handleInputChange} />
              {/* // en este espacio colocamos los errores que lanza si no se introduce username correcto */}
              {errors.name && <p className={style.error}> {errors.name}</p>}
            </div>

            <div className={style.HWeight} >
              <label htmlFor="weightUno"> Peso Del perro</label>
              <input className={style.inputHWeightUno} type="text" name="weightUno" placeholder="min" value={dog.weightUno} onChange={handleInputChange} />
              {errors.weightUno && <p className={style.error}> {errors.weightUno}</p>}

              <input className={style.inputHWeightDos} type="text" name="weightDos" placeholder="max" value={dog.weightDos} onChange={handleInputChange} />
              {errors.weightDos && <p className={style.error}> {errors.weightDos}</p>}
            </div>

            <div className={style.HWeight} >
              <label htmlFor="heightUno"> Altura del perro </label>
              <input className={style.inputHWeightDos} type="text" name="heightUno" placeholder="min" value={dog.heightUno} onChange={handleInputChange} />
              {errors.heightUno && <p className={style.error}> {errors.heightUno}</p>}

              <input className={style.inputHWeightDos} type="text" name="heightDos" placeholder="max" value={dog.heightDos} onChange={handleInputChange} />
              {errors.heightDos && <p className={style.error}> {errors.heightDos}</p>}
            </div>

            <div>
              <label htmlFor="life_span"  > Años de vida </label>
              <input className={style.input} type="text" name="life_span" placeholder="años de vida" value={dog.life_span} onChange={handleInputChange} />
              {errors.life_span && <p className={style.error}> {errors.life_span}</p>}
            </div>
          </form>

          <label htmlFor="life_span"  > Temperamentos </label>
          <div className={style.filterSelection}>
              <button className={style.filter__button} onClick={handleTypesClick}>
                Seleccionar
              </button>
              <div>
              {temp && (
                <div className={style.filter__types}>
                  {
                    arrayTemps.map(ele=>(
                      <label htmlFor={ele} key={ele}>
                        <input type="checkbox" name={ele} onChange={handleTypeChange} />
                        {ele}
                      </label>
                    ))
                  }                    
                </div>)}
              </div>
          </div>
  
          <div>
            {boton == true && 
            <button type="submit" className={style.botonRegistrar} >
              <img src={CrearDog} alt="imagen huesito del boton registrar" />
            </button>

            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form;



