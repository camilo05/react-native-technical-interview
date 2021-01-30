import React from 'react';
import {ActivityIndicator} from 'react-native';
import {PRIMARY_COLOR} from '../../constants';

const withSpinner = (Comp: any) => ({isLoading, children, ...props}: any) => {
  if (isLoading) {
    return <ActivityIndicator size="large" color={PRIMARY_COLOR} />;
  } else {
    return <Comp {...props}>{children}</Comp>;
  }
};

export default withSpinner;
