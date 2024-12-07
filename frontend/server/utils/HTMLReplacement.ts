import { findRouteByPath } from '../../src/router';

const DEFAULT_TITLE = 'Cristina Coellen';

export function HTMLReplacement(template: string, serverHtml: string, path: string, lang: string) {
  const htmlWithoutTitle = template.replace(`<!--ssr-outlet-->`, serverHtml);
  const htmlWithLang = htmlWithoutTitle.replace('<!--lang-->', lang);
  const routeConfig = findRouteByPath(path);
  if (!routeConfig) {
    return htmlWithLang;
  }
  const withTitle = replaceTitle(htmlWithLang, routeConfig.title || DEFAULT_TITLE);
  return withTitle.replace('<!--meta-description-->', `<meta name="description" content="${routeConfig.getDescription()}">`);
}


export function replaceTitle(html: string, title: string): string {
  return html.replace(/<title>.*<\/title>/, `<title>${title}</title>`);
}