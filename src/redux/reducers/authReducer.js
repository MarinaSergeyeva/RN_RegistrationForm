import authConstants from '../constants/authConstants';

const initialState = {
  username: '',
  email: '',
};

const authReducer = (state = { ...initialState }, { type, payload }) => {
  switch (type) {
    case authConstants.AUTH_SUCCESS:
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default authReducer;
