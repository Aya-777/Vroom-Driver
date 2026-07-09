import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import PhoneNumberIcon from '../../../../assets/svg/contact/call.svg';
import PasswordIcon from '../../../../assets/svg/common/password.svg';
import VisibilityOnIcon from '../../../../assets/svg/common/visibilityOn.svg';
import VisibilityOffIcon from '../../../../assets/svg/common/visibilityOff.svg';
import Logo from '../shared/logo';
import LinearBg from '../../../../shared/components/LinearBg';
import { useTheme } from '../../../../core/theme/useTheme';
import { createStyles } from '../../styles/login.styles';
import Input from '../../../../shared/components/Input';
import { useTranslation } from 'react-i18next';

const LoginForm = ({ vm }: any) => {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  const { t } = useTranslation(['auth']);

  return (
    <View>

      <View style={styles.top}>
        <Logo type="login" />
      </View>

      <View style={styles.middle}>

        <Input
          type="phone"
          placeholder={t('phoneNumber')}
          placeholderTextColor={colors.textMuted}
          value={vm.phone}
          onChangeText={vm.setPhone}
          containerStyle={styles.inputBox}
          inputStyle={styles.input}
          renderLeftIcon={() => (
            <PhoneNumberIcon width={20} height={20} fill={colors.primary} />
          )}
          error={vm.phoneError}
        />

        <Input
          type="password"
          placeholder={t('password')}
          placeholderTextColor={colors.textMuted}
          value={vm.password}
          onChangeText={vm.setPassword}
          containerStyle={styles.inputBox}
          inputStyle={styles.input}
          renderLeftIcon={() => (
            <PasswordIcon width={20} height={20} fill={colors.primary} />
          )}
          renderRightIcon={(isPasswordVisible) =>
            isPasswordVisible ? (
              <VisibilityOnIcon width={20} height={20} fill={colors.primary} />
            ) : (
              <VisibilityOffIcon width={20} height={20} fill={colors.primary} />
            )
          }
          error={vm.passwordError}
        />
      </View>
      {vm.error && (
        <Text style={styles.error}>
          {vm.error}
        </Text>
      )}

      <View style={styles.bottom}>
        <TouchableOpacity onPress={vm.handleLogin}>
          <LinearBg
            style={styles.button}
            colors={[colors.textPrimary, colors.surface]}
          >
            <Text style={[styles.btnText]}>{t('login')}</Text>
          </LinearBg>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginForm;