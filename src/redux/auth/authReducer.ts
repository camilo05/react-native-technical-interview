import {AuthActions, AuthState, AuthTypes} from './authTypes';

const initialState: AuthState = {
  isAuthenticated: false,
  isLoading: false,
  user: {name: '', last_name: '', mail: ''},
};

function authReducer(
  state: AuthState = initialState,
  action: AuthActions,
): AuthState {
  switch (action.type) {
    case AuthTypes.AUTH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case AuthTypes.AUTH_REQUEST_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        isLoading: false,
      };

    case AuthTypes.AUTH_REQUEST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    // case AuthTypes.LOGOUT:
    //   return {
    //     ...state,
    //     isAuthenticated: false,
    //   };

    default:
      return state;
  }
}

export default authReducer;
