import { Alert, Linking, Platform } from 'react-native';

export const callPhoneNumber = async (
  phoneNumber?: string,
): Promise<void> => {


  if (!phoneNumber) {
    Alert.alert(
      'user doenst have a phone number'
      // t('common:notice'),
      // t('common:riderDoesntHavePhoneNumber'),
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
) => {

  if (!phoneNumber) {
    Alert.alert(
      'user doenst have a phone number'
      // t('common:notice'),
      // t('common:riderDoesntHavePhoneNumber'),
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