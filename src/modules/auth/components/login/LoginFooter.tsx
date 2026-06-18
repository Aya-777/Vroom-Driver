import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '../../../../core/theme/useTheme';
import { createStyles } from '../../styles/login.styles';
import { useTranslation } from 'react-i18next';

type Props = {
  onSignupPress?: () => void;
  onForgotPasswordPress?: () => void;
};

const LoginFooter = ({ onSignupPress, onForgotPasswordPress }: Props) => {

  const { colors } = useTheme();
  const styles = createStyles(colors);
  const { t } = useTranslation(['auth']);

  return (
    <View style={styles.container}>
      <View style ={styles.content}>
        <Text
          style={[
            styles.text,
          ]}>
          {t('dontHaveAccount')}{' '}
          <TouchableOpacity onPress={onSignupPress}>
            <Text
              style={[
                styles.link,
              ]}>
              {t('signup')}
            </Text>
          </TouchableOpacity>
        </Text>
      </View>
      <TouchableOpacity onPress={onForgotPasswordPress}>
        <Text
          style={[
            styles.link,
          ]}>
          {t('forgotPassword?')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginFooter;
