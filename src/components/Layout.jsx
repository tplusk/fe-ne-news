import { Outlet, Link } from "react-router";
import image from "./images-logos/news-img.png";

export const Layout = () => {
  return (
    <>
      <div>
        <img id="newsGlobe" src={image} alt="News Globe Logo" />
      </div>
      <nav>
        <menu>
          <span>
            <Link to="/">Home |</Link>
          </span>
          <span>
            <Link to="/articles"> Articles |</Link>
          </span>
          <span>
            <Link to="/topics"> Topics</Link>
          </span>
        </menu>
      </nav>

      <Outlet />
    </>
  );
};
