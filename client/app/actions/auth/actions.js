import {
  CHANGE_FORM,
  SET_AUTH,
  SENDING_REQUEST,
  LOGIN_REQUEST,
  REGISTER_REQUEST,
  LOGOUT,
  REQUEST_ERROR,
  CLEAR_ERROR
} from "./types";

export function changeForm(newFormState) {
  return { type: CHANGE_FORM, newFormState };
}

export function setAuthState(newAuthState) {
  return { type: SET_AUTH, newAuthState };
}

export function sendingRequest(sending) {
  return { type: SENDING_REQUEST, sending };
}

export function loginRequest(data) {
  return { type: LOGIN_REQUEST, data };
}

export function logout() {
  return { type: LOGOUT };
}

export function registerRequest(data) {
  return { type: REGISTER_REQUEST, data };
}

export function requestError(error) {
  return { type: REQUEST_ERROR, error };
}

export function clearError() {
  return { type: CLEAR_ERROR };
}
