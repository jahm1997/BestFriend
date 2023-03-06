import { ERROR } from "./actions";
import { GET_ALL_DOGS, GET_DOG, SUCCESS_POST } from "./actions-types";

const inicialState = {
  myDogs: [],
  error: {},
  success: {},
  dog: {},
};

const reducer = (state = inicialState, action) => {
  // por parametro en action recibimos un destructurin de {type, payload}
  // pero en esta ocacion usaremos las props y luego lo llamamos como propiedad

  switch (action.type) {
    case GET_ALL_DOGS:
      return {
        ...state,
        myDogs: [...state.myDogs, action.payload],
      };

    case GET_DOG:
      return {
        ...state,
        dog: action.payload,
      };

    case SUCCESS_POST:
      return {
        ...state,
        success: action.payload,
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

    // case FILTER:
    //   const filtroCharacters = state.allCharacters.filter(char =>
    //     char.gender === action.payload ? char.gender : state.allCharacters
    //   );
    //   return {
    //     ...state,
    //     myFavorites: filtroCharacters,
    //   };

    // case ORDER:
    //   return {
    //     ...state,
    //     myFavorites:
    //       action.payload === "Ascendente"
    //         ? state.allCharacters.sort((a, b) => a.id - b.id)
    //         : state.allCharacters.sort((a, b) => b.id - a.id),
    //   };

    default:
      return { ...state };
  }
};

export default reducer;
