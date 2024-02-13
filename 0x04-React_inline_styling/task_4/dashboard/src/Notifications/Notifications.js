import React from "react";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
import NotificationItemShape from "./NotificationItemShape";

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length ||
      nextProps.displayDrawer !== this.props.displayDrawer
    );
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }
  render() {
    const { displayDrawer, listNotifications } = this.props;
    return (
      <React.Fragment>
        {displayDrawer ? (
          <div className="flex-area">
            <div className={css(styles.menuItemHidden)}>
              <p>Your notifications</p>
            </div>
            <div className={css(styles.notifications)}>
              <button
                style={{ color: "#3a3a3a", fontWeight: "bold", background: "none", border: "none", fontSize: "10px", position: "absolute", right: "2px", top: "2px", cursor: "pointer" }}
                aria-label="Close"
                onClick={() => console.log("Close button has been clicked")}
              >
                <img src={closeIcon} alt="closeIcon" width="10px" />
              </button>
              <p>Here is the list of notifications</p>
              {listNotifications.length === 0 ? (
                <p>No new notification for now</p>
              ) : (
                <ul className={css(styles.ul)}>
                  {listNotifications.map(({ id, html, type, value }) => (
                    <NotificationItem
                      key={id}
                      type={type}
                      value={value}
                      html={html}
                      markAsRead={() => this.markAsRead(id)}
                    />
                  ))}
                </ul>
              )}
            </div>
          </div>
        ) : (
          <div className={css(styles.menuItem)}>
            <p>Your notifications</p>
          </div>
        )}
      </React.Fragment>
    );
  }
}

const bounceAnimation = {
  '0%': { transform: 'translateY(0px)' },
  '50%': { transform: 'translateY(-5px)' },
  '100%': { transform: 'translateY(5px)' },
};

const fadeInAnimation = {
  '0%': { opacity: 0.5 },
  '100%': { opacity: 1 },
};


const styles = StyleSheet.create({
  notifications: {
    marginBottom: '20px',
    border: '1px dashed red',
    padding: '1em',
    top: '10px',
    zIndex: '100',
    '@media (max-width: 900px)': {
      width: '100%',
      padding: '0px',
      fontSize: 20,
      position: 'relative',
      right: 0,
      left: 0,
      border: 'none',
    }
  },

'notification-header': {
    display: 'flex',
    justifyContent: 'space-between',
},
  
menuItem: {
    textAlign: 'right',
    position: 'relative',
    zIndex: 100,
    float: 'right',
    backgroundColor: '#fff8f8',
    ':hover': {
      cursor: 'pointer',
      animation: `${fadeInAnimation} 1s ease-in-out 3`,
    }
},

menuItemHidden: {
  display: 'none',
},

ul: {
  '@media (max-width: 900px)': {
    padding: 0
  }
},
button: {
  '@media (max-width: 900px)': {
    position: 'relative',
    float: 'right',
  }
}

});

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)

};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
