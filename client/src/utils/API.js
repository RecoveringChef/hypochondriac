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
  },

  getConditions: function () {
    console.log("API");
    return axios.get("/api/conditions");
  },

  getConditionsById: function (id) {
    return axios.get("/api/conditions/" + id);
  },

  deleteConditions: function (id) {
    return axios.delete("/api/conditions/" + id);
  },

  saveConditions: function (data) {
    return axios.post("/api/conditions", data);
  },

  getSymptoms: function () {
    console.log("API");
    return axios.get("/api/symptoms");
  },

  getSymptomsById: function (id) {
    return axios.get("/api/symptoms/" + id);
  },

  deleteSymptoms: function (id) {
    return axios.delete("/api/symptoms/" + id);
  },

  saveSymptoms: function (data) {
    return axios.post("/api/symptoms", data);
  }






};
