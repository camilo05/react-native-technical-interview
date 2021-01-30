import React, {FC, ReactElement} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

import {PRIMARY_COLOR, SECONDARY_COLOR, DISABLED_COLOR} from '../../constants';

type ChildProps = {
  label: string;
  onClick: any;
  disabled?: boolean;
  secondary?: boolean;
};

const AppButton: FC<ChildProps> = ({
  label,
  onClick,
  disabled,
  secondary,
}): ReactElement => {
  const styleDisabled = disabled ? {backgroundColor: DISABLED_COLOR} : {};
  const styleSecondary = secondary
    ? {backgroundColor: SECONDARY_COLOR, borderColor: PRIMARY_COLOR}
    : {};
  const styleSecondaryText = secondary ? {color: PRIMARY_COLOR} : {};
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, styleDisabled, styleSecondary]}
        onPress={onClick}
        disabled={disabled}>
        <Text style={[styles.textButton, styleSecondaryText]}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  container: {
    marginVertical: 3,
  },
  button: {
    height: 50,
    backgroundColor: PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderColor: SECONDARY_COLOR,
    borderWidth: 0.7,
  },
  textButton: {
    color: SECONDARY_COLOR,
    fontFamily: 'Futura',
    fontSize: 20,
    textTransform: 'uppercase',
  },
});
