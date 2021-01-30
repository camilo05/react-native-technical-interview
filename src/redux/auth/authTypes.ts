import {User} from '../../config/api/types';

export interface AuthState {
  isLoading: boolean;
  isAuthenticated: boolean;
  user: User;
  error?: string;
}

export enum AuthTypes {
  AUTH_REQUEST = 'AUTH_REQUEST',
  AUTH_REQUEST_SUCCESS = 'AUTH_REQUEST_SUCCESS',
  AUTH_REQUEST_FAILURE = 'AUTH_REQUEST_FAILURE',
}

export type AuthActions =
  | {type: AuthTypes.AUTH_REQUEST}
  | {type: AuthTypes.AUTH_REQUEST_SUCCESS; payload: User}
  | {type: AuthTypes.AUTH_REQUEST_FAILURE; payload: string};
