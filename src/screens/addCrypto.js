import React, {useState} from 'react';
import Screen from '../components/core/screen';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
} from 'react-native';
import {colors} from '../theme';
import CText from '../components/core/ctext';
import {useNavigation} from '@react-navigation/native';
import CButton from '../components/core/cbutton';
import API from '../plugin/api';
import {useDispatch} from 'react-redux';
import {addCryptoCurrency} from '../redux/actions';
import {showError, showSuccess} from '../helpers/functions';

const AddCryptoScreen = () => {
  const [loading, setLoading] = useState(false);
  const [focusedInput, setFocusedInput] = useState(false);
  const [coin, setCoin] = useState('');

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const addCurrency = () => {
    setLoading(true);
    API.get(`assets/${coin.toLowerCase()}/profile?fields=id,name,slug,symbol`)
      .then(res => {
        const {data} = res.data;
        const payload = {};
        payload[data.symbol] = data;
        dispatch(addCryptoCurrency(payload));
        showSuccess();
        navigation.navigate('Profile');
      })
      .catch(err => {
        showError(err.response.data.status.error_message);
        setLoading(false);
      });
  };

  return (
    <Screen loading={loading} lightBar style={styles.root}>
      <CText text="< Back" onPress={() => navigation.goBack()} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.form}>
        <CText text="Add a Cryptocurrency" style={styles.title} />
        <TextInput
          style={[
            styles.input,
            {borderColor: focusedInput ? colors.yellow : colors.grey300},
          ]}
          placeholderTextColor={colors.grey300}
          placeholder="Use a name or ticker symbol"
          value={coin}
          onFocus={() => setFocusedInput(true)}
          onChangeText={text => setCoin(text)}
        />
        <CButton
          containerStyle={{alignSelf: 'flex-end'}}
          text="Add"
          disabled={!coin}
          onPress={addCurrency}
        />
      </KeyboardAvoidingView>
    </Screen>
  );
};

export default AddCryptoScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
  },
  title: {
    fontWeight: '700',
    fontSize: 24,
    marginVertical: 20,
  },
  input: {
    backgroundColor: colors.grey100,
    borderWidth: 1,
    borderRadius: 5,
    color: colors.black,
  },
  form: {
    flex: 1,
    justifyContent: 'center',
  },
});
