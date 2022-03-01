import { Character } from "Types";

export const ACTIONS = {
  SELECT_SELECTED_CHARACTER: Symbol("SELECT_SELECTED_CHARACTER"),
  SET_CHARACTERS: Symbol("SET_CHARACTERS"),
  INIT_LOAD_CHARACTERS: Symbol("INIT_LOAD_CHARACTERS"),
  ERROR_LOAD_CHARACTERS: Symbol("ERROR_LOAD_CHARACTERS"),
};

export const setSelectedCharacter = (character: Character) => ({
  type: ACTIONS.SELECT_SELECTED_CHARACTER,
  payload: character,
});

export const setCharacters = (characters: Character[]) => ({
  type: ACTIONS.SET_CHARACTERS,
  payload: characters,
});

export const initLoadCharacters = () => ({
  type: ACTIONS.INIT_LOAD_CHARACTERS,
  payload: true,
});

export const errorLoadingCharacters = (error:string) => ({
  type: ACTIONS.ERROR_LOAD_CHARACTERS,
  payload: error,
});
