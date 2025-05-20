import { Link } from "react-router";

const NavBar = () => {
  return (
    <nav>
      <span className="newsspan">
        <Link to="/">Welcome | </Link>
      </span>
    </nav>
  );
};
export default NavBar;
