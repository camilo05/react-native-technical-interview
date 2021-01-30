import {API_URL} from './../../constants';
import {AuthResponse, User} from './types';

const headers = new Headers({
  'Content-Type': 'application/json',
});

export const SignIn = async (user: User): Promise<AuthResponse> => {
  try {
    const response = await fetch(`${API_URL}/sign_in`, {
      method: 'POST',
      headers,
      body: JSON.stringify(user),
    });

    return await response.json();
  } catch (error) {
    return error;
  }
};
