import { useEffect, useState } from "react";
import { getArticleById } from "../api";
import { useParams } from "react-router";

export const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const articleTitle = useParams();
  const article = articleTitle.article_id;
  event.preventDefault();

  useEffect(() => {
    setLoading(true);
    getArticleById(article_id)
      .then((articles) => {
        setArticles(articles);
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => setLoading(false));
  }, [article]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Sorry, something went wrong!</p>;

  return (
    <section>
      <h2>Products</h2>
      {articles.map((article) => {
        return (
          <div key={`article-${article.article_id}`}>
            <p>
              {article.article_id} &#8594; {article.title}
            </p>
          </div>
        );
      })}
    </section>
  );
};
