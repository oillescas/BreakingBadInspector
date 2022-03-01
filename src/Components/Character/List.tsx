import { Character } from 'Types';
import CharacterDetail from 'Components/Character/Detail';

import styles from "./List.module.css";

type CharacterListProps = {
  characters: Character[];
  onClickItem?: (character:Character) => void ;
};

const CharacterList = ({characters, onClickItem}: CharacterListProps) => {

  return <>
    <div className={styles.container}>
        {characters.map(character => <CharacterDetail key={character.char_id} character={character} onClickCharacter={onClickItem}/>)}
    </div>
  </>
}


export default CharacterList;