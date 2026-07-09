import React from 'react';
import { TouchableOpacity, Text, ViewStyle, TextStyle } from 'react-native';
import { useTheme } from '../../core/theme/useTheme';
import { createStyles } from '../../modules/ride/styles/shared.styles'; // Ensure this is a shared style

type Props = {
  onPress: () => void;
  title: string;
  icon?: React.ReactNode;
  style?: ViewStyle;
  textStyle?: TextStyle;
};

export default function ActionButton({
  onPress,
  title,
  icon,
  style,
  textStyle,
}: Props) {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  return (
    <TouchableOpacity style={[styles.actionButton, style]} onPress={onPress}>
      <Text style={[styles.actionButtonText, textStyle]}>{title}</Text>

      {icon && icon}
    </TouchableOpacity>
  );
}
