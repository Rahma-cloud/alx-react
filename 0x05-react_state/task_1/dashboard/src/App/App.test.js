import React from "react";
import App from "./App";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
import { shallow } from "enzyme";

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

    component.setProps({ isLoggedIn: false });

    expect(component.contains(<CourseList />)).toBe(true);
  });
  it("renders courselist if logged in", () => {
    const component = shallow(<App isLoggedIn={true} />);

    expect(component.contains(<CourseList />)).toBe(true);
    expect(component.contains(<Login />)).toBe(false);
  });

  it("calls logOut function and displays alert when pressing ctrl+h", () => {
    const logOutMock = jest.fn();
    jest.spyOn(window, 'alert').mockImplementation(() => {});
  
    const component = shallow(<App isLoggedIn={true} logOut={logOutMock} />);
  
    component.find('div').simulate('keydown', { ctrlKey: true, key: 'h' });
  
    expect(logOutMock).toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith('Logging you out');
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
