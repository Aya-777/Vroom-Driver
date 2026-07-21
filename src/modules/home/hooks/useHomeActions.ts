import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../../navigation/main/home/homeTypes';

export const useHomeActions = () => {
  
  const navigation = useNavigation<NativeStackNavigationProp<HomeStackParamList>>();
  
  const navigateToRide = () => {
    navigation.navigate('Ride');
  };
  
  return { navigateToRide };
};