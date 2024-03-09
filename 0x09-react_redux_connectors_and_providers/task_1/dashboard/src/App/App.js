import React, { useState, useEffect } from 'react';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { getLatestNotification } from '../utils/utils';
import { AppProvider, useAppContext } from './AppContext';
import { connect } from 'react-redux';
import { displayNotificationDrawer, hideNotificationDrawer } from '../actions/uiActionCreators'

export const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.uiReducer.isLoggedIn,
    isNotificationDrawerVisible: state.uiReducer.isNotificationDrawerVisible,
  };
};

const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

const initialListtNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: getLatestNotification() },
];

export const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
};

const App = ({ isLoggedIn, isNotificationDrawerVisible, displayNotificationDrawer, hideNotificationDrawer }) => {
  const [user, setUser] = useState({
    email: '',
    password: '',
    isLoggedIn: false,
  });

  const [listNotifications, setListNotifications] = useState(initialListtNotifications);

  useEffect(() => {
  }, []);

  const markNotificationAsRead = (id) => {
    setListNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
  };

  const logOut = () => {
    setUser({
      email: '',
      password: '',
      isLoggedIn: false,
    });
  };
 
  const handleKeyDown = (event) => {
    const { logOut } = this.props;
    if (isNotificationDrawerVisible && event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      logOut();
    }
  };

  // Use the AppProvider to wrap your components
  return (
    <AppProvider value={{ user, logOut, listNotifications, markNotificationAsRead }}>
      <div className={css(styles.container, styles.small)}>
        <div className="heading-section">
          <Notifications 
            listNotifications={listNotifications}
            markNotificationAsRead={markNotificationAsRead}
          />
          <Header />
          </div>
          <hr />
          {useAppContext().user.isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course List">
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to Continue">
              {/* Pass the logIn function to the Login component */}
              <Login logIn={useAppContext().logIn} />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the School">
            <p>Some random text for the news section.</p>
          </BodySection>
          <Footer />
        </div>
      </AppProvider>
  );
};

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  isNotificationDrawerVisible: PropTypes.bool.isRequired,
  displayNotificationDrawer: PropTypes.func.isRequired,
  hideNotificationDrawer: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	hr: {
		borderTop: '2px solid red',
	},
	small: {
		'@media (max-width: 900px)': {
			display: 'grid',
			justifyContent: 'center',
		},
	},

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
