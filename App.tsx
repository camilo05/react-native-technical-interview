/* https://github.com/facebook/react-native
.*
* @format
* @flow strict-local
*/

import React, {Component} from 'react';
import {RootNavigation} from './src/navigation/RootNavigation';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <RootNavigation />
      </Provider>
    );
  }
}
