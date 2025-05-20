import { useEffect, useState } from "react";
import { getArticles } from "../api";

export const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getArticles()
      .then((articles) => {
        setArticles(artciles);
      })
      .catch((error) => {
        setError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Uhhh, ohhh...! Something went wrong!</p>;

  return (
    <section>
      <h2>Articles</h2>
      <ul>
        {articles.map((article) => {
          return <li key={`article-${article.article_name}`}></li>;
        })}
      </ul>
    </section>
  );
};
