import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends PureComponent {
  handleClick = () => {
    const { id, markAsRead } = this.props;
    markAsRead(id);
  };

  render() {
    const { type, html, value } = this.props;
    const liStyle = type === 'urgent' ? css(styles.urgent) : css(styles.default);
    return (
      <>
        {type && value ? (
        <li className={liStyle} onClick={this.handleClick}>
          {value}
          </li>
          ) : null}
        {html ? (
        <li 
        className={type === 'urgent' ? css(styles.urgent) : css(styles.default)}
        data-urgent dangerouslySetInnerHTML={{ __html: html }}
        onClick={this.handleClick}>
        </li>
        ) : null}
      </>
    );
  }
}

const styles = StyleSheet.create({
  default: {
    color: 'blue',
  },

  urgent: {
    color: 'red',
  },
});

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
