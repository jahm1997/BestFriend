import axios from "axios";
import { GET_ALL_DOGS, GET_DOG, ORDER, FILTER } from "./actions-types";

export const ERROR = "error";

export const getAllDogs = () => async dispatch => {
  try {
    const response = await axios.get("http://localhost:3001/dogs");
    const dogs = response.data;
    return dispatch({ type: GET_ALL_DOGS, payload: dogs });
  } catch (error) {
    return dispatch({ type: ERROR, payload: error });
  }
};

export const postdog = async objeto => {
  return await axios.post("http://localhost:3001/dogs/add", objeto);
};

export const getDog = id => async dispatch => {
  try {
    const response = await axios.get(`http://localhost:3001/dogs/${id}`);
    return dispatch({ type: GET_DOG, payload: response.data });
  } catch (error) {
    return dispatch({ type: ERROR, payload: error });
  }
};

export const filterCards = (valor, propiedad) => async dispatch => {
  const response = await axios.get(`http://localhost:3001/dogs`);
  try {
    if (propiedad === "") {
      return dispatch({ type: FILTER, payload: response.data });
    } else {
      if (propiedad !== "temperament") {
        const temp = response.data.filter(dog =>
          dog[propiedad].includes(valor)
        );
        return dispatch({ type: FILTER, payload: temp });
      } else {
        console.log(propiedad);
        const filter = response.data.map(dog => {
          return dog[propiedad].toLowerCase().includes(valor);
        });
        console.log("--------------------------------");
        console.log(filter);
        return dispatch({ type: FILTER, payload: filter });
      }
    }
  } catch (error) {
    return dispatch({ type: ERROR, payload: error });
  }
};

export const orderCards = string => {
  return { type: ORDER, payload: string };
};

// };
// export const deleteFavorite = id => async dispatch => {
//   await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`);
//   return dispatch({ type: DELETE_FAVORITE, payload: id });
// };
