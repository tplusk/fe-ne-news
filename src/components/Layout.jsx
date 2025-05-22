import { Outlet, Link } from "react-router";
import image from "./images-logos/news-img.png";

export const Layout = () => {
  return (
    <>
      <div>
        <img id="newsGlobe" src={image} alt="News Globe Logo" />
      </div>
      <div>
        <br></br>
      </div>
      <nav>
        <menu>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/articles">Articles</Link>
          </li>
        </menu>
      </nav>

      <Outlet />
    </>
  );
};
