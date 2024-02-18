import React from 'react';
import { mount } from 'enzyme';
import WithLogging from './WithLogging';

const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

describe('WithLogging HOC', () => {
  afterAll(() => {
    consoleLogSpy.mockRestore();
  });

  it('should log messages for pure HTML', () => {
    const WrappedComponent = WithLogging(() => <div>Some HTML</div>);
    mount(<WrappedComponent />);

    expect(consoleLogSpy).toHaveBeenCalledWith('Component is mounted on componentDidMount()');
    expect(consoleLogSpy).toHaveBeenCalledWith('Component is going to unmount on componentWillUnmount()');
  });

  it('should log messages for Login component', () => {
    const Login = () => <div>Login component</div>;
    const WrappedComponent = WithLogging(Login);
    mount(<WrappedComponent />);

    expect(consoleLogSpy).toHaveBeenCalledWith('Component Login is mounted on componentDidMount())');
    expect(consoleLogSpy).toHaveBeenCalledWith('Component Login is going to unmount on componentWillUnmount()');
  });
});
