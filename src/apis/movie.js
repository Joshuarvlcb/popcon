import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/",
});

export const genreApi = axios.create({
  params: {
    api_key: "2212668cd8ad1eca01050d6cc3907a99",
    language: "en-US",
  },
});
