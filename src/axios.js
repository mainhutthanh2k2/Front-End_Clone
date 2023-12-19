import axios from "axios";
import { store } from "./store/store.js";

const instance = axios.create({
    baseURL: "http://localhost:8081/",
    timeout: 5000,
});

store.subscribe(listener);

function select(state) {
    return state.user.accessToken;
}

function listener() {
    let token = select(store.getState());
    instance.defaults.headers.common['token'] = token;
}

export default instance;
