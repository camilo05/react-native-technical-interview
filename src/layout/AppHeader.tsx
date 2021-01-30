import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import {useDispatch} from 'react-redux';

import {
  BACKGROUND_STATUS_BAR,
  DEFAULT_COLOR_TITLE,
  PRIMARY_COLOR_INPUT,
  TEXT_COLOR_INPUT,
} from '../constants';
import {filterByName} from '../redux/books/booksActions';

const winHeight = Dimensions.get('window').height;

const AppHeader = (props: any) => {
  const dispatch = useDispatch();
  const [visibleFilter, setVisibleFilter] = useState(false);
  let title = props.scene.descriptor.options.title;
  const {detailBook, navigation} = props;

  const onChangeName = (name: string) => {
    dispatch(filterByName(name.length > 0 ? name : undefined));
  };

  return (
    <>
      <StatusBar
        backgroundColor={BACKGROUND_STATUS_BAR}
        barStyle="light-content"
      />
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/images/general/bc_nav_bar.png')}
          style={styles.imageBackground}
          imageStyle={styles.imageBackgroundStyle}>
          <View style={styles.containerOptions}>
            <View>
              {!detailBook && (
                <TouchableOpacity>
                  <Image
                    source={require('../assets/images/navigationBar/ic_notifications.png')}
                  />
                </TouchableOpacity>
              )}
              {detailBook && (
                <TouchableOpacity
                  onPress={() => navigation.navigate('Library')}>
                  <Image
                    source={require('../assets/images/navigationBar/ic_back.png')}
                  />
                </TouchableOpacity>
              )}
            </View>
            <View>
              <Text style={styles.title}>{title}</Text>
            </View>
            <View>
              {!detailBook && (
                <TouchableOpacity
                  onPress={() => setVisibleFilter(!visibleFilter)}>
                  <Image
                    source={require('../assets/images/navigationBar/ic_search.png')}
                  />
                </TouchableOpacity>
              )}
            </View>
          </View>
          {visibleFilter && (
            <View style={styles.containerOptions}>
              <TextInput
                onChangeText={(text) => onChangeName(text)}
                placeholder="Buscar..."
                style={styles.input}
              />
            </View>
          )}
        </ImageBackground>
      </View>
    </>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  container: {
    height: winHeight * 0.12,
    width: '100%',
  },
  containerOptions: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  imageBackground: {
    height: '100%',
    width: '100%',
  },
  imageBackgroundStyle: {
    resizeMode: 'stretch',
  },
  title: {
    fontSize: 20,
    color: DEFAULT_COLOR_TITLE,
    fontWeight: '600',
    fontFamily: 'Futura',
    textTransform: 'uppercase',
  },
  input: {
    height: 50,
    backgroundColor: PRIMARY_COLOR_INPUT,
    borderWidth: 0.5,
    borderColor: TEXT_COLOR_INPUT,
    borderRadius: 7,
    fontSize: 16,
    color: TEXT_COLOR_INPUT,
    paddingHorizontal: 10,
    fontFamily: 'Futura',
    width: '100%',
    marginTop: 5,
  },
});
