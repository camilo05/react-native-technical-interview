import React, {FC, ReactElement} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import AppHorizonatlBookItem from './AppHorizontalBookItem';

import {Book} from '../../config/api/types';

import {SECONDARY_COLOR} from '../../constants';

type ChildProps = {
  listBooks: Array<Book>;
  navigation: any;
};

const AppHorizontalListBooks: FC<ChildProps> = ({
  listBooks,
  navigation,
}): ReactElement => {
  return (
    <ScrollView horizontal style={styles.container}>
      {listBooks.map((book) => {
        return (
          <AppHorizonatlBookItem
            key={book.id}
            id={book.id}
            title={book.title}
            imageUrl={book.image_url}
            navigationDetail={() =>
              navigation.navigate('BookDetail', {bookId: book.id})
            }
          />
        );
      })}
    </ScrollView>
  );
};

export default AppHorizontalListBooks;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    backgroundColor: SECONDARY_COLOR,
    borderRadius: 5,
    padding: 15,
    marginVertical: 6,
  },
});
