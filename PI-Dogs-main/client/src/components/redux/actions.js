import axios from "axios";
import { GET_ALL_DOGS, GET_DOG, SUCCESS_POST } from "./actions-types";

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
    const response = await axios.get("http://localhost:3001/dogs/" + id);
    const dog = response.data;
    console.log(dog);
    return dispatch({ type: GET_DOG, payload: response });
  } catch (error) {
    return dispatch({ type: ERROR, payload: error });
  }
};

// };
// export const deleteFavorite = id => async dispatch => {
//   await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`);
//   return dispatch({ type: DELETE_FAVORITE, payload: id });
// };

// export const filterCards = gender => {
//   return { type: FILTER, payload: gender };
// };

// export const orderCards = id => {
//   return { type: ORDER, payload: id };
// };