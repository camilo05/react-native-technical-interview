import React, {FC, ReactElement} from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';

type ChildProps = {
  id: number;
  title: string;
  imageUrl: string | null;
  navigationDetail: any;
};

const AppHorizonatlBookItem: FC<ChildProps> = ({
  id,
  title,
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
      <View>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default AppHorizonatlBookItem;

const styles = StyleSheet.create({
  container: {
    width: 120,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  containerImageBook: {
    marginBottom: 5,
  },
  imageBook: {
    width: '100%',
    height: 140,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 2,
    fontFamily: 'Futura',
  },
});
