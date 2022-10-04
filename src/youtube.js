import axios from "axios";

const URL = process.env.REACT_APP_URL;
const API = process.env.REACT_APP_API_KEY;

export default axios.create({
    baseURL: URL,
    params:{
        part: "snippet",
        maxResults: 10,
        key: API
    },
    headers: {}
})