import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'aphrodite';

class NotificationItem extends PureComponent {
  handleClick = () => {
    const { id, markAsRead } = this.props;
    markAsRead(id);
  };

  render() {
    const { type, html, value } = this.props;
    return (
      <>
        {type && value ? (<li data-notification-type={type} onClick={this.handleClick}>
          {value}</li>) : null}
        {html ? (<li data-urgent dangerouslySetInnerHTML={{ __html: html }} onClick={this.handleClick}>
        </li>) : null}
      </>
    );
  }
}

const styles = StyleSheet.create({})
NotificationItem.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.string,
  markAsRead: PropTypes.func.isRequired,
};

NotificationItem.defaultProps = {
    type: "default",
    value: '',
    html: null,
};

export default NotificationItem;
