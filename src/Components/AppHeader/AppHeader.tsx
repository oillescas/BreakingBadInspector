import { useTranslation } from "react-i18next";

import style from "./AppHeader.module.css";

type AppHeaderProps = {
  leftText?: string;
  title?: string;
  onClickLeft?: () => void;
};

const AppHeader = ({
  leftText,
  title = "Breaking Bad Inspector",
  onClickLeft,
}: AppHeaderProps) => {

  const { i18n } = useTranslation();

  return (
    <header className={style.AppHeader}>
      <div className={style.left}>
        {leftText && <button onClick={onClickLeft}>{leftText}</button>}
      </div>
      <div className={style.center}>
        { title } - { i18n.language }
      </div>
      <div className={style.right}>
        {i18n.language!=='en' && <button onClick={() => i18n.changeLanguage("en")}>EN</button>}
        {i18n.language!=='es' && <button onClick={() => i18n.changeLanguage("es")}>ES</button>}
      </div>
    </header>
  );
};

export default AppHeader;
