import { SET_TOAST_DATA, SET_SHOW_LOADER, SET_AUTH_DATA } from './actionTypes';

export const setToastData = (payload) => ({
  type: SET_TOAST_DATA,
  payload
});

export const setShowLoader = (payload) => ({
  type: SET_SHOW_LOADER,
  payload
});

export const setAuthData = (payload) => ({
  type: SET_AUTH_DATA,
  payload
});

export const updateToastData = (dispatch, payload) => {
  dispatch(setToastData(payload));
};

export const updateShowLoader = (dispatch, payload) => {
  dispatch(setShowLoader(payload || false));
};

export const updateAuthData = (dispatch, payload) => {
  dispatch(setAuthData(payload));
};
