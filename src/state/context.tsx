import React, { Dispatch, useEffect, useReducer } from "react";
import { Character } from "Types";
import { AppState, characterReducer, initialState } from "state/characterReducer";
import { getCharacters } from "Services/breakingBadService";
import {
  errorLoadingCharacters,
  initLoadCharacters,
  setCharacters,
  setSelectedCharacter,
} from "state/actions";
import { useRoute } from "wouter";

export const CharacterContext = React.createContext<
  [state: AppState, dispatch: Dispatch<{ type: Symbol; payload: Character }>]
>([
  initialState,
  () => {
    /**/
  },
]);

type ContextType = {
  children: React.ReactNode;
};

export function AppContextProvider({ children }: ContextType) {
  const [state, dispatch] = useReducer(characterReducer, initialState);
  const [match, params] = useRoute("/character/:id");

  useEffect(() => {
    console.log("AppContextProvider: useEffect");
    dispatch(initLoadCharacters());
    getCharacters().then(
      (data) => {
        dispatch(setCharacters(data));
        if (match && params) {
          const selectedCharacter = data.find(
            (character) => character.char_id === parseInt(params.id)
          );
          selectedCharacter &&
            dispatch(setSelectedCharacter(selectedCharacter));
        }
      },
      (error) => {
        dispatch(errorLoadingCharacters('Error loading characters'));
      }
    );
  }, []);

  return (
    <CharacterContext.Provider value={[state, dispatch]}>
      {children}
    </CharacterContext.Provider>
  );
}
