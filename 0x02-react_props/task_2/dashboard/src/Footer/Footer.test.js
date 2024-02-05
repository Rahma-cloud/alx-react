import React from 'react';
import Footer from '../Footer/Footer';
import { shallow } from 'enzyme';
import { getFullYear, getFooterCopy } from "../utils/utils";

describe("Footer", () => {
    it("Renders header without crashing", () => {
      const wrapper = shallow(<Footer />);
      expect(wrapper.exists()).to.equal(true);
    });

    it('should ensure the components render a text', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.text()).toEqual(`Copyright ${getFullYear()} - ${getFooterCopy()}`);
    });
    
});
