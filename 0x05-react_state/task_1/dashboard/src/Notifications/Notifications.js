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
    const { 
      displayDrawer,
      listNotifications,
      handleDisplayDrawer,
      handleHideDrawer,
    } = this.props;
    return (
      <React.Fragment>
        {displayDrawer ? (
          <div className={
                  displayDrawer
                    ? css(styles.notificationsContainer, styles.drawerOpen)
                    : css(styles.notificationsContainer)
                }
          >
            <div className={
						        displayDrawer
							      ? css(styles.none)
							      : css(styles.menuItem, styles.hover)
					        }
					        onClick={() => {
						          handleDisplayDrawer();
					        }}
            >
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
                <><ul>
                    {listNotifications.map(({id,html,type,value}) => (
                      <NotificationItem
                        key={id}
                        type={type}
                        value={value}
                        html={html}
                        markAsRead={() => this.markAsRead(id)} />
                    ))}
                  </ul><button
                    className={css(styles.button)}
                    aria-label='Close'
                    onClick={() => {
                      console.log('Close button has been clicked');
                      handleHideDrawer();
                    } }
                  >
                      <img
                        src={closeIcon}
                        alt='close icon'
                        width='10px'
                        height='10px' />
                    </button></>
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

const styles = StyleSheet.create({
  notifications: {
    marginBottom: '20px',
    border: '1px dashed red',
    padding: '1em',
    top: '10px',
    width: '95vw',
},

'li[data="default"]': {
    color: 'blue',
},

'li[data="urgent"]': {
    color: 'red',
},

notificationsContainer: {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '1rem',
  marginRight: '1rem',
  gridRow: '1',
},
hover: {
  ':hover': {
    cursor: 'pointer',
    animationName: [bounceKeyframes, opacityKeyframes],
    animationDuration: '0.5s, 1s',
    animationIterationCount: '3',
  },
},

'notification-header': {
    display: 'flex',
    justifyContent: 'space-between',
},
  
menuItem: {
    textAlign: 'right',
    marginRight: '.5rem'
},

noBorder: {
  '@media (max-width: 900px)': {
    border: 'none',
  },
},
none: {
  display: 'none',
  '@media (max-width: 900px)': {
    display: 'none',
  },
},
button: {
  position: 'absolute',
  top: '3.5rem',
  right: '2.2rem',
  '@media (max-width: 900px)': {
    top: '10.5rem',
    right: '14.2rem',
  },
},
center: {
  '@media (max-width: 900px)': {
    marginLeft: '4vw',
    fontSize: '20px',
  },
},
drawerOpen: {
  '@media (max-width: 900px)': {
    gridRow: '2',
  },
},

});

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
	handleHideDrawer: PropTypes.func,

};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;
