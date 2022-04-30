import React from 'react';
import CText from './ctext';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../../theme';

const CButton = ({text, disabled, onPress, ...props}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {...props.containerStyle}]}
      onPress={() => !disabled && onPress()}>
      <CText text={text} style={[styles.text, {opacity: disabled ? 0.3 : 1}]} />
    </TouchableOpacity>
  );
};

export default CButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.yellow,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginVertical: 15,
  },
  text: {
    fontWeight: '600',
    textAlign: 'center',
  },
});
