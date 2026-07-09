import { StyleSheet } from "react-native";
import { Radius, Typography } from "../../core/theme/tokens";

export const createStyles = (colors: any) =>
    StyleSheet.create({
        defaultContainer: {
            marginBottom: 15,
            width: '100%',
        },
        inputBox: {
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            borderRadius: Radius.md,
            height: 55,
            paddingHorizontal: 16,
            borderWidth: 2,
            borderColor: colors.surface,
            backgroundColor: colors.backgroundSoft,
        },
        errorContainer: {
            width: '100%',
            minHeight: Typography.smallCaption.fontSize + 6,
            marginTop: 4,
            justifyContent: 'center',
            alignItems: 'flex-start'
        },

        errorPlaceholder: {
            height: 18,
        },
        defaultInput: {
            flex: 1,
            paddingVertical: 10,
            paddingHorizontal: 12,
            ...Typography.caption
        },
        container: {
            width: '100%',
            flexDirection: 'column',
        },
        inputError: {
            borderColor: colors.error,
            borderWidth: 1,
            textAlign: 'left',
            ...Typography.caption,
        },
        errorText: {
            color: colors.error,
            marginTop: 4,
            ...Typography.smallCaption,
        },
    });