import React from 'react';
import { View, ScrollView, RefreshControl } from 'react-native';
import { useTheme } from '../../../core/theme/useTheme';
import { createStyles } from '../styles/profile.styles';
import { useProfileViewModel } from '../viewmodels/useProfileViewModel';
import { useProfileActions } from '../hooks/useProfileActions';
import ProfileCard from '../components/ProfileCard';
import GridSection from '../components/GridSection';
import VehicleDetailsCard from '../components/VehicleDetailsCard';
import ListSection from '../components/ListSection';
import LogoutIcon from '../../../assets/svg/profile/logout.svg'
import LinearBg from '../../../shared/components/LinearBg';
import { useTranslation } from 'react-i18next';
import ActionButton from '../../../shared/components/ActionButton';
import Header from '../../../shared/components/Header';
import { navigate } from '../../../navigation/rootTypes';

export default function ProfileScreen() {
  const { gridItems, listItems, openSidebar, profile, isLoading, isRefreshing, onRefresh, openVehicleDetails } = useProfileViewModel();

  const { logout } = useProfileActions();
  const { colors } = useTheme();
  const styles = createStyles(colors);
  const { t } = useTranslation(['profile', 'common']);

  return (
    <LinearBg
      colors={[colors.backgroundSoft, colors.background]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <Header title={t('welcome')} onNotificationPress={() => navigate('Notifications')} onMenuPress={openSidebar} />

      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={onRefresh}
              tintColor={colors.primary}
              colors={[colors.primary]}
            />
          }
        >

          <ProfileCard
            firstName={profile?.firstName}
            lastName={profile?.lastName}
            phone={profile?.phone}
            profileImage={profile?.profileImage}
            isLoading={isLoading}
            driverStatus={profile?.driverInfo?.driverStatus}
            nationalId={profile?.driverInfo?.nationalId}
            birthdate={profile?.driverInfo?.birthdate}
          />

          <GridSection items={gridItems} />

          {profile?.driverInfo?.vehicle && (
            <VehicleDetailsCard vehicle={profile.driverInfo.vehicle} onPress={openVehicleDetails} />
          )}

          <ListSection items={listItems} />

          <ActionButton
            onPress={logout}
            title={t('logout')}
            icon={<LogoutIcon fill={colors.error} />}
            style={styles.logoutButton}
            textStyle={styles.logoutText}
          />
        </ScrollView>
      </View>
    </LinearBg>
  );
}