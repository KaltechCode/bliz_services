export const baseUrl = () => {
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3000";
  } else if (process.env.NODE_ENV === "production") {
    return "https://bliss-services.vercel.app/";
  } else {
    return "/";
  }
};
