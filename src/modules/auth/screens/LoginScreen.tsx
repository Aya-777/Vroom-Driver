import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
} from 'react-native';
import LoginPin from '../components/login/LoginPin';
import LoginForm from '../components/login/LoginForm';
import LoginFooter from '../components/login/LoginFooter';
import { useLoginViewModel } from '../viewmodels/useLoginViewModel';
import { useTheme } from '../../../core/theme/useTheme';
import { createStyles } from '../styles/login.styles';
import LinearBg from '../../../shared/components/LinearBg';
import { useAuthActions } from '../hooks/useAuthActions';
import { AuthStackScreenProps } from '../../../navigation/auth/authTypes';


const LoginScreen = ({ navigation }: AuthStackScreenProps<'Login'>) => {

  const { colors } = useTheme();
  const styles = createStyles(colors);

  const vm = useLoginViewModel();
  const { navigateToSignup } = useAuthActions();

  return (
    <LinearBg
      colors={[colors.background, colors.backgroundSoft]}
      style={styles.gradient}
    >
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={styles.flex}
        >
          <ScrollView
            contentContainerStyle={styles.scroll}
            showsVerticalScrollIndicator={false}
          >
            <View
              style={[
                styles.bgCircle,
              ]}
            />

            <Text
              style={[
                styles.title,
              ]}
            >
              VROOM
            </Text>

            <LoginPin>
              <LoginForm vm={vm} />
            </LoginPin>

            <LoginFooter
              onSignupPress={navigateToSignup}
              onForgotPasswordPress={() => navigation.navigate('ForgotPassword')}
            />
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </LinearBg>
  );
};

export default LoginScreen;

