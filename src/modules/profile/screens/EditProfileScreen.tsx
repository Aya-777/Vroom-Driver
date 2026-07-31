import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';

import { useTheme } from '../../../core/theme/useTheme';
import { createStyles } from '../styles/editProfile.styles';
import LinearBg from '../../../shared/components/LinearBg';
import SubHeader from '../../../shared/components/SubHeader';
import Input from '../../../shared/components/Input';
import PinFrame from '../../../shared/components/PinFrame';
import { ProfileStackParamList } from '../../../navigation/main/profile/profileTypes';
import { getMediaUrl } from '../../../core/network/media';

import UserIcon from '../../../assets/svg/profile/profile.svg';
import PhoneNumberIcon from '../../../assets/svg/contact/call.svg';
import PasswordIcon from '../../../assets/svg/common/password.svg';

export default function EditProfileScreen() {
    const navigation = useNavigation<any>();
    const route = useRoute<RouteProp<ProfileStackParamList, 'EditProfile'>>();

    const { colors } = useTheme();
    const styles = createStyles(colors);
    const { t } = useTranslation(['profile', 'common']);

    const { phone, profileImage } = route.params ?? {};
    const previewImageUri = getMediaUrl(profileImage);

    return (
        <LinearBg
            colors={[colors.backgroundSoft, colors.background]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.container}
        >
            <SubHeader title={t('editProfile')} onBackPress={() => navigation.goBack()} />

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <View style={styles.top}>
                    <View style={styles.avatarWrapper}>
                        <PinFrame width={110} backgroundColor={colors.primary + '20'}>
                            <View style={styles.avatarCircleInside}>
                                {previewImageUri ? (
                                    <Image source={{ uri: previewImageUri }} style={styles.avatarImage} resizeMode="cover" />
                                ) : (
                                    <View style={styles.avatarPlaceholder}>
                                        <UserIcon width={40} height={40} fill={colors.primary} />
                                    </View>
                                )}
                            </View>
                        </PinFrame>
                    </View>
                </View>

                <View style={styles.middle}>

                    <Text style={styles.fieldLabel}>{t('phoneNumber')}</Text>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('ChangePhone')}>
                        <Input
                            value={phone ?? ''}
                            editable={false}
                            containerStyle={styles.inputBox}
                            inputStyle={styles.input}
                            renderLeftIcon={() => <PhoneNumberIcon width={18} height={18} fill={colors.primary} />}
                        />
                    </TouchableOpacity>

                    <Text style={styles.fieldLabel}>{t('password')}</Text>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('ChangePassword')}>
                        <Input
                            value="••••••••"
                            editable={false}
                            containerStyle={styles.inputBox}
                            inputStyle={styles.input}
                            renderLeftIcon={() => <PasswordIcon width={18} height={18} fill={colors.primary} />}
                        />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </LinearBg>
    );
}