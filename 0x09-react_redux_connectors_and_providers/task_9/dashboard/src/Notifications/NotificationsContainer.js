import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Notifications from './Notifications';
import { fetchNotifications } from '../actions/notificationActionTypes';
import { getUnreadNotificationsByType } from '../selectors/notificationSelector';

const NotificationsContainer = ({ fetchNotifications, listNotifications, ...rest }) => {
  useEffect(() => {
    fetchNotifications();
  }, [fetchNotifications]);

  return <Notifications listNotifications={listNotifications} {...rest} />;
};

const mapStateToProps = (state) => ({
  listNotifications: getUnreadNotificationsByType(state),
});

export default connect(mapStateToProps, { fetchNotifications })(NotificationsContainer);
