import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://my-seeding-nc-news.onrender.com/api",
});

export const getArticles = () => {
  return ncNewsApi
    .get("/articles")
    .then(({ data }) => {
      return data.articles;
    })
    .catch((err) => {
      throw err;
    });
};

export const getTopics = () => {
  return ncNewsApi
    .get("/topics")
    .then(({ data }) => {
      return data.topics;
    })
    .catch((err) => {
      throw err;
    });
};

export const getArticleById = (article_id) => {
  return ncNewsApi
    .get("/articles/:article_id")
    .then(({ data }) => {
      return data.article.body;
    })
    .catch((err) => {
      throw err;
    });
};
