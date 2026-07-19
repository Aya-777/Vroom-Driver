import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { VEHICLE_DATA } from '../../constants/vehicleData';
import { useTheme } from '../../../../core/theme/useTheme';
import { createStyles } from '../../styles/extraDetails.styles';
import { useTranslation } from 'react-i18next';


type Props = {
  selected: string;
  onSelect: (v: string) => void;
};

export default function VehicleSelector({ selected, onSelect }: Props) {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  const {t} = useTranslation(['common']);

  return (
    <View style={styles.vehicleRow}>
      {VEHICLE_DATA.map(v => {
        const active = selected === v.id;

        return (
          <TouchableOpacity
            key={v.id}
            onPress={() => onSelect(v.id)}
            style={[styles.vehicleCard, active && styles.activeVehicleCard]}
          >
            <Image source={v.image} style={styles.vehicleImage} />

            <Text style={[styles.vehicleText, active && styles.activeVehicleText]}>
              {t(`carType.${v.id}`)}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}