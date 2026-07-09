import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
} from 'react-native';
import Logo from '../shared/logo';
import LinearBg from '../../../../shared/components/LinearBg';
import Profile from '../../../../assets/svg/profile/profile.svg';
import PhoneNumberIcon from '../../../../assets/svg/contact/call.svg';
import PasswordIcon from '../../../../assets/svg/common/password.svg';
import VisibilityOnIcon from '../../../../assets/svg/common/visibilityOn.svg';
import VisibilityOffIcon from '../../../../assets/svg/common/visibilityOff.svg';
import CameraIcon from '../../../../assets/svg/common/camera.svg';
import { useTheme } from '../../../../core/theme/useTheme';
import { createStyles } from '../../styles/signup.styles';
import Input from '../../../../shared/components/Input';
import { useTranslation } from 'react-i18next';

const SignupForm = ({ vm }: any) => {
    const { colors } = useTheme();
    const styles = createStyles(colors);
    const { t } = useTranslation(['auth']);

    return (
        <View>

            <View style={styles.top}>
                <View style={styles.logoWrapper}>
                    <Logo type="signup" />

                    <TouchableOpacity style={styles.cameraButton}>
                        <View style={styles.cameraCircle}>
                            <CameraIcon
                                width={16}
                                height={16}
                                fill={colors.primary}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.middle}>

                <View style={styles.row}>
                    <Input
                        type="text"
                        placeholder={t('firstName')}
                        placeholderTextColor={colors.textMuted}
                        value={vm.firstName}
                        onChangeText={vm.setFirstName}
                        containerStyle={styles.halfInput}
                        inputStyle={[styles.halfInputText, { color: colors.textPrimary }]}
                        renderLeftIcon={() => (
                            <Profile width={18} height={18} fill={colors.primary} />
                        )}
                        error={vm.firstNameError}
                    />

                    <Input
                        type="text"
                        placeholder={t('lastName')}
                        placeholderTextColor={colors.textMuted}
                        value={vm.lastName}
                        onChangeText={vm.setLastName}
                        containerStyle={styles.halfInput}
                        inputStyle={[styles.halfInputText, { color: colors.textPrimary }]}
                        renderLeftIcon={() => (
                            <Profile width={18} height={18} fill={colors.primary} />
                        )}
                        error={vm.lastNameError}
                    />
                </View>

                <Input
                    type="phone"
                    placeholder={t('phoneNumber')}
                    placeholderTextColor={colors.textMuted}
                    value={vm.phoneNumber}
                    onChangeText={vm.setPhoneNumber}
                    containerStyle={styles.inputBox}
                    inputStyle={[{ color: colors.textPrimary }]}
                    renderLeftIcon={() => (
                        <PhoneNumberIcon width={20} height={20} fill={colors.primary} />
                    )}
                    error={vm.phoneError}
                />

                <Input
                    type="password"
                    placeholder={t('password')}
                    placeholderTextColor={colors.textMuted}
                    value={vm.password}
                    onChangeText={vm.setPassword}
                    containerStyle={styles.inputBox}
                    inputStyle={[{ color: colors.textPrimary }]}
                    renderLeftIcon={() => (
                        <PasswordIcon width={20} height={20} fill={colors.primary} />
                    )}
                    renderRightIcon={(isPasswordVisible) =>
                        isPasswordVisible ? (
                            <VisibilityOnIcon width={20} height={20} fill={colors.primary} />
                        ) : (
                            <VisibilityOffIcon width={20} height={20} fill={colors.primary} />
                        )
                    }
                    error={vm.passwordError}
                />

                <Input
                    type="password"
                    placeholder={t('confirmPassword')}
                    placeholderTextColor={colors.textMuted}
                    value={vm.confirmPassword}
                    onChangeText={vm.setConfirmPassword}
                    containerStyle={styles.inputBox}
                    inputStyle={[{ color: colors.textPrimary }]}
                    renderLeftIcon={() => (
                        <PasswordIcon width={20} height={20} fill={colors.primary} />
                    )}
                    renderRightIcon={(isPasswordVisible) =>
                        isPasswordVisible ? (
                            <VisibilityOnIcon width={20} height={20} fill={colors.primary} />
                        ) : (
                            <VisibilityOffIcon width={20} height={20} fill={colors.primary} />
                        )
                    }
                    error={vm.confirmPasswordError}
                />
            </View>

            <View style={styles.bottom}>
                <TouchableOpacity onPress={vm.handleSignup} disabled={vm.isLoading}>
                    <LinearBg
                        style={styles.button}
                        colors={[colors.textPrimary, colors.surface]}
                    >
                        <Text style={[styles.btnText, { color: colors.backgroundSoft }]}>
                            {vm.isLoading ? '...' : t('signup')}
                        </Text>
                    </LinearBg>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SignupForm;