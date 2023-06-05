import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "dfb1b4089c7a46371dbd5026d48aae95",
    language: "ko-KR",
  },
});

export default instance;
