export const baseUrl = () => {
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3000";
  } else if (process.env.NODE_ENV === "production") {
<<<<<<< HEAD
    return "https://blizservices.com";
=======
    return "https://https://blizservices.com/";
>>>>>>> 46b3e6c45dcdbb37d696201ca908a3c237507b54
  } else {
    return "/";
  }
};
