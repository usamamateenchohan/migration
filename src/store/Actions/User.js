import { api } from '../../service/api';
import * as types from '../Constants';


export const signIn = (data) => {
  const options = { url: 'v1/cmv/user/identity/AuthenticateClient' }
  options.types = [
    types.LOGIN_SUCCESS,
    types.LOGIN_FAILURE
  ];

  return api.authLogin(options, data);
}

export const logOut = () => {
  const options = { url: 'v1/cmv/user/identity/Logout' }
  options.types = [
    types.LOGOUT_SUCCESS,
    types.LOGOUT_FAILURE
  ];

  return api.get(options);
}
