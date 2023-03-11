import axios from "axios";
import { GET_ALL_DOGS, GET_DOG, FILTER, ORDER } from "./actions-types";

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
  const perros = response.data;
  try {
    if (valor !== "") {
      var filter = perros.filter(dog =>
        dog[propiedad]?.toLowerCase().includes(valor)
      );
    }

    if (filter.length === 0) {
      alert("no encontramos coincidencias");
      return dispatch({ type: FILTER, payload: response.data });
    }

    return dispatch({ type: FILTER, payload: filter });
  } catch (error) {
    return dispatch({ type: ERROR, payload: error });
  }
};

export const orderCards = id => {
  return { type: ORDER, payload: id };
};

// };
// export const deleteFavorite = id => async dispatch => {
//   await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`);
//   return dispatch({ type: DELETE_FAVORITE, payload: id });
// };
