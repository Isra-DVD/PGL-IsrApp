import axios from "axios";
import asyncStorageService from "./async-storage";

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

const login = async (email: string, pswd: string) => {
  try {
    const response = await axios.post("http://192.168.1.100:5000/auth/login", {
      email,
      pswd,
    });
    await asyncStorageService.storeData("token", response.data.object.token);
    return response.data.message;
  } catch (error) {
    return "Pasaron cosas";
  }
};

const apiService = {
  register,
  login,
};

export default apiService;
