import React from 'react';
import {
  ScrollView,
  View,
} from 'react-native';

import LinearBg from '../../../shared/components/LinearBg';
import SearchBar from '../../../shared/components/SearchBar';
import ForYouStar from '../../../assets/svg/home/ForYouStar.svg';

import ServiceCard from '../components/ServiceCard';
import DestinationCard from '../components/DestinationCard';
import SectionHeader from '../components/SectionHeader';

import { useTheme } from '../../../core/theme/useTheme';
import { createStyles } from '../styles/home.styles';
import { useHomeViewModel } from '../viewmodels/useHomeViewModel';

import HeaderTopAppBar from '../components/HomeHeader';
import { useHomeActions } from '../hooks/useHomeActions';
import { useTranslation } from 'react-i18next';
import { navigate } from '../../../navigation/rootTypes';

export default function HomeScreen() {

  const { colors } = useTheme();
  const styles = createStyles(colors);
  const { t } = useTranslation(['home']);

  const {
    services,
    recentDestinations,
    openSidebar,
  } = useHomeViewModel();

  const {
    navigateToSelectRide
  } = useHomeActions();

  const serviceActions: Record<string, () => void> = {
    '1': navigateToSelectRide,
    // '2': navigateToReserve,
  };

  return (
    <LinearBg
      colors={[colors.backgroundSoft, colors.background]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.gradientContainer}
    >
      <View style={styles.container}>

        <HeaderTopAppBar
          onMenuPress={openSidebar}
          onNotificationPress={() =>
            navigate('Notifications')
          } />

        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <SearchBar />
          <SectionHeader
            title={t('forYou')}
            icon={<ForYouStar width={20} height={20} />}
          />

          <View style={styles.gridContainer}>
            {services.map(service => (
              <ServiceCard
                key={service.id}
                onPress={serviceActions[service.id]}
                {...service}
              />
            ))}
          </View>

          <SectionHeader
            title={t('recentDestinations')}
            actionText={t('seeAll')}
          />

          <View style={styles.destinationList}>
            {recentDestinations.map(destination => {
              const DestinationIcon = destination.icon;

              return (
                <DestinationCard
                  key={destination.id}
                  {...destination}
                  title={destination.title}
                  subtitle={destination.subtitle}
                  icon={<DestinationIcon />}
                />
              );
            })}
          </View>
        </ScrollView>

      </View>
    </LinearBg >
  );
}
