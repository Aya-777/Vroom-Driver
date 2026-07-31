import { StyleSheet } from 'react-native';
import { Spacing, Radius, Typography, Shadows } from '../../core/theme/tokens';
import { ThemeColors } from '../../core/theme/theme.types';

export const createStyles = (colors: ThemeColors) =>
    StyleSheet.create({
        container: {
            flex: 1
        },
        content: {
            flex: 1,
            paddingHorizontal: Spacing.xl,
            alignItems: 'center',
            paddingTop: Spacing.xxl
        },
        description: {
            ...Typography.body,
            color: colors.textSecondary,
            textAlign: 'left',
            alignSelf: 'flex-start',
            lineHeight: 26,
            marginBottom: Spacing.xxl,
        },
        form: {
            width: '100%',
            marginTop: Spacing.md
        },
        label: {
            ...Typography.body,
            color: colors.primary,
            marginBottom: Spacing.sm,
            fontWeight: '600'
        },
        inputContainer: {
            width: '80%',
            alignSelf: 'center'
        },
        inputText: {
            color: colors.primary
        },
        button: {
            width: '70%',
            height: 48,
            backgroundColor: colors.primary,
            borderRadius: Radius.full,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: Spacing.xl,
            ...Shadows.large,
        },
        buttonText: {
            ...Typography.semiBoldBody,
            color: colors.surface
        },
    });