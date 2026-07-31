import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import { useTheme } from '../../../core/theme/useTheme';
import { createStyles } from '../styles/profile.styles';
import { useTranslation } from 'react-i18next';
import { Vehicle } from '../types/profile.types';
import { getMediaUrl } from '../../../core/network/media';

type Props = {
  vehicle: Vehicle;
  onPress?: () => void;
};

export default function VehicleDetailsCard({ vehicle, onPress }: Props) {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  const { t } = useTranslation('profile');

  const frontImage = vehicle.images.find((img) => img.slot === 'FRONT');
  const brandName = vehicle.customBrandName || vehicle.brand;
  const modelName = vehicle.customModelName || vehicle.model;
  const colorName = vehicle.customColorName || vehicle.color;

  return (
    <TouchableOpacity
      style={[styles.promoBanner, { borderColor: colors.primary }]}
      onPress={onPress}
      activeOpacity={0.85}
    >
      <View style={styles.promoLeft}>
        <Text style={styles.promoTitle}>{t('carDetails')}</Text>
        <Text style={styles.promoSubtitle}>
          {brandName} {modelName}
        </Text>
        <Text style={styles.promoLink}>
          {vehicle.plateNumber} • {colorName}
        </Text>
      </View>

      <View style={styles.promoRight}>
        {frontImage?.url ? (
          <Image
            source={{ uri: getMediaUrl(frontImage.url) }}
            style={styles.vehicleCardImage}
            resizeMode="cover"
          />
        ) : (
          <View style={styles.carBodyTop} />
        )}
      </View>
    </TouchableOpacity>
  );
}