import axios from "axios";

// in production, there's no localhost so we have to make this dynamic

// :: this logic seems to be at this time really confusing ill get this later! ::
const BASE_URL =
  import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api";

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
