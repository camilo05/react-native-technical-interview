import React, {useEffect} from 'react';
import {ScrollView, StyleSheet} from 'react-native';

import AppListBooks from '../../components/AppListBooks';

import {booksListThunk} from '../../../redux/books/booksActions';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';

import withSpinner from '../../components/AppWithSpinner';
const ScrollViewWithSpinner = withSpinner(ScrollView);

import {Book} from '../../../config/api/types';
import {filteredBooks} from '../../../redux/books/BooksSelectors';

const Home = ({navigation}: any) => {
  const dispatch = useDispatch();

  const books = useSelector<RootState, Book[]>(filteredBooks);

  const isLoading = useSelector<RootState, Boolean>(
    (state: RootState) => state.books.isLoading,
  );

  useEffect(() => {
    dispatch(booksListThunk());
  }, [dispatch]);

  return (
    <ScrollViewWithSpinner isLoading={isLoading} style={styles.container}>
      <AppListBooks navigation={navigation} listBooks={books} />
    </ScrollViewWithSpinner>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
});
