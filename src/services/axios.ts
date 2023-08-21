import axios, { AxiosInstance } from "axios";

const API_URL = "https://api.thecatapi.com/";

const getAriveAxiosInstance = (baseURL: string): AxiosInstance => {
  const axiosInstance: AxiosInstance = axios.create({
    baseURL,
    headers: {
      Accept: "application/json",
      "x-api-key": "db933426-eb41-4dbc-9cda-60bc56b6d916",
    },
  });

  return axiosInstance;
};

export const ariveAxiosInstance: AxiosInstance = getAriveAxiosInstance(
  API_URL as string
);
