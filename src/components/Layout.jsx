import { Outlet, Link } from "react-router";

export const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Welcome Page </Link>
          </li>
          <li>
            <Link to="/articles">Articles </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};
