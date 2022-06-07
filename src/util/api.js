export const apiBaseUrl =
  window.location.href === "http://localhost:3000/"
    ? "http://localhost:8080"
    : "https://udemy-blog-rest-api.herokuapp.com";
