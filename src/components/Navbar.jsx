import { Link } from "react-router";

export const NavBar = () => {
  return (
    <nav>
      <span className="newsspan">
        <Link to="/">Welcome </Link>
      </span>
      <span className="newsspan">
        <Link to="/articles">Articles </Link>
      </span>
    </nav>
  );
};
