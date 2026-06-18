import { StyleSheet } from "react-native";
import { Radius, Typography } from "../../core/theme/tokens";

export const createStyles = () =>
    StyleSheet.create({
        defaultContainer: {
            marginBottom: 15,
            width: '100%',
        },
        inputBox: {
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
        },
        defaultInput: {
            flex: 1,
            paddingVertical: 10,
            paddingHorizontal: 12,
            ...Typography.caption
        },
        container: {},
        inputError: {
            borderColor: 'red',
            borderWidth: 0.5,
            borderRadius: Radius.sm,
        },
        errorText: {
            color: 'red',
            marginTop: 4,
            ...Typography.smallCaption,
        },
    });