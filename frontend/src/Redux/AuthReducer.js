import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from "./Action.type";

const Inistate = {
  isAuth: false,
  isLoading: false,
  error: false,
  token: localStorage.getItem("token") || "",
  username: localStorage.getItem("username") || "",
};

export const AuthReducer = (state = Inistate, { type, payload }) => {
  console.log("Payload=>", payload);
  switch (type) {
    case LOGIN_LOADING: {
      return { ...state, isLoading: true, error: false };
    }

    case LOGIN_SUCCESS: {
      localStorage.setItem("token", payload?.token);
      localStorage.setItem("username", payload?.username);

      return {
        ...state,
        isLoading: false,
        error: false,
        token: payload?.token,
        username: payload?.username,
        isAuth: true,
      };
    }

    case LOGIN_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: true,
        token: "",
        isAuth: false,
      };
    }

    case LOGOUT_SUCCESS: {
      localStorage.removeItem("token");
      localStorage.removeItem("username");

      return {
        ...state,
        isLoading: false,
        error: false,
        token: "",
        username: "",
        isAuth: false,
      };
    }
    default: {
      return state;
    }
  }
};
