import { useNavigation } from '@react-navigation/native';
import { useEffect, useState, useCallback } from 'react';
import {
  fetchNotifications,
  markNotificationAsRead,
  deleteNotificationApi,
} from '../services/notificationApi';
import { NotificationDTO } from '../services/dto/notification.dto';

export function useNotificationsViewModel() {
  const [notifications, setNotifications] = useState<NotificationDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation();

  const loadNotifications = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await fetchNotifications();
      setNotifications(data);
    } catch (e) {
      console.warn('Failed to load notifications', e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadNotifications();
  }, [loadNotifications]);

  const markAsRead = async (id: number) => {
    setNotifications(prev =>
      prev.map(item => (item.id === id ? { ...item, is_read: true } : item)),
    );
    try {
      await markNotificationAsRead(id);
    } catch (e) {
      console.warn('Failed to mark as read', e);
      loadNotifications();
    }
  };

  const deleteNotification = async (id: number) => {
    const previous = notifications;
    setNotifications(prev => prev.filter(item => item.id !== id));
    try {
      await deleteNotificationApi(id);
    } catch (e) {
      console.warn('Failed to delete notification', e);
      setNotifications(previous);
    }
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  return {
    notifications,
    isLoading,
    handleBackPress,
    deleteNotification,
    markAsRead,
    refresh: loadNotifications,
  };
}
