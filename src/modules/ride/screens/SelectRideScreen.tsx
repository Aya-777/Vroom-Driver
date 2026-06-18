import React from 'react';
import { View, StatusBar, Alert } from 'react-native';
import { useTheme } from '../../../core/theme/useTheme';
import BottomSheetCard from '../../../shared/components/ride/BottomSheetCard';
import Header from '../../../shared/components/SubHeader';
import RideDropdown from '../components/shared/RideDropdown';
import RideLocationInputs from '../components/SelectRideScreen/RideLocationInputs';
import ActionButton from '../../../shared/components/ActionButton';
import { useSelectRideViewModel } from '../viewmodels/useSelectRideViewModel';
import { createStyles } from '../styles/selectRide.styles';
import ProfileIcon from '../../../assets/svg/profile/profile.svg';
import ScheduleIcon from '../../../assets/svg/common/schedule.svg';
import PinIcon from '../../../assets/svg/common/pin.svg';
import StarIcon from '../../../assets/svg/common/star.svg';
import ArrowRight from '../../../assets/svg/arrows/arrow.svg';
import { useTranslation } from 'react-i18next';

function showAlert(title: string, msg: string) {
  Alert.alert(title, msg);
}

export default function SelectRideScreen() {
  const { colors, mode } = useTheme();
  const styles = createStyles(colors);
  const { t } = useTranslation(['selectRide', 'common']);

  const {
    isNowDropdownOpen,
    isForMeDropdownOpen,
    selectedPerson,
    selectedTime,
    fromLocation,
    toLocation,
    errors,

    setIsNowDropdownOpen,
    setIsForMeDropdownOpen,
    setSelectedPerson,
    setSelectedTime,
    setFromLocation,
    setToLocation,

    validate,
    handleNextPress,
    handleBackPress,
  } = useSelectRideViewModel(showAlert);

  const personItems = [
    { key: 'forMe', label: t('selectRide:forMe') },
    { key: 'otherContact', label: t('selectRide:otherContact') },
  ];

  const timeItems = [
    { key: 'now', label: t('common:now') },
    { key: 'schedule', label: t('common:schedule') },
  ];

  const onNextPress = () => {
    if (validate()) {
      handleNextPress();
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        barStyle={mode === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
      />

      <Header title={t('common:ride')} onBackPress={handleBackPress} />

      <BottomSheetCard>
        <View style={styles.dropdownRow}>
          <RideDropdown
            icon={<ScheduleIcon fill={colors.primary} />}
            value={t(`common:${selectedTime}`)}
            isOpen={isNowDropdownOpen}
            items={timeItems}
            onToggle={() => setIsNowDropdownOpen(!isNowDropdownOpen)}
            onSelect={item => {
              setSelectedTime(item);
              setIsNowDropdownOpen(false);
            }}
          />

          <RideDropdown
            icon={<ProfileIcon fill={colors.primary} />}
            value={t(`selectRide:${selectedPerson}`)}
            isOpen={isForMeDropdownOpen}
            items={personItems}
            onToggle={() => setIsForMeDropdownOpen(!isForMeDropdownOpen)}
            onSelect={item => {
              setSelectedPerson(item);
              setIsForMeDropdownOpen(false);
            }}
          />
        </View>

        <RideLocationInputs
          fromLocation={fromLocation}
          toLocation={toLocation}
          onChangeFrom={setFromLocation}
          onChangeTo={setToLocation}
          errors={errors}
        />

        <View style={styles.actionRow}>
          <ActionButton
            onPress={() => {}}
            icon={<PinIcon fill={colors.textSecondary} />}
            title={t('setOnMap')}
            textStyle={{ color: colors.textSecondary }}
            style={styles.actionButton}
          />

          <ActionButton
            onPress={() => {}}
            icon={<StarIcon fill={colors.textSecondary} />}
            title={t('common:savedPlaces')}
            textStyle={{ color: colors.textSecondary }}
            style={styles.actionButton}
          />
        </View>

        <ActionButton
          onPress={onNextPress}
          title={t('common:next')}
          icon={<ArrowRight fill={colors.background} />}
        />
      </BottomSheetCard>
    </View>
  );
}
