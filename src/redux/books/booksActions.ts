import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {GetListBooks} from '../../config/api/Books';
import {Book} from '../../config/api/types';
import {BookActions, BookTypes} from './booksTypes';
import {RootState} from '../store';

export function bookListRequest(): BookActions {
  return {
    type: BookTypes.BOOK_LIST_REQUEST,
  };
}

export function bookListRequestSuccess(books: Book[]): BookActions {
  return {
    type: BookTypes.BOOK_LIST_REQUEST_SUCCESS,
    payload: books,
  };
}

export function bookListRequestFailure(error: string): BookActions {
  return {
    type: BookTypes.BOOK_LIST_REQUEST_FAILURE,
    payload: error,
  };
}

export function filterByName(name?: string): BookActions {
  return {
    type: BookTypes.BOOK_BY_NAME,
    payload: name,
  };
}

export function booksListThunk(): ThunkAction<
  Promise<void>,
  RootState,
  unknown,
  BookActions
> {
  return async function (dispatch: ThunkDispatch<{}, {}, BookActions>) {
    dispatch(bookListRequest());

    const books = await GetListBooks();
    if (!books) {
      dispatch(bookListRequestFailure('Error at fetching'));
      return;
    }

    dispatch(bookListRequestSuccess(books));
  };
}
