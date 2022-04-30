import {showMessage} from 'react-native-flash-message';
import {colors} from '../theme';
import {StatusBar} from 'react-native';

export const showSuccess = (success = 'Success') => {
  showMessage({
    message: success,
    style: {
      backgroundColor: colors.success,
      marginTop: StatusBar.currentHeight + 10,
      marginHorizontal: 10,
      borderRadius: 10,
    },
  });
};

export const showError = (error = 'Something went wrong') => {
  showMessage({
    message: error,
    style: {
      backgroundColor: colors.danger,
      marginTop: StatusBar.currentHeight + 10,
      marginHorizontal: 10,
      borderRadius: 10,
    },
  });
};
