// axios 쓸 곳
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3001",
});
