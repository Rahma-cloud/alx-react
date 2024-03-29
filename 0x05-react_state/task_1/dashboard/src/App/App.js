import React from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { getLatestNotification } from '../utils/utils';

const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: getLatestNotification() },
];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
    };
  };
  handleDisplayDrawer = () => {
    this.setState({
      displayDrawer: true,
    });
  }

  handleHideDrawer = () => {
    this.setState({
      displayDrawer: false,
    });
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
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
      <div className={css(styles.container, styles.small)}>
      <div className="heading-section">
        <Notifications listNotifications={listNotifications}
        displayDrawer={this.state.displayDrawer}
        handleDisplayDrawer={this.handleDisplayDrawer}
        handleHideDrawer={this.handleHideDrawer} />
        <Header />
      </div>
      <hr />
      {isLoggedIn ? (<BodySectionWithMarginBottom title = "Course List">
        <CourseList listCourses={listCourses}/>
      </BodySectionWithMarginBottom>
      ): (
      <BodySectionWithMarginBottom title="Log in to Continue">
        <Login />
      </BodySectionWithMarginBottom>)}
      <BodySection title="News from the School">
          <p>Some random text for the news section.</p>
      </BodySection>
      <Footer />
      </div>
      </>
    )
  }
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,

};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
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

export default App;
