import { RootRoute, Route } from '@tanstack/react-router';
import App from './App';
import Home from '../pages/Home';
import Anime from '../pages/Anime';

const rootRoute = new RootRoute({
  component: App,
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

const animeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/anime',
  component: Anime,
});

const routes = rootRoute.addChildren([indexRoute, animeRoute]);

export default routes;
