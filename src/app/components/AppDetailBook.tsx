import React, {FC, ReactElement} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import AppButton from './AppButton';

import {SECONDARY_COLOR} from '../../constants';

type BookInfo = {
  id: number;
  author: string;
  title: string;
  genre: string;
  publisher: string;
  year: string;
  image_url: string | null;
};

type ChildProps = {
  bookInfo: BookInfo;
};

const AppDetailBook: FC<ChildProps> = ({bookInfo}): ReactElement => {
  return (
    <View style={styles.container}>
      <View style={styles.containerBook}>
        <View style={styles.containerImage}>
          <Image
            source={
              bookInfo.image_url
                ? {
                    uri: bookInfo.image_url,
                  }
                : require(`../../assets/images/general/img_book${1}.png`)
            }
            style={styles.imageBook}
          />
        </View>
        <View style={styles.containerInfo}>
          <Text style={styles.title}>{bookInfo.title}</Text>
          <Text>{bookInfo.author}</Text>
          <Text>{bookInfo.year}</Text>
          <Text>{bookInfo.genre}</Text>
        </View>
      </View>
      <View style={styles.containerButtons}>
        <AppButton label="Add to wishlist" onClick={() => {}} />
        <AppButton secondary label="RENT" onClick={() => {}} />
      </View>
    </View>
  );
};

export default AppDetailBook;

const styles = StyleSheet.create({
  container: {
    backgroundColor: SECONDARY_COLOR,
    padding: 15,
    borderRadius: 5,
    shadowOffset: {
      width: 20,
      height: 26,
    },
    shadowOpacity: 1,
    shadowRadius: 16,
    elevation: 15,
  },
  containerBook: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  containerImage: {
    flex: 1,
    marginRight: 10,
  },
  containerInfo: {
    flex: 2,
  },
  containerButtons: {
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Futura',
    color: 'teal',
    marginBottom: 8,
  },
  imageBook: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
  },
});
