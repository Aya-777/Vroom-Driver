import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

import LinearBg from '../../../shared/components/LinearBg';
import { useTheme } from '../../../core/theme/useTheme';

import { createStyles } from '../styles/notifications.styles';
import { NotificationCardProps } from '../types/notifications.types';
import { getNotificationIcon } from '../utils/notificationIcon';
import { formatNotificationDateTime } from '../utils/formateDate';
import CheckIcon from '../../../assets/svg/common/check.svg';
import TrashIcon from '../../../assets/svg/common/trash.svg';

const NotificationCard = ({
    notification,
    onPress,
    onMarkAsRead,
    onDelete,
}: NotificationCardProps) => {
    const { colors } = useTheme();
    const styles = createStyles(colors);

    const { Icon, color, backgroundColor } = getNotificationIcon(notification.type, colors);
    const { date, time } = formatNotificationDateTime(notification.created_at);

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => onPress?.(notification.trip_id)}
        >
            <LinearBg
                colors={[colors.background, colors.backgroundSoft]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.container}
            >
                <View style={styles.header}>

                    <View
                        style={[
                            styles.iconWrapper,
                            { backgroundColor },
                        ]}
                    >
                        <Icon width={22} height={22} fill={color} />
                        {!notification.is_read && (
                            <View style={styles.unreadDot} />
                        )}
                    </View>

                    <View style={styles.headerContent}>
                        <Text style={styles.title} numberOfLines={2}>
                            {notification.title}
                        </Text>

                        <Text style={styles.body} numberOfLines={3}>
                            {notification.body}
                        </Text>

                        <View style={styles.dateTimeRow}>
                            <Text style={styles.time}>{date}</Text>
                            <Text style={styles.time}>{time}</Text>
                        </View>
                    </View>

                </View>

                <View style={styles.divider} />

                <View
                    style={[
                        styles.actionsRow,
                        notification.is_read && styles.actionsRowRead,
                    ]}
                >
                    {!notification.is_read && (
                        <TouchableOpacity
                            style={styles.actionButton}
                            onPress={onMarkAsRead}
                        >
                            <CheckIcon width={18} height={18} fill={colors.success} />
                            <Text style={[styles.actionText, styles.markReadText]}>
                                Mark as read
                            </Text>
                        </TouchableOpacity>
                    )}

                    <TouchableOpacity style={styles.actionButton} onPress={onDelete}>
                        <TrashIcon width={18} height={18} fill={colors.error} />
                        <Text style={[styles.actionText, styles.deleteText]}>
                            Delete
                        </Text>
                    </TouchableOpacity>
                </View>
            </LinearBg>
        </TouchableOpacity>
    );
};

export default NotificationCard;