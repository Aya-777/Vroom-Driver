import React, { useRef } from 'react';
import {
    ScrollView,
    TouchableOpacity,
    Text,
    View,
    Animated,
    LayoutChangeEvent,
} from 'react-native';
import { RideStatus } from '../types/activities.types';
import { useTheme } from '../../../core/theme/useTheme';
import { useTranslation } from 'react-i18next';

interface Props {
    statuses: RideStatus[];
    selectedStatus: RideStatus;
    onSelect: (status: RideStatus) => void;
    styles: any;
}

export default function StatusTabs({
    statuses,
    selectedStatus,
    onSelect,
    styles,
}: Props) {
    const { colors } = useTheme();
    const indicatorX = useRef(new Animated.Value(0)).current;
    const indicatorWidth = useRef(new Animated.Value(0)).current;
    const tabLayouts = useRef<Record<string, { x: number; width: number }>>({});

    const { t } = useTranslation(['activities']);

    const handleTabLayout = (status: RideStatus, e: LayoutChangeEvent) => {
        const { x, width } = e.nativeEvent.layout;
        tabLayouts.current[status] = { x, width };

        if (status === selectedStatus) {
            indicatorX.setValue(x);
            indicatorWidth.setValue(width);
        }
    };

    const handleSelect = (status: RideStatus) => {
        const layout = tabLayouts.current[status];
        if (layout) {
            Animated.spring(indicatorX, {
                toValue: layout.x,
                useNativeDriver: false,
                tension: 80,
                friction: 10,
            }).start();
            Animated.spring(indicatorWidth, {
                toValue: layout.width,
                useNativeDriver: false,
                tension: 80,
                friction: 10,
            }).start();
        }
        onSelect(status);
    };

    return (

        <View >
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.tabsContainer}
            >
                {statuses.map(status => (
                    <TouchableOpacity
                        key={status}
                        onLayout={(e) => handleTabLayout(status, e)}
                        onPress={() => handleSelect(status)}
                        activeOpacity={0.7}
                        style={styles.tab}
                    >
                        <Text
                            style={[
                                styles.tabText,
                                selectedStatus === status && styles.tabTextActive,
                            ]}
                        >
                            {t(`status.${status.toLowerCase()}`)}
                        </Text>
                    </TouchableOpacity>
                ))}



                <Animated.View
                    style={[
                        styles.tabIndicator,
                        {
                            backgroundColor: colors.primary,
                            width: indicatorWidth,
                            transform: [{ translateX: indicatorX }],
                        },
                    ]}
                />
            </ScrollView>
            <View style={styles.tabUnderline} />

        </View>
    );
}