import authConstants from '../constants/authConstants';

const authRequest = () => ({
  type: authConstants.AUTH_REQUEST,
});

const authSuccess = credential => {
  return {
    type: authConstants.AUTH_SUCCESS,
    payload: credential,
  };
};

const authError = error => ({
  type: authConstants.AUTH_ERROR,
  payload: error,
});

export default {
  authRequest,
  authSuccess,
  authError,
};
