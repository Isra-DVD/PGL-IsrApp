import axios from "axios";
import { ApiResponse } from "../types/types";
import { ImageResponseDto } from "../types/types";
import { ImageRequestDto } from "../types/types";
import asyncStorageService from "./async-storage";

const API_BASE_URL =
  process.env.EXPO_PUBLIC_API_URL || "http://192.168.1.101:5000";

async function axiosRequestWithTimeout(config: any, timeout = 30000) {
  const source = axios.CancelToken.source();
  const timer = setTimeout(() => {
    source.cancel("Request timed out.");
  }, timeout);

  try {
    const response = await axios({
      ...config,
      cancelToken: source.token,
    });
    clearTimeout(timer);
    return response;
  } catch (error) {
    clearTimeout(timer);
    throw error;
  }
}

const ImageService = {
  saveNewImage: async (
    imageRequestDto: ImageRequestDto
  ): Promise<ApiResponse<ImageResponseDto>> => {
    const token = await asyncStorageService.getData("token");
    if (!token) {
      throw new Error("User not authenticated");
    }
    try {
      const response = await axiosRequestWithTimeout({
        method: "POST",
        url: `${API_BASE_URL}/images/save`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: imageRequestDto,
      });

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.code === "ECONNABORTED") {
          throw new Error("Request timed out");
        }
        console.error(
          "Error saving image:",
          error.response?.data || error.message
        );
        throw new Error(
          error.response?.data?.message || "Failed to save image"
        );
      } else {
        console.error("Error saving image (non-Axios):", error);
        throw new Error("Failed to save image");
      }
    }
  },

  getAllUserImages: async (): Promise<ApiResponse<ImageResponseDto[]>> => {
    const token = await asyncStorageService.getData("token");
    if (!token) {
      throw new Error("User not authenticated");
    }

    try {
      const response = await axiosRequestWithTimeout({
        method: "GET",
        url: `${API_BASE_URL}/images/get-all`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.code === "ECONNABORTED") {
          throw new Error("Request timed out");
        }
        console.error(
          "Error fetching images:",
          error.response?.data || error.message
        );
        if (error.response?.status === 401) {
          await asyncStorageService.removeData("token");
          throw new Error("Session expired. Please log in again.");
        }
        throw new Error(
          error.response?.data?.message || "Failed to fetch images"
        );
      } else {
        console.error("Error fetching images (non-Axios):", error);
        throw new Error("Failed to fetch images");
      }
    }
  },

  deleteImage: async (imageId: number): Promise<ApiResponse<null>> => {
    const token = await asyncStorageService.getData("token");
    if (!token) {
      throw new Error("User not authenticated");
    }

    try {
      const response = await axiosRequestWithTimeout({
        method: "DELETE",
        url: `${API_BASE_URL}/images/${imageId}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.code === "ECONNABORTED") {
          throw new Error("Request timed out");
        }
        console.error(
          "Error deleting image:",
          error.response?.data || error.message
        );
        throw new Error(
          error.response?.data?.message || "Failed to delete image"
        );
      } else {
        console.error("Error deleting image (non-axios):", error);
        throw new Error("Failed to delete image");
      }
    }
  },
};

export default ImageService;
