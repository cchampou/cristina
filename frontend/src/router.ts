type Route = {
  path: string
  title: string
  description: string
}

type RouteName = string;

const routes: Record<RouteName, Route> = {
  homepage: {
    title: 'Cristina Coellen',
    description: 'D’origine autrichienne, Cristina Coellen est journaliste multimédia. Elle est diplômée de l’école de journalisme de Sciences Po Paris et a travaillé pour des médias français, allemand et européens.',
    path: '/'
  },
  about: {
    title: 'A propos',
    description: 'D’origine autrichienne, Cristina Coellen est journaliste multimédia. Elle est diplômée de l’école de journalisme de Sciences Po Paris et a travaillé pour des médias français, allemand et européens.',
    path: '/about'
  },
  portfolio: {
    title: 'Portfolio',
    description: 'D’origine autrichienne, Cristina Coellen est journaliste multimédia. Elle est diplômée de l’école de journalisme de Sciences Po Paris et a travaillé pour des médias français, allemand et européens.',
    path: '/portfolio'
  }
}

export function findRouteByPath(path: string): Route | undefined {
  return Object.values(routes).find(route => route.path === path);
}

export default routes;