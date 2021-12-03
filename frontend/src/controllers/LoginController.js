import httpClient from "../helpers/httpClient";

const END_POINT = '/api/login';

const Login = {
  login: (userData) => httpClient.post(END_POINT , userData),
  }
export {
  Login
}