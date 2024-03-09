import { createSelector } from "reselect";

export const filterTypeSelected = state => state.get('filter');

export const getNotifications = state => state.get('notifications');

export const getUnreadNotificationsByType = createSelector(
  [getNotifications, getFilter],
  (Notifications, filter) => {
    const unreadNotifications = Notifications.filter((Notification) => !Notification.get('read'));
    
    if (filter === 'urgent') {
      return unreadNotifications.filter((Notification) => Notification.get('type') === 'urgent');
    }
    return unreadNotifications;
  }
);
