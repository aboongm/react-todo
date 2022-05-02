import { Outlet, Link } from 'react-router-dom';
import './NavBar.css';

const Layout = () => (
  <>
    <nav>
      <ul>
        <li>
          <Link to="/todoContainer">Home</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
      </ul>
    </nav>
    <Outlet />
  </>
);

export default Layout;
