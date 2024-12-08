import locale from 'locale';
import type { Request, Response, NextFunction } from 'express';
import { defaultLocale, supportedLocales } from '../../app.config';
import { initI18n } from '../../src/services/i18n';
import i18n from 'i18next';

export const langMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const supported = new locale.Locales(supportedLocales, defaultLocale);
  const suggested = req.query.lang && typeof req.query.lang === 'string' ? req.query.lang : null;
  const cookieLocale: string | null = typeof req.cookies.i18nLang === 'string' ? req.cookies.i18nLang : null;
  const acceptLanguagePreferred = new locale.Locales(req.headers['accept-language']).best(supported).toString();
  req.locale = new locale.Locales(suggested ?? cookieLocale ?? acceptLanguagePreferred ?? defaultLocale).best(supported).toString() ?? defaultLocale;
  await initI18n();
  await i18n.changeLanguage(req.locale);
  next();
}