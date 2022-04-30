import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {colors} from '../../theme';

const Loader = () => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size="large" color={colors.white} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black25,
  },
});
