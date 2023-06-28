import {LanguageType} from '../types';

// Функция для рендера категории в приложении

export const renderCategory = (
  category: string,
  currentLanguage: LanguageType = 'EN',
): string => {
  // Если текущий язык - английский, отображает категорию на английском, и наоборот
  const isEnLanguage = currentLanguage === 'EN';

  switch (category) {
    case 'cargo':
      return isEnLanguage ? 'Cargo' : 'Грузовой';
    case 'special':
      return isEnLanguage ? 'Special' : 'Спецтранспорт';
    case 'passenger':
      return isEnLanguage ? 'Passenger' : 'Пассажирский';
    default:
      return category;
  }
};
