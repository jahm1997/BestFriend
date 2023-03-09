import { ERROR } from "./actions";
import { GET_ALL_DOGS, GET_DOG, ORDER, FILTER } from "./actions-types";

const inicialState = {
  myDogs: [],
  error: {},
  dog: [],
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
        dog: [...state.dog, action.payload],
      };

    case FILTER:
      // const filtroDogs = state.myDogs.filter(dog =>
      //   dog[action.payload.propiedad].includes(action.payload.valor)
      // );
      return {
        ...state,
        myDogs: action.payload,
      };

    case ORDER:
      return {
        ...state,
        myDogs:
          action.payload === "Ascendente"
            ? state.myDogs.sort((a, b) => a.id - b.id)
            : state.myDogs.sort((a, b) => b.id - a.id),
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
      return { ...state };
  }
};

export default reducer;
