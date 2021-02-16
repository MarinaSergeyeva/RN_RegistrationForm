import infoConstants from '../constants/infoConstants'

const infoRequest = () => ({
  type: infoConstants.INFO_REQUEST,
});

const infoSuccess = credential => {
  console.log('credential', credential);
  return {
    type: infoConstants.INFO_SUCCESS,
    payload: credential,
  };
};

const infoError = error => ({
  type: infoConstants.INFO_ERROR,
  payload: error,
});

export default {
  infoRequest,
  infoSuccess,
  infoError,
};
