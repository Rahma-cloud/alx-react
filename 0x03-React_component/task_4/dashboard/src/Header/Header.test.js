import React from 'react';
import Header from '../Header/Header.js';
import { shallow } from 'enzyme';

describe("Header", () => {
    it("Renders header without crashing", () => {
      const wrapper = shallow(<Header />);
      expect(wrapper.exists()).to.equal(true);
    });

    it('should render img and h1 tags', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('img')).toHaveLength(1);
        expect(wrapper.find('h1')).toHaveLength(1);
    });
    
});
