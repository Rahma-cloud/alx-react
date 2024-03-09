import React from 'react';
import Header from '../Header/Header.js';
import { shallow } from 'enzyme';

describe("Header", () => {
    it("Renders header without crashing", () => {
      const wrapper = shallow(<Header isLoggedIn={false}/>);
      expect(wrapper.exists()).to.equal(true);
    });

    it('should render img and h1 tags', () => {
        const wrapper = shallow(<Header isLoggedIn={false} />);
        expect(wrapper.find('img')).toHaveLength(1);
        expect(wrapper.find('h1')).toHaveLength(1);
    });
    it('should not render logoutSection with default context value', () => {
      const wrapper = shallow(<Header isLoggedIn={false} />);
      expect(wrapper.find('#logoutSection')).toHaveLength(0);
  });

  it('should render logoutSection with isLoggedIn true in context', () => {
      const wrapper = shallow(<Header isLoggedIn={true} user={{ email: 'test@example.com' }} logOut={() => {}} />);
      expect(wrapper.find('#logoutSection')).toHaveLength(1);
  });

  it('should call logOut function when logout link is clicked', () => {
      const logOutSpy = jest.fn();
      const wrapper = shallow(<Header isLoggedIn={true} user={{ isLoggedIn: true,  email: 'test@example.com' }} logOut={logOutSpy}/>);

      // Simulate click on the logout link
      wrapper.find('.logoutLink').simulate('click');

      // Verify that the logOut function was called
      expect(logOutSpy).toHaveBeenCalled();
  });
});
