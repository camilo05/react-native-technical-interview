import {Book} from '../../config/api/types';

export interface BookState {
  isLoading: boolean;
  booksResult: Book[];
  books: Book[];
  error?: string;
  nameFilter?: string;
}

export enum BookTypes {
  BOOK_LIST_REQUEST = 'BOOK_LIST_REQUEST',
  BOOK_LIST_REQUEST_SUCCESS = 'BOOK_LIST_REQUEST_SUCCESS',
  BOOK_LIST_REQUEST_FAILURE = 'BOOK_LIST_REQUEST_FAILURE',
  BOOK_BY_NAME = 'BOOK_BY_NAME',
}

export type BookActions =
  | {type: BookTypes.BOOK_LIST_REQUEST}
  | {type: BookTypes.BOOK_LIST_REQUEST_SUCCESS; payload: Book[]}
  | {type: BookTypes.BOOK_LIST_REQUEST_FAILURE; payload: string}
  | {type: BookTypes.BOOK_BY_NAME; payload?: string};
