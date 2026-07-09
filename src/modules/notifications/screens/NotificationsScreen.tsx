import React from 'react';
import { View, FlatList, Text } from 'react-native';

import LinearBg from '../../../shared/components/LinearBg';
import Header from '../../../shared/components/SubHeader';

import { useTheme } from '../../../core/theme/useTheme';
import { useTranslation } from 'react-i18next';

import { createStyles } from '../styles/notifications.styles';
import { useNotificationsViewModel } from '../viewmodels/useNotificationsViewModel';
import NotificationCard from '../components/NotificationCard';

export default function NotificationsScreen() {
    const { colors } = useTheme();
    const styles = createStyles(colors);
    const { t } = useTranslation(['notifications']);

    const {
        notifications,
        isLoading,
        handleBackPress,
        markAsRead,
        deleteNotification,
    } = useNotificationsViewModel();

    return (
        <LinearBg
            colors={[colors.backgroundSoft, colors.background]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0.8 }}
            style={styles.gradientContainer}
        >
            <Header title={t('notifications')} onBackPress={handleBackPress} />


            <View style={styles.container}>
                <FlatList
                    data={notifications}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.scrollContent}
                    renderItem={({ item }) => (
                        <NotificationCard
                            notification={item}
                            onPress={(tripId) => {
                                console.log('Trip Id:', tripId);
                            }}
                            onMarkAsRead={() => markAsRead(item.id)}
                            onDelete={() => deleteNotification(item.id)}
                        />
                    )}
                    ListEmptyComponent={
                        !isLoading ? (
                            <View style={styles.emptyContainer}>
                                <Text style={styles.emptyText}>
                                    {t('noNotifications')}
                                </Text>
                            </View>
                        ) : null
                    }
                />
            </View>
        </LinearBg>
    );
}