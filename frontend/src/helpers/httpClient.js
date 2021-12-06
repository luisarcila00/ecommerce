import axios from "axios";

const httpClient = axios.create({
  baseURL: "/",
  //timeout:3000,
  headers: {
    'token': '',
    "Content-Type": "application/json"
  }
});

function getToken() {
  return localStorage.getItem('UID') || ''
}

httpClient.interceptors.request.use(
  config => {
    config.headers["token"] = getToken();
    return config;
  }, error => {
    Promise.reject(error);
  });
export default httpClient;