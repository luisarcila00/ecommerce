import axios from "axios";

const httpClient = axios.create({
  baseURL: "http://localhost:4000",
  //timeout:3000,
  headers: {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODk0ZjZjOTI3YTNiZWZmMDAwMTMzMiIsInVzZXJuYW1lIjoibHVpc2FyY2lsYTAwIiwiZnVsbF9uYW1lIjoiTFVJUyBFRFVBUkRPIEFSQ0lMQSBUUlVKSUxMTyIsImJhbGFuY2UiOjAsImJhbGFuY2VfY29tbWlzc2lvbiI6MCwicGFzc3dvcmRfY2hhbmdlZCI6ZmFsc2UsInJvbCI6ImFkbWluIiwiaWF0IjoxNjM4MDQzMjEyLCJleHAiOjE2MzgxMjk2MTJ9.uHZDuoMgbtJ-Ojnp2zfhnXuE1KYVYvwS5KUGgDtOoEo",
    "Content-Type": "application/json"
  }
});

export default httpClient;