import { useCallback, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "wouter";
import AppHeader from "Components/AppHeader/AppHeader";
import CharacterDetail from "Components/Character/Detail";
import { getQuotes } from "Services/breakingBadService";
import { CharacterContext } from "state/context";
import { Quote } from "Types";

const CharacterDetailPage = () => {
  const [{currentCharacter, isLoading, error}] = useContext(CharacterContext);
  const [quote, setQuote] = useState<Quote | null>(null);
  const [isLoadingQuote, setIsLoadingQuote] = useState(false);

  useEffect(() => {
    setQuote(null);
    if (currentCharacter) {
      setIsLoadingQuote(true);
      getQuotes(currentCharacter.name).then((data) => {
        setQuote(data[0]);
        setIsLoadingQuote(false);          
      });
    }
  }, [currentCharacter]);

  const [, setLocation] = useLocation();

  const onClickHeader = useCallback(
    () => {
      setLocation(`/`);
    },
    [setLocation]
  );

  const { t } = useTranslation();

  return (
    <>
      <AppHeader leftText="🔙 " title={t('appTitle')} onClickLeft={onClickHeader}/>
      {currentCharacter && (
        <>
          <h2>{t('detailTitle')}</h2>
          <CharacterDetail
            character={currentCharacter}
            quote={quote ? quote : undefined}
            extended
            showQuote = {!isLoadingQuote}
          />
          { isLoadingQuote && <h3>{t('loadingQuote')}</h3>}
        </>
      )}
       {isLoading && <h2>{`${t('loading')}...`}</h2>}
       {error && <h2>{`${t('error')}...`}</h2>}
    </>
  );
};

export default CharacterDetailPage;
