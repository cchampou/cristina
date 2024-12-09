import i18n from 'i18next';

export function formatDateWithLocale(date: string): string {
  console.log('date', date);
  return new Date(date).toLocaleDateString(getLocaleFromI18n());
}

function getLocaleFromI18n(): string {
  switch (i18n.language) {
    case 'fr':
      return 'fr-FR';
    case 'en':
    default:
      return 'en-GB';
  }
}