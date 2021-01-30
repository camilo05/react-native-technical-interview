import {BookActions, BookState, BookTypes} from './booksTypes';

const initialState: BookState = {
  isLoading: false,
  books: [],
  booksResult: [],
};

function booksReducer(
  state: BookState = initialState,
  action: BookActions,
): BookState {
  switch (action.type) {
    case BookTypes.BOOK_LIST_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case BookTypes.BOOK_LIST_REQUEST_SUCCESS:
      return {
        ...state,
        books: action.payload,
        booksResult: action.payload,
        isLoading: false,
      };

    case BookTypes.BOOK_LIST_REQUEST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case BookTypes.BOOK_BY_NAME:
      return {
        ...state,
        nameFilter: action.payload,
      };

    default:
      return state;
  }
}

export default booksReducer;
