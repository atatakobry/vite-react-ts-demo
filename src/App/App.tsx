import { Outlet } from '@tanstack/react-router';
import React from 'react';

import Count from './components/Count';
import Navbar from './components/Navbar';

import styles from './App.module.scss';

const RouterDevtools =
  process.env.NODE_ENV === 'production'
    ? () => null // Render nothing in production
    : React.lazy(() =>
        // Lazy load in development
        import('@tanstack/router-devtools').then((res) => ({
          default: res.TanStackRouterDevtools,
          // For Embedded Mode
          // default: res.TanStackRouterDevtoolsPanel
        })),
      );

const App = () => (
  <>
    <div className={styles.layout}>
      <header className={styles.header}>
        <Navbar />
        <Count />
      </header>

      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Outlet />
        </div>

        <footer className={styles.footer}>(c) 2023</footer>
      </div>
    </div>

    <RouterDevtools />
  </>
);

export default App;
