import React from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends React.Component {
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

NotificationItem.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  __html: PropTypes.shape({
    html: PropTypes.string,
  }),
};

NotificationItem.defaultProps = {
    type: "default",
    value: '',
    html: null,
};

export default NotificationItem;
