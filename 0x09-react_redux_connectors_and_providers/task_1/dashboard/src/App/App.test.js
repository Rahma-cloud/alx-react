import React from "react";
import App, { mapStateToProps } from "./App";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
import { shallow, mount } from "enzyme";
import { fromJS } from "immutable";
import { uiReducer } from "../reducers/uiReducer";
import { createStore, Provider } from 'react-redux';


beforeEach(() => {
	StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
	StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("App tests", () => {
  it("renders without crashing", () => {
    const component = shallow(<App />);

    expect(component).toBeDefined();
  });

  it("should render Notifications component", () => {
    const component = shallow(<App />);

    expect(component.contains(<Notifications />)).toBe(true);
  });

  it("should render Header component", () => {
    const component = shallow(<App />);

    expect(component.contains(<Header />)).toBe(true);
  });

  it("should render Login Component", () => {
    const component = shallow(<App />);

    expect(component.contains(<Login />)).toBe(false);
  });

  it("should render Footer component", () => {
    const component = shallow(<App />);

    expect(component.contains(<Footer />)).toBe(true);
  });

  it("does not render courselist if logged out", () => {
    const component = shallow(<App />);
    component.setState({ isLoggedIn: false });

    expect(component.contains(<CourseList />)).toBe(true);
  });

  it("renders courselist if logged in", () => {
    const component = shallow(<App />);
    component.setState({ isLoggedIn: true });

    expect(component.contains(<CourseList />)).toBe(true);
    expect(component.contains(<Login />)).toBe(false);
  });

  it("calls logOut function and displays alert when pressing ctrl+h", () => {
    const logOutMock = jest.fn();
    jest.spyOn(window, 'alert').mockImplementation(() => {});
  
    const component = shallow(<App />);
    component.setState({ isLoggedIn: true, logOut: logOutMock });
  
    component.find('div').simulate('keydown', { ctrlKey: true, key: 'h' });
  
    expect(logOutMock).toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith('Logging you out');
  });

  it("verifies that logOut updates the state correctly", () => {
    const component = shallow(<App />);
    component.setState({ isLoggedIn: true });
  
    component.instance().logOut();
  
    expect(component.state().isLoggedIn).toBe(false);
  });

  it("verifies that logIn updates the state correctly", () => {
    const component = shallow(<App />);
    const email = 'test@example.com';
    const password = 'password123';
  
    component.instance().logIn(email, password);
  
    expect(component.state().isLoggedIn).toBe(true);
    expect(component.state().user.email).toBe(email);
    expect(component.state().user.password).toBe(password);
  });
});

describe('testing state of App.js', () => {
  it('displayDrawer initial value should be set to false', () => {
    const wrapper = mount(<App />);

    expect(wrapper.state().displayDrawer).toBe(false);
  });

  it('should set displayDrawer to true after calling handleDisplayDrawer', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer();

    expect(wrapper.state().displayDrawer).toBe(true);
  });

  it('should set displayDrawer to false after calling handleHideDrawer', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleHideDrawer();

    expect(wrapper.state().displayDrawer).toBe(false);
  });
});

describe('mapStateToProps function', () => {
  it('should return the right object when passing the state', () => {
    const state = fromJS({
      uiReducer: {
        isLoggedIn: true,
      }
    });

    const props = mapStateToProps(state);

    expect(props.isLoggedIn).toBe(true);
  });
});
