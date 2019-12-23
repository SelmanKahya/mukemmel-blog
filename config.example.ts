export default {
    apiUrl: process.env.NODE_ENV === "development" ? "http://localhost:4000"
      : "https://productionUrl.com",
    analyticsSiteKey: "",
    firebaseCredentials: {
      apiKey: "",
      authDomain: "",
      databaseURL: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: ""
    }
  }