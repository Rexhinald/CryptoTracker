import {Keyboard, View, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import {StatusBar, SafeAreaView, Platform} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import Loader from './loader';

const Screen = ({
  safe = true,
  styleBar = {},
  containerStyle,
  style,
  loading,
  children,
  lightBar = false,
  barHeight = true,
}) => {
  const isFocused = useIsFocused();

  return (
    <>
      <View style={style ? style : {flex: 1}}>
        {safe && isFocused ? (
          <StatusBar
            translucent
            backgroundColor={'transparent'}
            barStyle={lightBar ? 'light-content' : 'dark-content'}
            {...styleBar}
          />
        ) : null}
        {safe && barHeight && <SafeAreaView />}
        <View
          style={
            containerStyle
              ? {
                  ...containerStyle,
                  paddingTop: Platform.OS === 'android' ? 16 : 4,
                }
              : {flex: 1, paddingTop: 0}
          }>
          {barHeight && <View style={{height: StatusBar.currentHeight}} />}
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <>{children}</>
          </TouchableWithoutFeedback>
        </View>
        {loading && <Loader />}
      </View>
    </>
  );
};

export default Screen;
