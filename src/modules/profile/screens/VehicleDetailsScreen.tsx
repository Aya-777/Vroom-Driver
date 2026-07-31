import React, { useState } from 'react';
import { View, Text, Image, FlatList, useWindowDimensions, ScrollView } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { useTheme } from '../../../core/theme/useTheme';
import { createStyles } from '../styles/vehicleDetails.styles';
import { useTranslation } from 'react-i18next';
import { getMediaUrl } from '../../../core/network/media';
import { VehicleImage } from '../types/profile.types';
import { ProfileStackParamList } from '../../../navigation/main/profile/profileTypes';
import LinearBg from '../../../shared/components/LinearBg';
import SubHeader from '../../../shared/components/SubHeader';

const SLOT_LABEL_KEYS: Record<VehicleImage['slot'], string> = {
    FRONT: 'frontView',
    BACK: 'backView',
    SIDE: 'sideView',
    INTERIOR: 'interiorView',
};

export default function VehicleDetailsScreen() {
    const navigation = useNavigation();
    const route = useRoute<RouteProp<ProfileStackParamList, 'VehicleDetails'>>();
    const { vehicle } = route.params;

    const { colors } = useTheme();
    const styles = createStyles(colors);
    const { t } = useTranslation('profile');
    const { width } = useWindowDimensions();

    const [activeIndex, setActiveIndex] = useState(0);

    const brandName = vehicle.customBrandName || vehicle.brand;
    const modelName = vehicle.customModelName || vehicle.model;
    const colorName = vehicle.customColorName || vehicle.color;
    const activeSlot = vehicle.images[activeIndex]?.slot;

    const handleScroll = (e: any) => {
        const index = Math.round(e.nativeEvent.contentOffset.x / width);
        setActiveIndex(index);
    };

    return (
        <LinearBg
            colors={[colors.backgroundSoft, colors.background]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.container}
        >
            <SubHeader title={t('vehicleDetails')} onBackPress={() => navigation.goBack()} />

            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                    <View style={styles.imageWrapper}>
                        <FlatList
                            data={vehicle.images}
                            keyExtractor={(item) => String(item.id)}
                            horizontal
                            pagingEnabled
                            showsHorizontalScrollIndicator={false}
                            onScroll={handleScroll}
                            scrollEventThrottle={16}
                            renderItem={({ item }) => (
                                <Image
                                    source={{ uri: getMediaUrl(item.url) }}
                                    style={styles.image}
                                    resizeMode="cover"
                                />
                            )}
                        />
                    </View>

                    {activeSlot && (
                        <Text style={styles.imageLabel}>{t(SLOT_LABEL_KEYS[activeSlot])}</Text>
                    )}

                    <Text style={styles.vehicleName}>
                        {brandName} {modelName}
                    </Text>

                    <View style={styles.vehicleInfoCard}>
                        <Text style={styles.infoLabel}>{t('vehicleType')}</Text>
                        <Text style={styles.infoValue}>{t(`vehicleTypes.${vehicle.vehicleType}`)}</Text>
                    </View>

                    <View style={styles.vehicleInfoCard}>
                        <Text style={styles.infoLabel}>{t('plateNumber')}</Text>
                        <Text style={styles.infoValue}>{vehicle.plateNumber}</Text>
                    </View>

                    <View style={styles.vehicleInfoCard}>
                        <Text style={styles.infoLabel}>{t('color')}</Text>
                        <Text style={styles.infoValue}>{colorName}</Text>
                    </View>

                    <View style={styles.vehicleInfoCard}>
                        <Text style={styles.infoLabel}>{t('sizeCapacity')}</Text>
                        <Text style={styles.infoValue}>{t('seatsCount', { count: vehicle.seatsNum })}</Text>
                    </View>

                    <View style={styles.vehicleInfoCard}>
                        <Text style={styles.infoLabel}>{t('manufactureYear')}</Text>
                        <Text style={styles.infoValue}>{vehicle.manufactureYear}</Text>
                    </View>
                </ScrollView>
            </View>
        </LinearBg>
    );
}