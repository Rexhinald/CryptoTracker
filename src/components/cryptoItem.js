import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import CText from './core/ctext';
import {colors} from '_theme';
import UpArrow from '_assets/svg/up_arrow';
import DownArrow from '_assets/svg/down_arrow';
import {removeCryptoCurrency} from '../redux/actions';
import {useDispatch} from 'react-redux';
import {showSuccess} from '../helpers/functions';

const dailyChange = change => {
  const percentage = Number(Math.abs(change).toFixed(2));

  return (
    <View style={styles.row}>
      {change > 0 ? <UpArrow /> : <DownArrow />}
      <CText
        style={change > 0 ? styles.greenText : styles.redText}
        text={`${percentage}%`}
      />
    </View>
  );
};

const CryptoItem = ({imageUrl, name, symbol, price, change}) => {
  const dispatch = useDispatch();

  const removeItem = () => {
    dispatch(removeCryptoCurrency(symbol));
    showSuccess();
  };

  return (
    <TouchableOpacity onLongPress={() => removeItem()} style={styles.root}>
      <Image
        style={styles.image}
        source={{
          uri: imageUrl,
        }}
      />
      <View style={styles.flex1}>
        <View style={styles.spacedRow}>
          <CText text={name} style={styles.bold} />
          <CText text={`$${Number(price.toFixed(6))}`} style={styles.bold} />
        </View>
        <View style={styles.spacedRow}>
          <CText style={styles.darkGreyText} text={symbol} />
          {dailyChange(change)}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CryptoItem;

const styles = StyleSheet.create({
  root: {
    borderBottomWidth: 1,
    borderBottomColor: colors.grey200,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
  },
  image: {
    width: 45,
    height: 45,
  },
  flex1: {
    flex: 1,
  },
  darkGreyText: {
    color: colors.grey500,
  },
  greenText: {
    color: colors.success,
  },
  redText: {
    color: colors.danger,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spacedRow: {
    flex: 1,
    paddingLeft: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bold: {
    fontWeight: '600',
    fontSize: 16,
  },
});
