import axios from "axios";

const API_URL = "api/user"; // Adjusted to use relative path

// Register user
const RegisterUser = async (userData) => {
  // Create FormData for file upload
  const formData = new FormData();
  formData.append("username", userData.username);
  formData.append("email", userData.email);
  formData.append("password", userData.password);

  // Only append profile picture if it exists
  if (userData.profilePicture) {
    formData.append("profilePicture", userData.profilePicture);
  }

  const response = await axios.post(`${API_URL}/register`, formData, {
    headers: {
      // Don't set Content-Type, let browser set it with proper boundary for FormData
    },
  });

  return response.data;
};

// Login User
const loginUser = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Logout User
const logoutUser = () => {
  const response = axios.get(`${API_URL}/logout`);

  if (response.data) {
    localStorage.removeItem("user");
  }
};

export const userService = {
  RegisterUser,
  loginUser,
  logoutUser,
};
