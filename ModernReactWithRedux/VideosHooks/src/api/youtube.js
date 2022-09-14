import axios from "axios";

const key = "AIzaSyDA90tiFDvlXQTDVN9HJrI-OIuK3Bo6pw0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: key,
  },
});
