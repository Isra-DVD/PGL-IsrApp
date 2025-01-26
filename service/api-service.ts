import axios from "axios";

const register = async (fullname: string, email: string, pswd: string) => {
  try {
    const response = await axios.post(
      "http://192.168.1.100:5000/auth/register",
      {
        fullname,
        email,
        pswd,
      }
    );
    return response.data.message;
  } catch (error) {
    return "Pasaron cosas";
  }
};

const apiService = {
  register,
};

export default apiService;
