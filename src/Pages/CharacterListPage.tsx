import { useCallback, useContext } from "react";
import { useLocation } from "wouter";

import { CharacterContext } from "state/context";
import { setSelectedCharacter } from "state/actions";

import CharacterList from "Components/Character/List";
import AppHeader from "Components/AppHeader/AppHeader";

import { Character } from "Types";
import { useTranslation } from "react-i18next";

const CharacterListPage = () => {
  const [{ characterList, isLoading, error }, dispatch] = useContext(CharacterContext);
  const [, setLocation] = useLocation();

  const onClickItem = useCallback(
    (character: Character) => {
      dispatch(setSelectedCharacter(character));
      setLocation(`/character/${character.char_id}`);
    },
    [setLocation]
  );

  const { t } = useTranslation();

  return (
    <>
      <AppHeader title={t('appTitle')} />
      <h2>{t('listTitle')}</h2>
      {characterList && <CharacterList characters={characterList} onClickItem={onClickItem} />}
      {isLoading && <h2>{`${t('loading')}...`}</h2>}
      {error && <h2>{`${t(error)}...`}</h2>}
    </>
  );
};

export default CharacterListPage;
