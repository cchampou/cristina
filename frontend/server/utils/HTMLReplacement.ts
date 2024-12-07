import { findRouteByPath } from '../../src/router';
import { supportedLocales } from '../../app.config';

const DEFAULT_TITLE = 'Cristina Coellen';

export function HTMLReplacement(template: string, serverHtml: string, scheme: string, host: string, path: string, lang: string) {
  const htmlWithoutTitle = template.replace(`<!--ssr-outlet-->`, serverHtml);
  const htmlWithLang = htmlWithoutTitle.replace('<!--lang-->', lang);
  const htmlWithAlternate = htmlWithLang.replace('<!--alternate-->', supportedLocales.filter(lng => lng !== lang).map(locale => `<link rel="alternate" hreflang="${locale}" href="${scheme}://${host}${path}?lang=${locale}">`).join(''));
  const routeConfig = findRouteByPath(path);
  if (!routeConfig) {
    return htmlWithAlternate;
  }
  const withTitle = replaceTitle(htmlWithAlternate, routeConfig.title || DEFAULT_TITLE);
  return withTitle.replace('<!--meta-description-->', `<meta name="description" content="${routeConfig.getDescription()}">`);
}


export function replaceTitle(html: string, title: string): string {
  return html.replace(/<title>.*<\/title>/, `<title>${title}</title>`);
}