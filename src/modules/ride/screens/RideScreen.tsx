import React from 'react';
import { View, StatusBar} from 'react-native';
import Header from '../../../shared/components/SubHeader';
import { useTheme } from '../../../core/theme/useTheme';
import { createStyles } from '../styles/selectRide.styles';
import { useTranslation } from 'react-i18next';
import { MapContainer } from '../components/shared/MapContainer';
import {useRideViewModel} from '../viewmodels/useRideViewModel'
import SelectRideSheet from '../components/SelectRideScreen/SelectRideSheet';
import RideBottomSheet from '../components/RideScreen/RideBottomSheet';
import { useNavigation } from '@react-navigation/native';
import { HomeStackScreenProps } from '../../../navigation/main/home/homeTypes';

export default function RideScreen() {
  const { colors, mode } = useTheme();
  const styles = createStyles(colors);
  const { t } = useTranslation(['selectRide', 'common']);
  const navigation =
      useNavigation<HomeStackScreenProps<'Ride'>['navigation']>();
  const vm = useRideViewModel();
  
  
  const handleTripEnded = () => {
      vm.resetRide();
  
      navigation.navigate('HomeScreen');
  };


  console.log(vm.rideState);

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        barStyle={mode === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
      />

      <Header title={t('common:ride')} onBackPress={vm.handleBackPress} />

      <MapContainer />

      <RideBottomSheet
        rideState={vm.rideState}
        onSelectRideNext={vm.goToExtraDetails}
        onExtraDetailsNext={vm.goToRideConfirmation}
        onRideConfirmed={vm.goToDriverFound}
        onDriverFound={vm.goToDriverArrived}
        onTripStarted={vm.goToTripStarted}
        onTripEnded={handleTripEnded}
    />
    </View>
  );
}
