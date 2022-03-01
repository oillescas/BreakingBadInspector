import { useTranslation } from "react-i18next";
import { useCallback } from "react";

import styles from "./KeyValue.module.css";

type KeyValueProps = {
  propKey: string;
  value: any;
  compact?: boolean;
};

const KeyValue = ({
  propKey,
  value,
  compact,
}: KeyValueProps) => {
  const { t } = useTranslation();

  const valueString = useCallback((val: any) => {
    if (val instanceof Array) {
      return val.length > 0 ? val.join(", ") : t("no");
    }
    return t(val);
  }, [t]);

  return (
    <div key={propKey} className={compact ? styles.compact : "" + styles.root}>
      <span>{t(propKey)}:</span> <span>{valueString(value)}</span>
    </div>
  );
};

export default KeyValue;
