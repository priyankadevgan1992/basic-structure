import { SET_TOAST_DATA, SET_SHOW_LOADER, SET_AUTH_DATA } from '../actions/actionTypes';

const initialState = {
  isAuthenticated: false,
  authData: {},
  toastData: {},
  showLoader: false
};

// eslint-disable-next-line default-param-last
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TOAST_DATA:
      return {
        ...state,
        toastData: action.payload || {}
      };
    case SET_SHOW_LOADER:
      return {
        ...state,
        showLoader: action.payload || {}
      };
    case SET_AUTH_DATA:
      return {
        ...state,
        authData: action?.payload,
        isAuthenticated: action?.payload?.isAuthenticated
      };
    default:
      return state;
  }
};
