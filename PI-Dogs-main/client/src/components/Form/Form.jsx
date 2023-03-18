import video from "../videos/videoPerritos.mp4"
import style from "./Form.module.css";
import Navbar from "../Navbar/Navbar";
import imagen2 from "../imagenes/BotonPerrito.jpeg"
import CrearDog from "../imagenes/botonregistromodificado.jpg"
import validateForm from "./validateForm"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTemps, getAllDogs, postdog } from "../redux/actions";

const Form = () => {
  const traslado = useNavigate()
  const dispatch = useDispatch()
  
  //------------------------------ESTADOS------------------------------------------------
  
  const { temperamentos } = useSelector(state => state)
  const { myDogs } = useSelector(state => state)
  const [temp, setTemp] = useState(false)
  const [boton,setBoton] = useState(true)
  
  const [dog, setDog] = useState({
    name: "",
    weightUno: "",
    weightDos: "",
    heightUno: "",
    heightDos: "",
    temperamentos: [],
    life_span: "",
    image: ""
  })
  const [errors, setErrors] = useState({
    name: "",
    weightUno: "",
    weightDos: "",
    heightUno: "",
    heightDos: "",
    temperamentos: [],
    life_span: "",
    image: ""
  })
  
  //------------------------------BOTONCHECKBOX----------------------------------------------
  const handleTypesClick = () => {
    if(temp === false){
      setTemp(temperamentos)
    }else{
      setTemp(!temperamentos)
    }
    boton === false?setBoton(true):setBoton(false)
  }

  const handleTypeChange = (event) => {
    const { value, checked } = event.target;

      if(!dog.temperamentos[value]){
        if(checked){
          setDog({
            ...dog,
            temperamentos:[...dog.temperamentos, value]
          })
        }else{
          let filter = dog.temperamentos.filter(ele=> ele !== value)
          setDog({
          ...dog,
          temperamentos:filter
          })
        }
      }
  };

  const handleTypesFilter = () =>{
    setDog({
      ...dog,
      temperamentos:[]
    })
  }

  //------------------------------FORMULARIO---------------------------------------------
 
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
    if(dog.temperamentos.length < 2){
      setDog({
        ...dog,
        temperamentos:[]
      })
      return alert("Por favor ingresemos mas de 2 temperamentos")
    }
    else if(dog.temperamentos.length > 6){
      setDog({
        ...dog,
        temperamentos:[]
      })
      return alert("No puede tener mas de 6 temperamentos")
    }

      postdog(dog)
      alert("haz creado una nueva raza! :D")
      traslado(`/dogs/${myDogs[myDogs.length-1].id}`)
  }
  
  useEffect(() => {
    dispatch(getAllDogs())
    dispatch(getAllTemps())
  }, [dispatch])
  
  return (
    <div className={style.divContenedor} >

      <div className={style.menu} >
        <Navbar />
      </div>

      <div className={style.contenedorPerrito}>
          <img src={imagen2} width="200px" alt="BotonPerrito" />
          <div className={style.videoint} >
            <video className={style.videoint} width="750px" controls autoPlay loop >
              <source src={video} type="video/mp4" />
            </video>
        </div>

      </div>
      <div className={style.formularioExt}>
        <div className={style.formularioint} >
          <form onSubmit={handleSubmit} >

            <div className={style.label} >
              <label htmlFor="name"> Nombre </label>
              <input className={style.input} type="text" name="name" placeholder="ingrese el nombre" value={dog.name} onChange={handleInputChange} />
              {errors.name && <p className={style.error}> {errors.name}</p>}
            </div>

            <div className={style.HWeight} >
              <label htmlFor="weight"> Peso Del perro</label>

              <input className={style.inputHWeightUno} type="text" name="weightUno" placeholder="min" value={dog.weightUno} onChange={handleInputChange} />

              <input className={style.inputHWeightDos} type="text" name="weightDos" placeholder="max" value={dog.weightDos} onChange={handleInputChange} />

              {errors.weightUno?<p className={style.errorPartidos}> {errors.weightUno}</p>:errors.weightDos && <p className={style.errorPartidos}> {errors.weightDos}</p>}  
            </div>

            <div className={style.HWeight} >
              <label htmlFor="heightUno"> Altura del perro </label>
              <input className={style.inputHWeightDos} type="text" name="heightUno" placeholder="min" value={dog.heightUno} onChange={handleInputChange} />

              <input className={style.inputHWeightDos} type="text" name="heightDos" placeholder="max" value={dog.heightDos} onChange={handleInputChange} />
            </div>
            {errors.heightUno?<p className={style.errorPartidos}> {errors.heightUno}</p>:errors.heightDos && <p className={style.errorPartidos}> {errors.heightDos}</p>} 

            <div>
              <label htmlFor="life_span"  > Años de vida </label>
              <input className={style.input} type="text" name="life_span" placeholder="años de vida" value={dog.life_span} onChange={handleInputChange} />
              {errors.life_span && <p className={style.error}> {errors.life_span}</p>}
            </div>

            <div>
              <label htmlFor="image"  > Imagen del Perro </label>
              <input className={style.input} type="text" name="image" placeholder="Deja aquí la Url" value={dog.image} onChange={handleInputChange} />
              {errors.image && <p className={style.error}> {errors.image}</p>}
            </div>
          </form>

          <label htmlFor="life_span"  > Temperamentos </label>
          <div className={style.filterSelection}>
              <div className={style.filter__buttons} >
                <button className={style.filter__button} onClick={handleTypesClick}>
                  Seleccionar
                </button>
                <button className={style.filter__buttonDos} onClick={handleTypesFilter}>
                  Clean Filters
                </button>
              </div>

              <div>
              {temp && (
                <div className={style.filter__types}>
                  {
                    temperamentos.map(ele=>(
                      <label htmlFor={ele} key={ele}>
                        <input type="checkbox" value={ele}  onChange={handleTypeChange} />
                        {ele}
                      </label>
                    ))
                  }                    
                </div>)}
              </div>
          </div>

          <div>
            {boton === true && 
            <button type="submit" className={style.botonRegistrar} >
              <img src={CrearDog} onClick={handleSubmit}  alt="imagen huesito del boton registrar" />
            </button>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form;



