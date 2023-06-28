import React, {
  memo,
  useState,
  useMemo,
  useCallback,
  useContext,
  PropsWithChildren,
} from 'react';
import {LanguageType} from '../types';
import noop from 'lodash.noop';

interface InitialDataType {
  language: LanguageType;
  switchLanguage: (language: LanguageType) => void;
}

const initialData: InitialDataType = {
  language: 'EN',
  switchLanguage: noop,
};

const LanguageContext = React.createContext(initialData);

export const LanguageProvider: React.FC<PropsWithChildren> = memo(
  ({children}) => {
    const [language, setLanguage] = useState<LanguageType>('EN');

    const switchLanguage = useCallback((language: LanguageType) => {
      setLanguage(language);
    }, []);

    const value = useMemo(
      () => ({language, switchLanguage}),
      [language, switchLanguage],
    );

    return (
      <LanguageContext.Provider value={value}>
        {children}
      </LanguageContext.Provider>
    );
  },
);

export const useLanguageContext = () => useContext(LanguageContext);
