export function replaceTitle(html: string, title: string): string {
  return html.replace(/<title>.*<\/title>/, `<title>${title}</title>`);
}