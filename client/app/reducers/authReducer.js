import { fromJS } from "immutable";
import {
  CHANGE_FORM,
  SET_AUTH,
  SENDING_REQUEST,
  REQUEST_ERROR,
  CLEAR_ERROR
} from "app/actions/auth/types";
import auth from "service/index";

const initialState = fromJS({
  formState: {
    username: "",
    password: ""
  },
  error: "",
  currentlySending: false,
  loggedIn: auth.loggedIn()
});

function authReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FORM:
      return state.set("formState", action.newFormState);
    case SET_AUTH:
      return state.set("loggedIn", action.newAuthState);
    case SENDING_REQUEST:
      return state.set("currentlySending", action.sending);
    case REQUEST_ERROR:
      return state.set("error", action.error);
    case CLEAR_ERROR:
      return state.set("error", "");
    default:
      return state;
  }
}

export default authReducer;
