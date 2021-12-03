import {types} from '../types/types';

const authReducer = (state = {}, action) => {
  debugger
  switch (action.type) {
    case types.login:
      localStorage.setItem('UID', action.data.usr_token)
      return {
        UID: action.data.usr_token,
        roles: action.data.rol,
        logged: true
      }

    case types.logout:
      localStorage.removeItem("UID");
      return {
        logged: false
      }
    default:
      localStorage.removeItem("UID");
      return {logged: true};
  }
}

export default authReducer