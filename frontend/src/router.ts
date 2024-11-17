type Route = {
  path: string
  title: string
  description: string
}

type RouteName = 'homepage' | 'photography' | 'contact' | 'journalism';

const routes: Record<RouteName, Route> = {
  homepage: {
    title: 'Cristina Coellen',
    description: 'D’origine autrichienne, Cristina Coellen est journaliste multimédia. Elle est diplômée de l’école de journalisme de Sciences Po Paris et a travaillé pour des médias français, allemand et européens.',
    path: '/'
  },
  photography: {
    title: 'Photography',
    description: 'D’origine autrichienne, Cristina Coellen est journaliste multimédia. Elle est diplômée de l’école de journalisme de Sciences Po Paris et a travaillé pour des médias français, allemand et européens.',
    path: '/photography'
  },
  journalism: {
    title: 'Journalism',
    description: 'D’origine autrichienne, Cristina Coellen est journaliste multimédia. Elle est diplômée de l’école de journalisme de Sciences Po Paris et a travaillé pour des médias français, allemand et européens.',
    path: '/journalism'
  },
  contact: {
    title: 'Contact',
    description: 'D’origine autrichienne, Cristina Coellen est journaliste multimédia. Elle est diplômée de l’école de journalisme de Sciences Po Paris et a travaillé pour des médias français, allemand et européens.',
    path: '/contact'
  },
}

export function findRouteByPath(path: string): Route | undefined {
  return Object.values(routes).find(route => route.path === path);
}

export default routes;