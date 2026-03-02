import axios from "axios";
import { keysToCamelCase } from "neetocist";

const transformResponseKeysToCamelCase = response => {
  if (response) response = keysToCamelCase(response);

  return response;
};

const setHttpHeaders = () => {
  axios.defaults.headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
};

const responseInterceptor = () => {
  axios.interceptors.response.use(response =>
    transformResponseKeysToCamelCase(response.data)
  );
};

export default function initializeAxios() {
  axios.defaults.baseURL =
    "https://smile-cart-backend-staging.neetodeployapp.com/";
  setHttpHeaders();
  responseInterceptor();
}
