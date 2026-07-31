import { StyleSheet } from 'react-native';
import { Spacing, Typography } from '../../../core/theme/tokens';
import { ThemeColors } from '../../../core/theme/theme.types';

export const createStyles = (colors: ThemeColors) =>
    StyleSheet.create({
        container: { flex: 1 },
        scrollContent: {
            paddingHorizontal: Spacing.md,
            paddingBottom: 40,
            alignItems: 'center',
        },
        top: { alignItems: 'center', marginTop: Spacing.lg, marginBottom: Spacing.lg },
        avatarWrapper: { position: 'relative' },
        avatarCircleInside: { flex: 1, alignItems: 'center', justifyContent: 'center' },
        avatarImage: { width: '100%', height: '100%' },
        avatarPlaceholder: { alignItems: 'center', justifyContent: 'center' },
        middle: { width: '100%', alignItems: 'center', gap: 4 },
        fieldLabel: {
            ...Typography.body,
            color: colors.primary,
            fontWeight: '600',
            marginBottom: Spacing.xs,
            marginTop: Spacing.smm,
            alignSelf: 'flex-start',
            width: '80%',
        },
        inputBox: { width: '80%' },
        input: {
            flex: 1,
            marginStart: 12,
            ...Typography.body,
            color: colors.textPrimary,
        },
    });