import React, { useMemo, useState } from 'react';
import { View, StatusBar } from 'react-native';
import { useTheme } from '../../../core/theme/useTheme';
import Header from '../../../shared/components/SubHeader';
import { BaseBottomSheet } from '../../../shared/components/BaseBottomSheet';
import VehicleSelector from '../components/ExtraDetailsScreen/VehicleSelector';
import { createStyles } from '../styles/shared.styles';
import ActionButton from '../../../shared/components/ActionButton';
import TimePriceBox from '../components/ExtraDetailsScreen/TimePriceBox';
import RideActionFilters from '../components/ExtraDetailsScreen/RideActionFilters';
import { useRideDetailsViewModel } from '../viewmodels/useRideDetailsViewModel';
import { useTranslation } from 'react-i18next';
import ArrowRight from '../../../assets/svg/arrows/arrow.svg';

export default function ExtraDetailsScreen() {
  const { colors, mode } = useTheme();
  const styles = createStyles(colors);
  const { t } = useTranslation(['rideDetails', 'common']);

  const paymentItems = [
    { key: 'cash', label: t('common:payment.cash') },
    { key: 'wallet', label: t('common:payment.wallet') },
  ];

  const {
    timeEstimate,
    priceEstimate,
    selectedVehicle,
    selectedPayment,
    isDropdownOpen,
    setSelectedVehicle,
    setSelectedPayment,
    setIsDropdownOpen,

    handleNextPress,
    handleBackPress,
  } = useRideDetailsViewModel();

  const onNextPress = () => {
    handleNextPress();
  };

  const snapPoints = useMemo(() => ['30%', '70%'], []);

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        barStyle={mode === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
      />

      <Header title={t('common:ride')} onBackPress={handleBackPress} />

      <BaseBottomSheet
        isVisible={true}
        snapPoints={snapPoints}
        index={1}
      >
          <TimePriceBox time={timeEstimate} price={priceEstimate} />

          <RideActionFilters
            selectedValue={t(`common:payment.${selectedPayment}`)}
            isOpen={isDropdownOpen}
            styles={styles}
            onToggleDropdown={() => setIsDropdownOpen(!isDropdownOpen)}
            onSelectPayment={item => {
              setSelectedPayment(item);
              setIsDropdownOpen(false);
            }}
            onFiltersPress={() => console.log('Filters Pressed from Screen')}
            paymentItems={paymentItems}
          />
          <VehicleSelector
            selected={selectedVehicle}
            onSelect={setSelectedVehicle}
          />

          <ActionButton
            onPress={onNextPress}
            title={t('common:next')}
            icon={<ArrowRight fill={colors.background} />}
          />
      </BaseBottomSheet>
    </View>
  );
}
