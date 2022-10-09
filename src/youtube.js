import axios from "axios";

const URL = process.env.REACT_APP_URL;
const API = process.env.REACT_APP_API_KEY;

export const youtube_seach = axios.create({
    baseURL: URL,
    params:{
        part: "snippet",
        maxResults: 50,
        key: API
    },
    headers: {}
})

export const youtube_channel = axios.create({
    baseURL: URL,
    params:{
        part: "snippet",
        id: "UC8butISFwT-Wl7EV0hUK0BQ",
        maxResults: 50,
        key: API
    },
    headers: {}
})