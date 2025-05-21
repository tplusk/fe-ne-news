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
      return err;
    });
};
