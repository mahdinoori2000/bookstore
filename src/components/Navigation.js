import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navbar">
      <h2>Bookstore CMS</h2>

      <ul>
        <li>
          <NavLink to="/">Books</NavLink>
        </li>
        <li>
          <NavLink to="catagories">catagories</NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Navigation;
