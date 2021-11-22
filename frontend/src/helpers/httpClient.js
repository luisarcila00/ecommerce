import axios from "axios";

const httpClient = axios.create({
  baseURL: "http://localhost:4000",
  //timeout:3000,
  headers: {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODk0ZmEzOTI3YTNiZWZmMDAwMTMzNiIsInVzZXJuYW1lIjoiYW5kcmVzYXJjaWxhMTAiLCJmdWxsX25hbWUiOiJKT1NFIEFORFJFUyBBUkNJTEEgVFJVSklMTE8iLCJiYWxhbmNlIjowLCJiYWxhbmNlX2NvbW1pc3Npb24iOjAsInBhc3N3b3JkX2NoYW5nZWQiOmZhbHNlLCJyb2wiOiJyZXNlbGxlciIsImlhdCI6MTYzNzUyMzEzMiwiZXhwIjoxNjM3NjA5NTMyfQ.2u1RPqbH_Dy1mw8m9Q_IxVrofysQZZXxBHYtPwiM6xs",
    "Content-Type": "application/json"
  }
});

export default httpClient;