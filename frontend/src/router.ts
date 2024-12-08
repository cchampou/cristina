import i18n from 'i18next';

type Route = {
  path: string
  title: string
  getDescription: () => string
}

type RouteName = 'homepage' | 'photography' | 'contact' | 'journalism' | 'legal';

const getDescription = () => i18n.t('about').replace(/(<break \/>)+/g, ' ').replace(/<[^>]*>/g, '');

const routes: Record<RouteName, Route> = {
  homepage: {
    title: 'Cristina Coellen',
    getDescription,
    path: '/'
  },
  photography: {
    title: 'Photography',
    getDescription,
    path: '/photography'
  },
  journalism: {
    title: 'Journalism',
    getDescription,
    path: '/journalism'
  },
  contact: {
    title: 'Contact',
    getDescription,
    path: '/contact'
  },
  legal: {
    title: 'Legal',
    getDescription,
    path: '/legal'
  }
}

const getRoutes = () => routes;

export function findRouteByPath(path: string): Route | undefined {
  return Object.values(getRoutes()).find(route => route.path === path);
}

export default routes;