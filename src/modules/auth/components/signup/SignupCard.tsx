import React from 'react';
import { View } from 'react-native';
import { createStyles } from '../../styles/signup.styles';
import { useTheme } from '../../../../core/theme/useTheme';
import PinShapeSkia from './PinShapeSkia';
import PinGlow from './PinGlow';

const SignupCard = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const { colors } = useTheme();
    const styles = createStyles(colors);

    return (
        <View style={styles.signupWrapper}>
            <View style={styles.pinContainer}>
                <View style={styles.glowWrapper}>
                    <PinGlow color={colors.surface } />
                </View>

                <View style={styles.pinWrapper}>
                    <PinShapeSkia color={colors.backgroundSoft } />
                </View>
            </View>

            <View style={styles.signupContent}>
                {children}
            </View>
        </View>
    );
};

export default SignupCard;