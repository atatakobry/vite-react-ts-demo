import { Link } from '@tanstack/react-router';
import styles from './Navbar.module.scss';

const Navbar = () => (
  <div className={styles.navbar}>
    <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: 'isActive' }}>
      Home
    </Link>
    <Link to="/anime" activeProps={{ className: 'isActive' }}>
      Anime
    </Link>
  </div>
);

export default Navbar;
