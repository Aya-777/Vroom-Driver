import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import ActivityCard from '../components/ActivityCard';

import LinearBg from '../../../shared/components/LinearBg';
import { useTheme } from '../../../core/theme/useTheme';
import { createStyles } from '../styles/activities.styles';
import { useActivitiesViewModel } from '../viewmodels/useActivitiesViewModel';
import StatusTabs from '../components/StatusTabs';
import { useTranslation } from 'react-i18next';
import Header from '../../../shared/components/Header';
import { navigate } from '../../../navigation/rootTypes';
import ActivityDetailsSheet from '../components/ActivityDetailsSheet';
import { Activity } from '../types/activities.types';
import ReviewModal from '../../review/components/ReviewModal'

export default function ActivitiesScreen() {
    const { colors } = useTheme();
    const styles = createStyles(colors);
    const { t } = useTranslation(['activities']);

    const [selectedActivity, setSelectedActivity] =
        useState<Activity | null>(null);

    const [detailsVisible, setDetailsVisible] =
        useState(false);

    const [reviewVisible, setReviewVisible] =
        useState(false);

    const {
        statuses,
        selectedStatus,
        setSelectedStatus,
        activities,
        isLoading,
    } = useActivitiesViewModel();

    return (
        <LinearBg
            colors={[colors.backgroundSoft, colors.background]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0.8 }}
            style={styles.gradientContainer}
        >

            <Header title={t('yourActivity')}
                onNotificationPress={() =>
                    navigate('Notifications')}
            />

            <View style={styles.container}>
                <StatusTabs
                    statuses={statuses}
                    selectedStatus={selectedStatus}
                    onSelect={setSelectedStatus}
                    styles={styles}
                />

                <FlatList
                    data={activities}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.scrollContent}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <ActivityCard
                            rideType={item.vehicleType}
                            pickup={item.pickupLocation}
                            destination={item.dropoffLocation}
                            date={item.date}
                            fare={`${item.price} ${item.currency}`}
                            distance={`${item.distance} km`}
                            onPress={() => {
                                setSelectedActivity(item);
                                setDetailsVisible(true);
                            }}
                        />
                    )}
                    ListEmptyComponent={
                        !isLoading ? (
                            <View style={styles.emptyContainer}>
                                <Text style={styles.emptyText}>
                                    {t('noActivities')}
                                </Text>
                            </View>
                        ) : null
                    }
                />
                <ActivityDetailsSheet
                    visible={detailsVisible}
                    activity={selectedActivity}
                    onClose={() => setDetailsVisible(false)}
                    onReview={() => {
                        setDetailsVisible(false);
                        setReviewVisible(true);
                    }}
                    onReride={() => { }}
                />
                <ReviewModal
                    visible={reviewVisible}
                    onClose={() => setReviewVisible(false)}
                    onSubmit={(rating, review) => {
                        console.log(rating);
                        console.log(review);

                        setReviewVisible(false);
                    }}
                />
            </View>
        </LinearBg>
    );
}