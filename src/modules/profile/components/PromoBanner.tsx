import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

import { useTheme } from '../../../core/theme/useTheme';
import { createStyles } from '../styles/profile.styles';
import { useTranslation } from 'react-i18next';

export default function PromoBanner() {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  const {t} = useTranslation('profile')

  return (
    <TouchableOpacity
      style={[
        styles.promoBanner,
        {
          borderColor: colors.primary,
        },
      ]}
    >
      {/* Left Side */}
      <View style={styles.promoLeft}>
        <Text style={styles.promoTitle}>
          {t('becomeaDriver')}
        </Text>

        <Text style={styles.promoSubtitle}>
          {t('earnOnYourOwnSchedule')}
        </Text>

        <Text style={styles.promoLink}>
          {t('learnMore')}
        </Text>
      </View>

      {/* Right Side Car */}
      <View style={styles.promoRight}>
        <View style={styles.carBodyTop} />

        <View style={styles.carBodyBottom}>
          <View style={styles.carWheel} />
          <View style={styles.carWheel} />
        </View>
      </View>
    </TouchableOpacity>
  );
}