import axios from "axios";

export default {
  // Gets all news
  getNews: function () {
    console.log("API");
    return axios.get("/api/news");
  },
  // Gets the news with the given id
  getNewsById: function (id) {
    return axios.get("/api/news/" + id);
  },
  // Deletes the news with the given id
  deleteNews: function (id) {
    return axios.delete("/api/news/" + id);
  },
  // Saves a news to the database
  saveNews: function (data) {
    return axios.post("/api/news", data);
  }
};
