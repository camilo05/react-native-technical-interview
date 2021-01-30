import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AppHeader from '../layout/AppHeader';

import Login from '../app/screens/Login/Login';
import Library from '../app/screens/Library/Library';
import BookDetail from '../app/screens/BookDetail/BookDetail';
import Soon from '../app/screens/Soon/Soon';
import Settings from '../app/screens/Settings/Settings';

type RootStackParamList = {
  Login: undefined;
  App: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();
const LibraryStack = createStackNavigator();
const SoonStack = createStackNavigator();
const SettingsStack = createStackNavigator();
const AppStack = createStackNavigator();

const LibraryStackScreen = () => {
  return (
    <LibraryStack.Navigator>
      <LibraryStack.Screen
        name="Library"
        component={Library}
        options={{
          title: 'Library',
          header: (props) => <AppHeader {...props} />,
        }}
      />
    </LibraryStack.Navigator>
  );
};

const SoonStackScreen = () => {
  return (
    <SoonStack.Navigator>
      <SoonStack.Screen
        name="Coming soon"
        component={Soon}
        options={{
          title: 'Coming soon',
          header: (props) => <AppHeader detailBook {...props} />,
        }}
      />
    </SoonStack.Navigator>
  );
};

const SettingsStackScreen = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="Settings"
        component={Settings}
        options={{
          title: 'Settings',
          header: (props) => <AppHeader detailBook {...props} />,
        }}
      />
    </SettingsStack.Navigator>
  );
};

const AppStackScreen = () => {
  return (
    <AppStack.Navigator initialRouteName="Tabs">
      <AppStack.Screen
        name="BookDetail"
        component={BookDetail}
        options={{
          title: 'Book Detail',
          header: (props) => <AppHeader detailBook {...props} />,
        }}
      />
      <AppStack.Screen
        name="Tabs"
        component={MyTabs}
        options={{headerShown: false}}
      />
    </AppStack.Navigator>
  );
};

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Library"
        component={LibraryStackScreen}
        options={{
          tabBarIcon: () => (
            <Image
              style={styles.icon}
              source={require('../assets/images/ToolBar/ic_library.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={SoonStackScreen}
        options={{
          tabBarIcon: () => (
            <Image
              style={styles.icon}
              source={require('../assets/images/ToolBar/ic_wishlist.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Add New"
        component={SoonStackScreen}
        options={{
          tabBarIcon: () => (
            <Image
              style={styles.icon}
              source={require('../assets/images/ToolBar/ic_add_new.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Rentals"
        component={SoonStackScreen}
        options={{
          tabBarIcon: () => (
            <Image
              style={styles.icon}
              source={require('../assets/images/ToolBar/ic_myrentals.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStackScreen}
        options={{
          tabBarIcon: () => (
            <Image
              style={styles.icon}
              source={require('../assets/images/ToolBar/ic_settings.png')}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export const RootNavigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="App"
          component={AppStackScreen}
          options={{headerShown: false}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
});
