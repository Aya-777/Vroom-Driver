import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../../core/theme/theme.types';

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },

    actionCardsRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      marginBottom: 20,
      gap: 16,
      zIndex: 10,
    },

    dropdown: {
      flexDirection: 'row',
      paddingVertical: 8,
      paddingHorizontal: 14,
      borderRadius: 20,
      alignItems: 'center',
      marginHorizontal: 6,
      elevation: 1,
      borderWidth: 2,
      borderColor: colors.primary,
      backgroundColor: colors.surface,
    },

    dropdownText: {
      fontWeight: '600',
      fontSize: 14,
      marginStart: 6,
      marginEnd: 6,
      color: colors.textPrimary,
    },

    dropdownContainer: {
      zIndex: 10,
    },

    cardWrapper: {
      flex: 1,
      height: 58,
      borderRadius: 12,
      overflow: 'hidden',
    },

    actionCardGradient: {
      flex: 1,
      padding: 16,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 2,
      borderColor: colors.primary,
      borderRadius: 12,
      gap: 6,
      elevation: 4,
      shadowColor: '#1a1c20',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
    },

    cardText: {
      fontSize: 14,
      fontWeight: '700',
      color: colors.primary,
    },

    iconWrapper: {
      width: 18,
      height: 18,
      justifyContent: 'center',
      alignItems: 'center',
    },

    dropdownWrapper: {
      flex: 1,
      position: 'relative',
    },

    dropdownMenu: {
      position: 'absolute',
      top: 42,
      left: 6,
      borderRadius: 12,
      width: 120,
      elevation: 5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 6,
      paddingVertical: 4,
    },

    menuItem: {
      paddingVertical: 12,
      alignItems: 'center',
    },

    menuItemText: {
      fontSize: 14,
      fontWeight: '700',
    },

    actionButton: {
      flexDirection: 'row',
      width: '50%',
      paddingVertical: 14,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      backgroundColor: colors.primary,
      elevation: 3,
    },

    actionButtonText: {
      fontSize: 16,
      fontWeight: '600',
      marginEnd: 5,
      marginBottom: 2,
      color: colors.background,
    },
    mapContainer: {
      flex: 1,
      zIndex: 0, 
    },
    map: { flex: 1,
      zIndex: 0, 
    },
  });
