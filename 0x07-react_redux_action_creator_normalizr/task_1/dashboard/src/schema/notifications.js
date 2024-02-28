import { schema } from 'normalizr';
import * as notificationsData from '../../notifications.json';

export const getAllNotificationsByUser = (userID) => {
  return notificationsData.filter(Notification => Notification.author === userID);
};

const user = new schema.Entity("users");

const message = new schema.Entity("messages", {}, { idAttribute: 'guid' });

const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});

export const normalizedNotifications = schema.normalize(notificationsData, [notification]);
