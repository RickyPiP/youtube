import axios from "axios";

const KEY = "AIzaSyDL5Hq3DsWSD6Z7WEvQqxe3dJIP8AVXnRI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: { part: "snippet", maxResults: 5, key: KEY, type: "video" },
});
