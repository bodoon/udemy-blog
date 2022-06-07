export const apiBaseUrl =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development"
    ? "http://localhost:8080"
    : "https://udemy-blog-rest-api.herokuapp.com";

    console.log(process);
console.log(process.env.NODE_ENV);
