import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../../navigation/auth/authTypes';

export const useAuthActions = () => {
  
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  
  const navigateToLogin = () => {
    navigation.navigate('Login');
  };
  
  const navigateToSignup = () => {
    navigation.navigate('Signup');
  };
  
  return { navigateToLogin, navigateToSignup };
};