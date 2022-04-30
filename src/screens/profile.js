import React, {useCallback, useEffect, useState} from 'react';
import {
  BackHandler,
  FlatList,
  Image,
  RefreshControl,
  StyleSheet,
  View,
} from 'react-native';
import CryptoItem from '../components/cryptoItem';
import CText from '../components/core/ctext';
import Screen from '../components/core/screen';
import API from '../plugin/api';
import {colors} from '../theme';
import navigationService from '../navigation/navigationService';
import {useSelector} from 'react-redux';
import _ from 'lodash-core';
import {useFocusEffect} from '@react-navigation/native';

const ProfileScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [allCoins, setAllCoins] = useState([]);

  const myCoins = useSelector(state => _.get(state, 'currencies', {}));

  const coins = allCoins.filter(coin =>
    Object.keys(myCoins).includes(coin.symbol),
  );

  useFocusEffect(
    useCallback(() => {
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        () => {
          BackHandler.exitApp();
          return true;
        },
      );
      return () => backHandler.remove();
    }, []),
  );

  const getAllCoins = () => {
    setRefreshing(true);
    API.get(
      'assets?limit=500&fields=id,slug,symbol,name,metrics/market_data',
    ).then(res => {
      setAllCoins(res.data.data);
      setRefreshing(false);
    });
  };

  useEffect(() => {
    getAllCoins();
  }, []);

  return (
    <Screen barHeight={false} lightBar style={styles.root}>
      <View style={styles.header}>
        <CText text="CryptoTracker Pro" style={styles.headerText} />
        <Image source={require('_assets/img/a-avatar-img.png')} />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        overScrollMode="never"
        style={styles.list}
        data={coins}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={getAllCoins} />
        }
        ListFooterComponent={
          <CText
            text="+ Add a Cryptocurrency"
            style={styles.addButton}
            onPress={() => navigationService.navigate('AddCurrency')}
          />
        }
        renderItem={({item}) => (
          <CryptoItem
            imageUrl={`https://cryptologos.cc/logos/${
              item.slug
            }-${item.symbol.toLowerCase()}-logo.png?v=022`}
            name={item.name}
            symbol={item.symbol}
            price={item.metrics.market_data.price_usd}
            change={item.metrics.market_data.percent_change_usd_last_24_hours}
          />
        )}
      />
    </Screen>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 60,
    paddingBottom: 40,
  },
  headerText: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 22,
  },
  loader: {
    marginTop: 30,
  },
  list: {
    margin: 25,
  },
  addButton: {
    textAlign: 'center',
    color: colors.primary,
    marginVertical: 30,
  },
});
