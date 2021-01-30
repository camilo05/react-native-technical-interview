import {API_URL} from '../../constants';

import {BooksResponse} from './types';

export const GetListBooks = async (): Promise<BooksResponse | null> => {
  try {
    const response = await fetch(`${API_URL}/books`);

    return await response.json();
  } catch (error) {
    return null;
  }
};
