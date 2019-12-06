export const apiUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://mukemmellim-blog.herokuapp.com";

export const analyticsSiteKey = "UA-134616947-1"