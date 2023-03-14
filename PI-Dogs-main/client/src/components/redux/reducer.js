import { ERROR } from "./actions";
import {
  GET_ALL_DOGS,
  GET_DOG,
  FILTER,
  ORDER,
  GET_TEMPS,
} from "./actions-types";

const inicialState = {
  myDogs: [],
  error: {},
  dog: [],
  temperamentos: [],
};

const reducer = (state = inicialState, action) => {
  // por parametro en action recibimos un destructurin de {type, payload}
  // pero en esta ocacion usaremos las props y luego lo llamamos como propiedad

  switch (action.type) {
    case GET_ALL_DOGS:
      return {
        ...state,
        myDogs: action.payload,
      };

    case GET_DOG:
      return {
        ...state,
        dog: [...state.dog, ...action.payload],
      };

    case FILTER:
      console.log(action.payload);
      return {
        ...state,
        myDogs: action.payload,
      };

    case ORDER:
      switch (action.payload) {
        case "ascendente":
          const temp = state.myDogs.sort((a, b) => a.id - b.id);
          return {
            ...state,
            myDogs: temp,
          };
        case "descendente":
          const temp2 = state.myDogs.sort((a, b) => b.id - a.id);
          return {
            ...state,
            myDogs: temp2,
          };
        case "ascendente":
          const temp3 = state.myDogs.sort((a, b) => a.id - b.id);
          return {
            ...state,
            myDogs: temp3,
          };
        case "maxpeso":
          console.log(
            "Esto es en la linea 70 de reducer---",
            state.myDogs[1].weight?.split(" - ")
          );
          const temp4 = state.myDogs.sort(
            (a, b) =>
              Number(a.weight?.split(" - ")[1]) -
              Number(b.weight?.split(" - ")[1])
          );
          return {
            ...state,
            myDogs: temp4,
          };
        case "minpeso":
          console.log(
            "Esto es en la linea 70 de reducer---",
            state.myDogs[0].weight?.split(" - ")[0]
          );
          const temp5 = state.myDogs.sort(
            (a, b) =>
              Number(b.weight?.split(" - ")[1]) -
              Number(a.weight?.split(" - ")[1])
          );
          return {
            ...state,
            myDogs: temp5,
          };
        default:
          return {
            ...state,
            myDogs: state.myDogs,
          };
      }

    case GET_TEMPS:
      return {
        ...state,
        temperamentos: action.payload,
      };

    case ERROR:
      return {
        ...state,
        error: action.payload,
      };
    // case DELETE_FAVORITE:
    //   return {
    //     ...state,
    //     myFavorites: state.myFavorites.filter(
    //       char => char.id !== action.payload
    //     ),
    //   };

    default:
      console.log(action.type);
      console.log(action.payload);
      console.log("hubo un erro y se activo line 74 del archivo actions.js");
      return { ...state };
  }
};

export default reducer;
