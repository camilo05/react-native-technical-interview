import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {SignIn} from '../../config/api/Auth';
import {User} from '../../config/api/types';
import {RootState} from '../store';
import {AuthActions, AuthTypes} from './authTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function AuthRequest(): AuthActions {
  return {
    type: AuthTypes.AUTH_REQUEST,
  };
}

export function AuthRequestSuccess(user: User): AuthActions {
  return {
    type: AuthTypes.AUTH_REQUEST_SUCCESS,
    payload: user,
  };
}

export function AuthRequestFailure(error: string): AuthActions {
  return {
    type: AuthTypes.AUTH_REQUEST_FAILURE,
    payload: error,
  };
}

export function AuthThunk(
  user: User,
): ThunkAction<Promise<void>, RootState, unknown, AuthActions> {
  return async function (dispatch: ThunkDispatch<{}, {}, AuthActions>) {
    dispatch(AuthRequest());

    const userResponse = await SignIn(user);
    if (!userResponse) {
      dispatch(AuthRequestFailure('Error at fetching'));
      return;
    }

    await AsyncStorage.setItem('isAutenticate', JSON.stringify(true));
    dispatch(AuthRequestSuccess(userResponse));
  };
}
