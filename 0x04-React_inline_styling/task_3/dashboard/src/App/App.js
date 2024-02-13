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
    marginLeft: '100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
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

class App extends React.Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  componentDidUpdate(prevProps) {
    if (this.props.logOut !== prevProps.logOut) {
      document.removeEventListener('keydown', this.handleKeyDown);
      document.addEventListener('keydown', this.handleKeyDown);
    }
  }

  handleKeyDown = (event) => {
    const { logOut } = this.props;
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      logOut();
    }
  };

  render() {
    const { listNotifications, listCourses, isLoggedIn } = this.props;
    return (
      <>
        <div className={css(styles.app)}>
          <div className={css(styles.headingSection)}>
            <Notifications listNotifications={listNotifications} />
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
            <p>Some random text for the news section.</p>
          </BodySection>
          <hr className={css(styles.hr)} />
          <Footer />
        </div>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

export default App;
