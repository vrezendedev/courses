import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID LPnXge0UgKocLt-M6FhnvNUxZZXKB7ewARQF7zKHAlk",
  },
});
