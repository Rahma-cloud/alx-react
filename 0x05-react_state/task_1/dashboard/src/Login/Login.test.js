import React from 'react';
import Login from '../Login/Login';
import { shallow } from 'enzyme';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("Login", () => {
    it("Renders header without crashing", () => {
      const wrapper = shallow (<Login />);
      expect(wrapper.exists()).to.equal(true);
    });

    it('should render two inputs for both input and label tags', () => {
        const wrapper = shallow (<Login />);
        expect(wrapper.find('input')).toHaveLength(2);
        expect(wrapper.find('label')).toHaveLength(2);
    });
    
});
