import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  TextInput,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AuthThunk} from '../../../redux/auth/authActions';
import {RootState} from '../../../redux/store';

import AppButton from '../../components/AppButton';

import withSpinner from '../../components/AppWithSpinner';
const ViewWithSpinner = withSpinner(View);

import {
  PRIMARY_COLOR_INPUT,
  SECONDARY_COLOR,
  LABEL_COLOR_INPUT,
  TEXT_COLOR_INPUT,
} from '../../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}: any) => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [disabledButton, setDisabledButton] = useState(true);

  const isLoading = useSelector<RootState, Boolean>(
    (state: RootState) => state.auth.isLoading,
  );

  useEffect(() => {
    const validSession = async () => {
      const authenticatedUser = await AsyncStorage.getItem('isAutenticate');
      if (authenticatedUser !== null) {
        navigation.navigate('App');
      }
    };

    validSession();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // eslint-disable-next-line no-useless-escape
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (name && lastName && email && reg.test(email)) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  }, [name, lastName, email]);

  const handleSubmit = async () => {
    let user = {name, last_name: lastName, mail: email};

    dispatch(AuthThunk(user));
    setDisabledButton(true);
    navigation.navigate('App');
  };

  return (
    <ViewWithSpinner isLoading={isLoading} style={styles.container}>
      <ImageBackground
        source={require('../../../assets/images/general/bc_inicio.png')}
        style={styles.imageBackground}>
        <ScrollView contentContainerStyle={styles.containerScroll}>
          <View style={styles.containerLogo}>
            <Image
              source={require('../../../assets/images/general/wbooks_logo.png')}
              style={styles.imageLogo}
            />
          </View>
          <View style={styles.containerInputs}>
            <View style={styles.containerInput}>
              <Text style={styles.label}>Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your name..."
                keyboardType="default"
                onChangeText={(text) => setName(text)}
              />
            </View>
            <View style={styles.containerInput}>
              <Text style={styles.label}>Last name</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your last name..."
                keyboardType="default"
                onChangeText={(text) => setLastName(text)}
              />
            </View>
            <View style={styles.containerInput}>
              <Text style={styles.label}>E-mail</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your E-mail..."
                keyboardType="email-address"
                onChangeText={(text) => setEmail(text)}
              />
            </View>
          </View>
          <View style={styles.containerActions}>
            <AppButton
              label="Login"
              disabled={disabledButton}
              onClick={handleSubmit}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    </ViewWithSpinner>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  containerScroll: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  containerInputs: {
    flex: 1,
    justifyContent: 'center',
  },
  containerActions: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  imageBackground: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  imageLogo: {
    resizeMode: 'contain',
  },
  containerInput: {
    marginVertical: 3,
  },
  input: {
    height: 50,
    backgroundColor: PRIMARY_COLOR_INPUT,
    borderWidth: 0.5,
    borderColor: SECONDARY_COLOR,
    borderRadius: 7,
    fontSize: 16,
    color: TEXT_COLOR_INPUT,
    paddingHorizontal: 10,
    fontFamily: 'Futura',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
    marginBottom: 2,
    color: LABEL_COLOR_INPUT,
    fontFamily: 'Futura',
  },
});
