import { bindActionCreators } from 'redux';
import * as notificationActionCreators from './notificationActionCreators';
import { SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from './notificationActionTypes';

const { markAsRead, setNotificationFilter, } = notificationActionCreators;

export const boundNotificationActionCreators = bindActionCreators(
  { markAsRead, setNotificationFilter },
  useDispatch()
);

export const setLoadingState = (isLoading) => ({
  type: SET_LOADING_STATE,
  payload: isLoading,
});

export const setNotifications = (notifications) => ({
  type: FETCH_NOTIFICATIONS_SUCCESS,
  payload: notifications,
});

export const fetchNotifications = () => (dispatch) => {
  dispatch(setLoadingState(true));

  fetch('/notifications.json')
    .then((response) => response.json())
    .then((data) => {
      dispatch(setNotifications(data));
    })
    .catch((error) => {
      console.error('Error fetching notifications:', error);
    })
    .finally(() => {
      dispatch(setLoadingState(false));
    });
};

