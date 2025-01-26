import { router } from "expo-router";
import { useEffect } from "react";
import asyncStorageService from "../service/async-storage";

const StartPage = () => {
  useEffect(() => {
    const hasToken = async () => {
      const token = await asyncStorageService.getData("token");
      if (token !== null) {
        router.navigate("/home");
      } else {
        router.navigate("/user-management/login-page");
      }
    };

    hasToken();
  }, []);
};

export default StartPage;
