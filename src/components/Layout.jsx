import { Outlet, Link } from "react-router";

export const Layout = () => {
  return (
    <>
      <div>
        <br></br>
      </div>
      <nav>
        <menu>
          <li>
            <Link to="/">Home Page </Link>
          </li>
          <li>
            <Link to="/articles">Articles </Link>
          </li>
        </menu>
      </nav>

      <Outlet />
    </>
  );
};
