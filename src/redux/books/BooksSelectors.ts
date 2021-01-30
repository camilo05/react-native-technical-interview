import {createSelector} from 'reselect';
import {Book} from '../../config/api/types';
import {RootState} from '../store';

export const booksSelector = (state: RootState) => state.books.books as Book[];

export const isLoadingSelector = (state: RootState) => state.books.isLoading;

export const nameFilterSelector = (state: RootState) => state.books.nameFilter;

export const filteredBooks = createSelector(
  [booksSelector, nameFilterSelector],
  (books, nameFilter) => {
    return books.filter((item: any) => {
      if (nameFilter) {
        return item.title.toLowerCase().includes(nameFilter.toLowerCase());
      }

      return true;
    });
  },
);
