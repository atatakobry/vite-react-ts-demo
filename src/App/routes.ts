import { RootRoute, Route } from '@tanstack/react-router';

import Anime from '../pages/Anime';
import Home from '../pages/Home';
import Pokemon from '../pages/Pokemon';
import App from './App';

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

const pokemonRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/pokemon',
  component: Pokemon,
});

const routes = rootRoute.addChildren([indexRoute, animeRoute, pokemonRoute]);

export default routes;
