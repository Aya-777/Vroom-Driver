import { Alert, Linking, Platform } from 'react-native';
import i18n from '../../../core/i18n';

export const callPhoneNumber = async (
  phoneNumber?: string,
): Promise<void> => {
  if (!phoneNumber) {
    Alert.alert(
      i18n.t('contactUS:userNotFound'),
    );
    return;
  }

  const cleanNumber = phoneNumber.replace(/[^\d+]/g, '');

  const url = Platform.select({
    ios: `telprompt:${cleanNumber}`,
    android: `tel:${cleanNumber}`,
  });

  if (!url) {
    throw new Error('Unable to create phone URL');
  }

  try {
    await Linking.openURL(url);
  } catch (error) {
    console.error('Failed to open phone dialer:', error);
    throw error;
  }
};

export const messagePhoneNumber = async (
  phoneNumber?: string,
  message?: string,
): Promise<void> => {
  if (!phoneNumber) {
    Alert.alert(
      i18n.t('contactUS:userNotFound'),
    );
    return;
  }

  const cleanNumber = phoneNumber.replace(/[^\d+]/g, '');

  const body = message
    ? `?body=${encodeURIComponent(message)}`
    : '';

  const url = `sms:${cleanNumber}${body}`;

  try {
    await Linking.openURL(url);
  } catch (error) {
    console.error('Failed to open SMS:', error);
  }
};