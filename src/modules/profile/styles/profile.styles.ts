import { StyleSheet, Dimensions } from 'react-native';
import {
    Radius,
    Spacing,
    Shadows,
    Typography,
} from '../../../core/theme/tokens';
import { ThemeColors } from '../../../core/theme/theme.types';

const { width } = Dimensions.get('window');

export const createStyles = (colors: ThemeColors) =>
    StyleSheet.create({
        container: {
            flex: 1,
        },

        scrollContent: {
            padding: Spacing.md,
            paddingBottom: 150,
        },

        profileCard: {
            backgroundColor: colors.primary + '80',
            borderRadius: Radius.md,
            borderWidth : 2,
            borderColor: colors.primary,
            padding: Spacing.mmd,
            paddingBottom: Spacing.lg,
            flexDirection: 'row',
            alignItems: 'center',
            position: 'relative',
            margin: Spacing.mmd,
            ...Shadows.medium,
            overflow: 'visible',
        },

        editButton: {
            position: 'absolute',
            top: 8,
            left: 10,
        },

        avatarContainer: {
            position: 'relative',
        },

        avatarPlaceholder: {
            width: 76,
            height: 76,
            borderRadius: 38,
            backgroundColor: colors.textSecondary,
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
        },

        avatarHead: {
            width: 24,
            height: 24,
            borderRadius: 12,
            backgroundColor: colors.primary,
            marginBottom: 4,
        },

        avatarBody: {
            width: 44,
            height: 24,
            borderRadius: 12,
            backgroundColor: colors.primary,
        },

        verticalDivider: {
            width: 1,
            height: '80%',
            backgroundColor: colors.surface,
            marginHorizontal: Spacing.md,
        },

        dotIndicator: {
            position: 'absolute',
            left: -3,
            top: '45%',
            width: 8,
            height: 8,
            borderRadius: Radius.full,
            backgroundColor: colors.background,
        },

        profileInfo: {
            flex: 1,
        },

        userName: {
            color: colors.background,
            ...Typography.h2,
        },

        iconText: {
            flexDirection: 'row',
            alignItems: 'center',
        },

        infoText: {
            color: colors.background,
            opacity: 0.9,
            marginLeft: 4,
            ...Typography.caption,
        },

        gridSection: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            marginBottom: 16,
        },

        gridCard: {
            width: (width - 44) / 2,
            borderRadius: 16,
            padding: 16,
            marginBottom: 12,
            ...Shadows.small,
        },

        iconCircle: {
            width: 38,
            height: 38,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: Spacing.smm,
        },

        gridText: {
            color: colors.textPrimary,
            ...Typography.boldBody,
        },

        promoBanner: {
            backgroundColor: colors.backgroundSoft,
            borderRadius: 16,
            borderWidth: 1,
            borderColor: colors.primary,
            padding: 16,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 20,
            ...Shadows.medium,
        },

        promoLeft: {
            flex: 1,
        },

        promoTitle: {
            fontSize: 20,
            fontWeight: 'bold',
            color: colors.primary,
        },

        promoSubtitle: {
            color: colors.textSecondary,
            marginVertical: 4,
            ...Typography.boldBody,

        },

        promoLink: {
            fontWeight: 'bold',
            color: colors.textMuted,
            textDecorationLine: 'underline',
            ...Typography.boldBody,

        },

        promoRight: {
            width: 60,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            opacity: 0.8,
            marginEnd: 10,
        },

        carBodyTop: {
            width: 40,
            height: 26,
            backgroundColor: colors.primary,
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            alignSelf: 'center',
        },

        carBodyBottom: {
            width: 74,
            height: 22,
            backgroundColor: colors.primary,
            borderRadius: 6,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'flex-end',
        },

        carWheel: {
            width: 10,
            height: 10,
            borderRadius: Radius.sm,
            backgroundColor: colors.primary,
            marginBottom: -3,
        },

        listContainer: {
            paddingHorizontal: 14,
            marginBottom: 20,
        },

        listItem: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 14,
            marginBottom: Spacing.xs,
            backgroundColor: colors.backgroundSoft,
            borderRadius: Radius.sm,
            ...Shadows.small,
        },

        listItemLeft: {
            flexDirection: 'row',
            alignItems: 'center',
        },

        listItemTitle: {
            marginStart: 12,
            color: colors.textPrimary,
            ...Typography.body,
        },

        logoutButton: {
            backgroundColor: 'rgba(253, 0, 0, 0.35)',
            borderWidth: 1,
            borderColor: 'red',
            borderRadius: 12,
            paddingVertical: 14,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
        },

        logoutText: {
            color: 'red',
            ...Typography.boldBody,
        },
    });