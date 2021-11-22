import httpClient from "../helpers/httpClient";

const END_POINT = '/api/users';

const users = {
  getUsers: () => httpClient.get(END_POINT),
  createUser: (user) => httpClient.post(END_POINT + '/create', user),
  editUser: (user, code) => httpClient.post(END_POINT + '/' + code, user),
  deleteUser: (code) => httpClient.get(END_POINT + '/' + code),
}
export {
  users
}