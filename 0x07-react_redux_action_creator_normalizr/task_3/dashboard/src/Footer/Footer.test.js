import React from 'react';
import Footer from '../Footer/Footer';
import { shallow } from 'enzyme';
import { AppContext } from '../App/AppContext';

describe("Footer", () => {
    it("Renders header without crashing", () => {
      const wrapper = shallow(<Footer />);
      expect(wrapper.exists()).to.equal(true);
    });

    it('should ensure the components render a text', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.text()).toContain('Copyright');
    });
    
    it('should ensure the component renders copyright text', () => {
      const wrapper = shallow(<Footer />);
      expect(wrapper.text()).toContain('Copyright');
  });

  it('should not display the link when the user is logged out within the context', () => {
      const wrapper = shallow(<Footer />);
      // Set the context value with isLoggedIn set to false
      wrapper.setContext({ user: { isLoggedIn: false } });

      // Assert that the link is not present in the rendered output
      expect(wrapper.find('a')).toHaveLength(0);
  });

  it('should display the link when the user is logged in within the context', () => {
      const wrapper = shallow(<Footer />);
      // Set the context value with isLoggedIn set to true
      wrapper.setContext({ user: { isLoggedIn: true } });

      // Assert that the link is present in the rendered output
      expect(wrapper.find('a')).toHaveLength(1);
  });
});
