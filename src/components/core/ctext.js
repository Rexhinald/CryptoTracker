import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const displayText = ({text, onPress, ...props}) => {
  const style = onPress ? styles.link : styles.default;
  return text ? (
    <Text allowFontScaling={false} style={style} {...props}>
      {text}
    </Text>
  ) : (
    <Text allowFontScaling={false} style={style} {...props} />
  );
};

const CText = ({text, onPress, ...props}) => {
  return onPress ? (
    <TouchableOpacity onPress={onPress}>
      {displayText({text, onPress, ...props})}
    </TouchableOpacity>
  ) : (
    displayText({text, onPress, ...props})
  );
};
export default CText;

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    color: '#000000',
  },
  link: {
    fontSize: 16,
    color: '#385775',
  },
});
