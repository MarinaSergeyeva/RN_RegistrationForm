import infoConstants from '../constants/infoConstants';

const initialState = {
  country: '',
  city: '',
  age: '',
};

const infoReducer = (state = { ...initialState }, { type, payload }) => {
  switch (type) {
    case infoConstants.INFO_SUCCESS:
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default infoReducer;
