import { schema } from 'normalizr';
import * as notificationsData from '../../notifications.json';

const user = new schema.Entity("users");

const message = new schema.Entity("messages", {}, { idAttribute: 'guid' });

const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});

export const normalizedNotifications = schema.normalize(notificationsData, [notification]);

export const getAllNotificationsByUser = (userID) => {
  const normalizedNotificationsArray = object.values(normalizedNotifications.entities.notification)
  return normalizedNotificationsArray.filter(notification => notification.author === userID);
};
