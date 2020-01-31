import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseUrl: "http://localhost:4000/api",
    headers: {
      "Content-Type": "application/json",
      Authorization: { token }
    }
  });
};

export default axiosWithAuth;
