import { useEffect, useState } from "react";
import { getArticles } from "../api";
import "./Articles.css";
import { NavBar } from "./Navbar";

export const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getArticles()
      .then((articles) => {
        setArticles(articles);
      })
      .catch((err) => {
        setErr(true);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (err) return <p>Uhhh, ohhh...! Something went wrong!</p>;

  return (
    <section>
      <ul>
        {articles.map((article) => {
          return (
            <ul key={article.article_id}>
              {article.title}{" "}
              <p>related comments &#8594; {article.article_id}</p>
            </ul>
          );
        })}
      </ul>
      <br></br>
      <NavBar />
    </section>
  );
};
