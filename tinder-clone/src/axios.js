import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-app-cloned.herokuapp.com/",
});

export default instance;
