import React, { useState } from 'react';
import {
  TextInput,
  TextInputProps,
  Text,
  View,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { createStyles } from '../styles/input.styles'
import { Typography } from '../../core/theme/tokens';
import { useTranslation } from 'react-i18next';

type InputType = 'text' | 'phone' | 'password' | 'username';

interface InputProps extends Omit<TextInputProps, 'style'> {
  type?: InputType;
  error?: string;
  onErrorChange?: (error: string | undefined) => void;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  renderLeftIcon?: () => React.ReactNode;
  renderRightIcon?: (isPasswordVisible?: boolean) => React.ReactNode;
}

export default function Input({
  type = 'text',
  error: externalError,
  containerStyle,
  inputStyle,
  onChangeText,
  secureTextEntry,
  keyboardType,
  renderLeftIcon,
  renderRightIcon,
  ...props
}: InputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [localError, setLocalError] = useState<string | undefined>(undefined);
  const [internalText, setInternalText] = useState(props.value || '');
  const {t} = useTranslation(['common']);

  const handleTextChange = (text: string) => {
    let finalValidText = text;

    if (type === 'phone') {
      finalValidText = text.replace(/[^0-9]/g, '');
    }
    setInternalText(finalValidText);
    onChangeText?.(finalValidText);
    if (finalValidText.length === 0) {
      setLocalError(undefined);
    } else if (type === 'phone' && finalValidText.length >= 2 && !finalValidText.startsWith('09')) {
      // setLocalError('Phone number must start with 09');
      setLocalError('phoneNumberStart');
    } else if (type === 'password' && finalValidText.length < 8) {
      // setLocalError('Password must be at least 8 characters');
      setLocalError('passwordLength');
    } else if (type === 'username' && finalValidText.length < 2) {
      // setLocalError('Username must be at least 2 characters');
      setLocalError('usernameLength');
    } else {
      setLocalError(undefined);
    }
  };

  const getMaxLength = () => {
    if (type === 'phone') return 10;
    if (type === 'password') return 50;
    if (type === 'username') return 20;
    return props.maxLength;
  };

  const finalMaxLength = getMaxLength();
  const isPassword = type === 'password';
  const finalSecureTextEntry = isPassword ? !isPasswordVisible : secureTextEntry;
  const finalKeyboardType = type === 'phone' ? 'numeric' : keyboardType;
  const error = externalError || localError;

  const styles = createStyles();
  const isInputEmpty = internalText.length === 0;
  const dynamicTypography = isInputEmpty ? Typography.caption : Typography.body;

  return (
    //     <View style={styles.container}>
    //       <TextInput style={[error ? styles.inputError : null, style]} {...props} />
    //       {error && <Text style={styles.errorText}>{error}</Text>}

    <View style={[styles.container, containerStyle]}>
      <View style={[styles.inputBox, error ? styles.inputError : null]}>
        {renderLeftIcon && renderLeftIcon()}

        <TextInput
          key={isInputEmpty ? 'empty_hint' : 'filled_body'}
          style={[
            styles.defaultInput,
            dynamicTypography,
            inputStyle
          ]}
          onChangeText={handleTextChange}
          secureTextEntry={finalSecureTextEntry}
          keyboardType={finalKeyboardType}
          maxLength={finalMaxLength}
          value={props.value !== undefined ? props.value : internalText}
          {...props}
        />

        {isPassword && renderRightIcon && (
          <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
            {renderRightIcon(isPasswordVisible)}
          </TouchableOpacity>
        )}
      </View>

      {error && <Text style={styles.errorText}>{t(`common:${error}`)}</Text>}
    </View>
  );
}

// I moved the styles to shared/styles/input.styles.ts 🫶🏻
