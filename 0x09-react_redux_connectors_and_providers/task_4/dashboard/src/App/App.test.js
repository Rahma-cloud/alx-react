import React from "react";
import { mapStateToProps } from "./App";

import { uiReducer
 } from "../reducers/uiReducer";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
import { shallow } from "enzyme";
import { fromJS } from "immutable";


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

  it("verifies that logIn updates the state correctly", () => {
    const component = shallow(<App />);
    const email = 'test@example.com';
    const password = 'password123';
    const instance = component.instance();
  
    instance.logIn(email, password);
  
    expect(component.state().isLoggedIn).toBe(true);
    expect(component.state().user.email).toBe(email);
    expect(component.state().user.password).toBe(password);
  });
});

describe('testing state of App.js', () => {
  it('displayDrawer initial value should be set to false', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    instance.handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).toBe(false);
  });

  it('should set displayDrawer to true after calling handleDisplayDrawer', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    instance.handleHideDrawer();


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
    const state = {
      ui: uiReducer(undefined, {}),
    };

    const props = mapStateToProps(state);
    const expectedProps = {
      isLoggedIn: true,
      isNotificationDrawerVisible: false,
    };

    expect(props).toEqual(expectedProps);
  });
});
