import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../../core/theme/theme.types';

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },

    dropdownRow: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 16,
    },

    inputCard: {
      width: '100%',
      borderRadius: 16,
      padding: 16,
      flexDirection: 'row',
      elevation: 2,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      backgroundColor: colors.surface,
    },

    inputTimeline: {
      width: 20,
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 10,
      marginVertical: 4
    },

    timelineDot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: colors.border,
    },

    timelineLine: {
      flex: 1,
      width: 2,
      backgroundColor: colors.border,
    },

    inputContainer: {
      flex: 1,
      marginStart: 10,
    },

    input: {
      height: 35,
      fontSize: 15,
      color: colors.textPrimary,
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 10,
    },

    divider: {
      height: 1,
      marginVertical: 8,
      backgroundColor: colors.primary,
    },

    actionRow: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      marginTop: 16,
      marginBottom: 20,
    },

    actionButton: {
      flexDirection: 'row',
      width: '48%',
      paddingVertical: 12,
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 1,
      backgroundColor: colors.surface,
    },

    actionButtonText: {
      fontWeight: '600',
      fontSize: 14,
      marginStart: 6,
      color:'#5C4E75'
    },

    nextButton: {
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

    nextButtonText: {
      fontSize: 16,
      fontWeight: '600',
      marginEnd: 5,
      marginBottom: 2,
      color: colors.background,
    },
  });