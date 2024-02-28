import * as notificationsData from '../../../notifications.json';

export const getAllNotificationsByUser = (userID) => {
    return notificationsData.filter(Notification => Notification.author === userID);
};
