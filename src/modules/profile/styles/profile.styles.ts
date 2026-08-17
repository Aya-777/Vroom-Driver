import { StyleSheet, Dimensions } from 'react-native';
import {
    Radius,
    Spacing,
    Shadows,
    Typography,
} from '../../../core/theme/tokens';
import { ThemeColors } from '../../../core/theme/theme.types';

const { width } = Dimensions.get('window');
const ICON_SIZE = 70;         

export const createStyles = (colors: ThemeColors) =>
    StyleSheet.create({
        container: {
            flex: 1,
        },

        scrollContent: {
            padding: Spacing.md,
            paddingBottom: 150,
        },

        vehicleCardImage: {
            width: 90,
            height: 60,
            borderRadius: 10,
        },

        profileTopRow: {
            flexDirection: 'row',
            alignItems: 'center',
        },

        profileCard: {
            backgroundColor: colors.primary + '70',
            borderRadius: Radius.md,
            borderWidth: 2,
            borderColor: colors.primary,
            padding: Spacing.mmd,
            paddingBottom: Spacing.lg,
            flexDirection: 'column',
            position: 'relative',
            margin: Spacing.mmd,
            ...Shadows.medium,
            width: '90%'
        },

        expandButton: {
            position: 'absolute',
            bottom: Spacing.sm,
            right: Spacing.smm,
            zIndex: 2,
        },

        expandedRow: {
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: Spacing.smm,
        },

        editButton: {
            position: 'absolute',
            top: Spacing.sm,
            left: Spacing.smm,
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
            width: 2,
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
            backgroundColor: colors.primary,
        },

        profileInfo: {
            flex: 1,
        },

        userName: {
            color: colors.backgroundSoft,
            ...Typography.h2,
        },

        iconText: {
            flexDirection: 'row',
            alignItems: 'center',
        },

        infoText: {
            color: colors.backgroundSoft,
            opacity: 1,
            marginLeft: 5,
            ...Typography.body,
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

        logoutButton: { marginTop: Spacing.lg, paddingVertical: Spacing.md, borderRadius: Radius.sm, borderWidth: 1, borderColor: colors.error, backgroundColor: colors.error + '18', alignItems: 'center' },
        logoutText: { ...Typography.semiBoldBody, color: colors.error },
        wrapper: {
            height: ICON_SIZE,
            justifyContent: 'center',
        },
        line: {
            height: 1,
            width: '100%',
        },
        iconWrapper: {
            position: 'absolute',
            left: 0,
        },
        icon: {
            width: ICON_SIZE,
            height: ICON_SIZE,
        },
    });
