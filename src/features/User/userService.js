import axios from "axios";

const API_URL = "/user/register"; // Adjusted to use relative path

// Register user
const RegisterUser = async (userData) => {
  const response = await axios.post(API_URL, userData, {
    headers: {
      // Do not set 'Content-Type' for FormData, let browser handle it
    },
  });

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

export const userService = {
  RegisterUser,
};
