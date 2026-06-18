import React from 'react';
import { View, Text } from 'react-native';

import { useTheme } from '../../../../core/theme/useTheme';
import { createStyles } from '../../styles/confirmRide.styles';

type Props = {
  icon: React.ReactNode;
  title: string;
  value: string;
};

export default function InfoBox({
  icon,
  title,
  value,
}: Props) {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  return (
    <View style={styles.box}>
      <View style={styles.boxHeader}>
        {icon}

        <Text style={styles.boxTitle}>
          {title}
        </Text>
      </View>

      <Text style={styles.boxValue}>
        {value}
      </Text>

      <View style={styles.line} />
    </View>
  );
}