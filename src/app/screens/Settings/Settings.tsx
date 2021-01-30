import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppButton from '../../components/AppButton';

const Settings = ({navigation}: any) => {
  const logout = async () => {
    await AsyncStorage.removeItem('isAutenticate');
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image
          style={styles.image}
          source={require('../../../assets/images/general/img_user1.png')}
        />
      </View>
      <View style={styles.containerButtons}>
        <AppButton label="logout" onClick={logout} />
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  containerButtons: {
    flex: 1,
  },
  containerImage: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 10,
  },
  soonText: {
    textAlign: 'center',
    fontSize: 26,
    fontFamily: 'Futura',
  },
});
