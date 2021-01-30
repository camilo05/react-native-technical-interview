import React, {FC, ReactElement} from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {SECONDARY_COLOR} from '../../constants';

type ChildProps = {
  id: number;
  title: string;
  author: string;
  image: string;
  imageUrl: string | null;
  navigationDetail: any;
};

const AppBookItem: FC<ChildProps> = ({
  id,
  title,
  author,
  image,
  imageUrl,
  navigationDetail,
}): ReactElement => {
  return (
    <TouchableOpacity
      key={id}
      style={styles.container}
      onPress={navigationDetail}>
      <View style={styles.containerImageBook}>
        <Image
          source={
            imageUrl
              ? {
                  uri: imageUrl,
                }
              : require(`../../assets/images/general/img_book${1}.png`)
          }
          style={styles.imageBook}
        />
      </View>
      <View style={styles.containerInfoBook}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>{author}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AppBookItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: SECONDARY_COLOR,
    borderRadius: 5,
    padding: 15,
    marginVertical: 6,
  },
  containerImageBook: {
    flex: 1,
    marginRight: 10,
  },
  containerInfoBook: {
    flex: 3,
    marginLeft: 10,
  },
  imageBook: {
    width: '100%',
    height: 115,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 2,
    fontFamily: 'Futura',
  },
  author: {
    fontSize: 14,
    fontFamily: 'Futura',
  },
});
