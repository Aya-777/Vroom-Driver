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
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../core/theme/useTheme';

type InputType = 'text' | 'phone' | 'password' | 'username';

interface InputProps extends Omit<TextInputProps, 'style'> {
  type?: InputType;
  error?: string;
  onErrorChange?: (error: string | undefined) => void;
  containerStyle?: StyleProp<ViewStyle>;
  inputBoxStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  renderLeftIcon?: () => React.ReactNode;
  renderRightIcon?: (isPasswordVisible?: boolean) => React.ReactNode;
}

export default function Input({
  type = 'text',
  error: externalError,
  containerStyle,
  inputBoxStyle,
  inputStyle,
  onChangeText,
  secureTextEntry,
  keyboardType,
  value,
  renderLeftIcon,
  renderRightIcon,
  ...props
}: InputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [localError, setLocalError] = useState<string | undefined>(undefined);
  // const [internalText, setInternalText] = useState(props.value || '');
  const { t } = useTranslation(['common']);
  const { colors } = useTheme();
  const styles = createStyles(colors);

  const handleTextChange = (text: string) => {
    let finalValidText = text;

    if (type === 'phone') {
      finalValidText = text.replace(/[^0-9]/g, '');
    }
    onChangeText?.(finalValidText);
    if (finalValidText.length === 0) {
      setLocalError(undefined);
    } else if (type === 'phone' && finalValidText.length >= 2 && !finalValidText.startsWith('09')) {

      setLocalError('phoneNumberStart');
    } else if (type === 'password' && finalValidText.length < 8) {

      setLocalError('passwordLength');
    } else if (type === 'username' && finalValidText.length < 2) {

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

  return (

    <View style={[styles.container, containerStyle]}>
      <View style={[styles.inputBox, inputBoxStyle, error ? styles.inputError : null]}>
        {renderLeftIcon && renderLeftIcon()}

        <TextInput
          style={[
            styles.defaultInput,
            inputStyle
          ]}
          onChangeText={handleTextChange}
          secureTextEntry={finalSecureTextEntry}
          keyboardType={finalKeyboardType}
          maxLength={finalMaxLength}
          value={value ?? ''}

          {...props}
        />

        {isPassword && renderRightIcon && (
          <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
            {renderRightIcon(isPasswordVisible)}
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.errorContainer}>
        {error ? (
          <Text style={styles.errorText} numberOfLines={2}>
            {t(`common:${error}`)}
          </Text>
        ) : (
          <View style={styles.errorPlaceholder} />
        )}
      </View>
    </View>
  );
}

