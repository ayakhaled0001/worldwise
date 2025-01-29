import { NavLink } from "react-router-dom";
impor;
function PageNav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">product</NavLink>
        </li>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
