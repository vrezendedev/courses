import axios from "axios";

const key = "AIzaSyBGQDiWHB9Cm860oWJISGJoGW7aP6xy3HQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: key,
  },
});
