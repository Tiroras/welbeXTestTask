import {useLanguageContext} from '../context/LanguageContext';

// Хук, который в зависимости от языка будет возвращать переданный текст
export const useText = (enText: string, ruText: string) => {
  const {language} = useLanguageContext();

  switch (language) {
    case 'EN':
      return enText;
    case 'RU':
      return ruText;
    default:
      return '';
  }
};
