import { notificationsData } from '../constants/notificationsData';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

export function useNotificationsViewModel() {
    const [notifications, setNotifications] = useState(notificationsData);

    const navigation = useNavigation();

    const markAsRead = (id: string) => {
        setNotifications(prev =>
            prev.map(item =>
                item.id === id
                    ? { ...item, isRead: true }
                    : item,
            ),
        );
    };

    const deleteNotification = (id: string) => {
        setNotifications(prev =>
            prev.filter(item => item.id !== id),
        );
    };

    const handleBackPress = () => {
        navigation.goBack();
    }
    return {
        notifications,
        isLoading: false,
        handleBackPress,
        deleteNotification,
        markAsRead
    };
}