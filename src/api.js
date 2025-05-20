import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://my-seeding-nc-news.onrender.com/api",
});
