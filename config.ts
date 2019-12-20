export default {
  apiUrl: process.env.NODE_ENV === "development" ? "http://localhost:4000"
    : "https://mukemmelim-blog-sv.herokuapp.com/",
  analyticsSiteKey: "UA-134616947-1"
}