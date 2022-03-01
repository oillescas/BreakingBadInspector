import { useTranslation } from "react-i18next";
import { Character, Quote } from "Types";

import KeyValue from "Components/KeyValue/KeyValue";

import styles from "./Detail.module.css";

type CharacterDetailProps = {
  character: Character;
  quote?: Quote;
  extended?: boolean;
  showQuote?: boolean;
  onClickCharacter?: (character: Character) => void;
};

const CharacterDetail = ({
  character,
  quote = undefined,
  extended = false,
  onClickCharacter = undefined,
  showQuote = false,
}: CharacterDetailProps) => {
  const { name, nickname, img, ...extendedCharacter } = character;

  const { t } = useTranslation();

  return (
    <div
      onClick={() => {
        onClickCharacter && onClickCharacter(character);
      }}
    >
      {character && (
        <>
          <div className={styles.container}>
            <div
              className={
                extended ? styles.characterItemExtended : styles.characterItem
              }
            >
              <div className={styles.characterImage}>
                <img src={img} alt={name} />
              </div>
              <div className={styles.charactersData}>
                <KeyValue
                  compact={!extended}
                  key="name"
                  propKey="name"
                  value={name}
                />
                <KeyValue
                  compact={!extended}
                  key="nickname"
                  propKey="nickname"
                  value={nickname}
                />
                {extended &&
                  Object.keys(extendedCharacter).map((key) => {
                    return (
                      <>
                        <KeyValue
                          key={key}
                          propKey={key}
                          value={(extendedCharacter as any)[key]}
                        />
                      </>
                    );
                  })}
              </div>
            </div>
            {extended && quote && showQuote && (
              <div className={styles.quoteContainer}>
                <p>{quote.quote}</p>
              </div>
            )}
            {extended && !quote && showQuote && (
              <div className={styles.quoteContainer + " " + styles.noQuote}>
                <p>{t("noQuote")}</p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default CharacterDetail;
