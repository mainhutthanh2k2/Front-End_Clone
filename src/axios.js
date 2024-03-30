import axios from "axios";
import { store } from "./store/store.js";

const localhost = "http://localhost:8081/";

const production = "https://back-end-g0na.onrender.com";

const instance = axios.create({
  baseURL: production,
  timeout: 5000,
});

store.subscribe(listener);

function select(state) {
  return state.user.accessToken;
}

function listener() {
  let token = select(store.getState());
  instance.defaults.headers.common["token"] = token;
}

export default instance;
