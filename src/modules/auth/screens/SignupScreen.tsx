import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
} from 'react-native';
import SignupForm from '../components/signup/SignupForm';
import SignupFooter from '../components/signup/SignupFooter';
import { useTheme } from '../../../core/theme/useTheme';
import { useSignupViewModel } from '../viewmodels/useSignupViewModel';
import { createStyles } from '../styles/signup.styles';
import SignupCard from '../components/signup/SignupCard';
import LinearBg from '../../../shared/components/LinearBg';
import SignupLoginFooter from '../components/signup/HaveAccount';
import { useAuthActions } from '../hooks/useAuthActions';
import { useNavigation } from '@react-navigation/native';

const SignupScreen = () => {

  const { navigateToLogin } = useAuthActions();
  const navigation = useNavigation<any>();

  const vm = useSignupViewModel((phone) => {
    navigation.navigate('Otp', { phoneNumber: phone });
  });

  const { colors } = useTheme();
  const styles = createStyles(colors);

  return (
    <LinearBg
      colors={[colors.backgroundSoft, colors.background]}
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

            <Text
              style={[
                styles.title,
              ]}
            >
              VROOM
            </Text>

            <SignupCard>
              <SignupForm vm={vm} />
            </SignupCard>
            <SignupLoginFooter onLoginPress={navigateToLogin} />
            <SignupFooter />
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </LinearBg>
  );
};

export default SignupScreen;