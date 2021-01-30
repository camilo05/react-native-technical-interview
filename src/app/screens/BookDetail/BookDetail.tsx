import React, {useEffect, useState} from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {Book} from '../../../config/api/types';
import {RootState} from '../../../redux/store';
import AppDetailBook from '../../components/AppDetailBook';
import AppHorizontalListBooks from '../../components/AppHorizontalListBooks';

const BookDetail = ({route, navigation}: any) => {
  const {bookId} = route.params;
  const [bookInfo, setBookInfo] = useState<Book>();
  const [booksSimilars, setBooksSimilars] = useState<Book[]>([]);

  const books = useSelector<RootState, Book[]>(
    (state: RootState) => state.books.books,
  );

  useEffect(() => {
    const book = books.find((item) => item.id === bookId);
    if (book) {
      const booksSimilarsFilter = books.filter(
        (item) => item.genre === book.genre && item.id !== bookId,
      );
      setBookInfo(book);
      setBooksSimilars(booksSimilarsFilter);
      console.log(booksSimilarsFilter);
    }
  }, [bookId, books]);

  return (
    <ScrollView>
      <View style={styles.containerScroll}>
        {bookInfo && (
          <View style={styles.containerDetail}>
            <AppDetailBook bookInfo={bookInfo} />
          </View>
        )}
        {booksSimilars.length > 0 && (
          <View style={styles.containerSimilars}>
            <AppHorizontalListBooks
              navigation={navigation}
              listBooks={booksSimilars}
            />
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default BookDetail;

const styles = StyleSheet.create({
  containerScroll: {
    flex: 1,
    marginVertical: 10,
  },
  containerDetail: {
    flex: 2,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  containerSimilars: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
});
