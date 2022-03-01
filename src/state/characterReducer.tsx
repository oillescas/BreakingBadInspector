import { Character } from "Types";
import { ACTIONS } from "state/actions";

export type AppState = {
  characterList: Character[];
  currentCharacter: Character | null;
  isLoading: boolean;
  error: string | null;
};

export const initialState:AppState = {
  currentCharacter: null,
  characterList: [],
  isLoading: false,
  error: null,
};

export const characterReducer = (state:AppState, action: any) => {
  console.log("characterReducer: ", action);
  switch (action.type) {
    case ACTIONS.INIT_LOAD_CHARACTERS:
      return {...state, isLoading: true};
    case ACTIONS.SELECT_SELECTED_CHARACTER:
      return {...state, currentCharacter: action.payload, isLoading: false, error: null};
    case ACTIONS.SET_CHARACTERS:
      return {...state, characterList: action.payload};
    case ACTIONS.ERROR_LOAD_CHARACTERS:
      return {...state, isLoading: false, error: action.payload};
    default:
      return state;
  }
};
