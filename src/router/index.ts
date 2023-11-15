import { Router } from '@tanstack/react-router';
import routes from '../App/routes';

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const router = new Router({ routeTree: routes });

export default router;
