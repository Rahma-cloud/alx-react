import React from 'react';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { StyleSheet, css } from 'aphrodite';
import { getLatestNotification } from '../utils/utils';
class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
  }

  listCourses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
  ];

  listNotifications = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", html: getLatestNotification() },
  ];

  handleKeyPress(e) {
    if (e.ctrlKey && e.key === "h") {
      e.preventDefault();
      alert("Logging you out");
      this.props.logOut();
    }
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleDisplayDrawer() {
		this.setState({ displayDrawer: true });
	}

	handleHideDrawer() {
		this.setState({ displayDrawer: false });
	}

  render() {
    const { listNotifications, listCourses, isLoggedIn } = this.props;
    return (
      <>
        <div className={css(styles.app)}>
          <div className={css(styles.headingSection)}>
            <Notifications
              listNotifications={this.listNotifications}
						  displayDrawer={this.state.displayDrawer}
						  handleDisplayDrawer={this.handleDisplayDrawer}
						  handleHideDrawer={this.handleHideDrawer} 
            />
            <Header />
          </div>
          <hr className={css(styles.hr)} />
          {isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course List" className={css(styles.bodySection)}>
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to Continue" className={css(styles.bodySection)}>
              <Login />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the School" className={css(styles.bodySection)}>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis at tempora odio, necessitatibus repudiandae reiciendis cum nemo sed asperiores ut molestiae eaque aliquam illo ipsa
              iste vero dolor voluptates.</p>
          </BodySection>
          <hr className={css(styles.hr)} />
          <Footer />
        </div>
      </>
    );
  }
};


const styles = StyleSheet.create({
  app: {
    height: '100vh',
    maxWidth: '100vw',
    position: 'relative',
    fontFamily: 'Arial, Helvetica, sans-serif',
  },
  headingSection: {
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
  },
  hr: {
    borderTop: '2px solid red',
  },
  bodySection: {
    padding: '10px',
    marginLeft: '100px'
  },
  appLogo: {
    height: '200px',
    width: '200px',
    animationName: {
      from: {
        transform: 'rotate(0deg)',
      },
      to: {
        transform: 'rotate(360deg)',
      },
    },
    animationDuration: '1s',
    animationIterationCount: 'infinite',
  },
  h1: {
    color: 'red',
  },
});

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

export default App;
