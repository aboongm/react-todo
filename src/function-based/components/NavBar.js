import { Outlet, Link } from 'react-router-dom';
import './NavBar.css';

const Layout = () => (
  <>
    <nav className="bg-color">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
    <Outlet />
  </>
);

export default Layout;
