import { bindActionCreators } from 'redux';
import * as notificationActionCreators from './notificationActionCreators';

const { markAsRead, setNotificationFilter } = notificationActionCreators;

export const boundNotificationActionCreators = bindActionCreators(
  { markAsRead, setNotificationFilter },
  useDispatch()
);
