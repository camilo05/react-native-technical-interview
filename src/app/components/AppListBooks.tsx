import React, {FC, ReactElement} from 'react';
import {View, StyleSheet} from 'react-native';

import AppBookItem from './AppBookItem';

import {Book} from '../../config/api/types';

type ChildProps = {
  listBooks: Array<Book>;
  navigation: any;
};

const AppListBooks: FC<ChildProps> = ({
  listBooks,
  navigation,
}): ReactElement => {
  return (
    <View style={styles.container}>
      {listBooks.map((book) => {
        return (
          <AppBookItem
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            image={`../../assets/images/general/img_book${2}.png`}
            imageUrl={book.image_url}
            navigationDetail={() =>
              navigation.navigate('BookDetail', {bookId: book.id})
            }
          />
        );
      })}
    </View>
  );
};

export default AppListBooks;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});
