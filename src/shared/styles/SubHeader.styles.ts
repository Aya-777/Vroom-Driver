import { Platform, StatusBar, StyleSheet } from "react-native";
import { Radius, Shadows, Spacing, Typography } from "../../core/theme/tokens";

export const createStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      paddingTop: Platform.OS === 'ios' ? Spacing.xs : Spacing.md,
      paddingBottom: Spacing.sm,
      backgroundColor: colors.backgroundSoft,
      ...Shadows.medium,
    },

    header: {
      minHeight: 50,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: Spacing.md,
    },

    backButton: {
      width: 40,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: Radius.full,
    },

    title: {
      flex: 1,
      textAlign: 'left',
      ...Typography.h3,
      color: colors.textPrimary,
    },

    placeholder: {
      width: 40,
      height: 40,
    },
  });