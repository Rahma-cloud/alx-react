import React from 'react';
import Login from '../Login/Login';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("Login", () => {
  it("Renders header without crashing", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render two inputs for both input and label tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input')).toHaveLength(2);
    expect(wrapper.find('label')).toHaveLength(2);
  });

  it('disables the submit button by default', () => {
    const login = shallow(<Login />);
    const submitButton = login.find('input[type="submit"]');
    expect(submitButton.prop('disabled')).toBe(true);
  });

  it('enables the submit button after changing email and password values', () => {
    const login = shallow(<Login />);
    login.find('#email').simulate('change', { target: { value: 'test@example.com' } });
    login.find('#password').simulate('change', { target: { value: 'password123' } });
    const submitButton = login.find('input[type="submit"]');
    expect(submitButton.prop('disabled')).toBe(false);
  });
});
