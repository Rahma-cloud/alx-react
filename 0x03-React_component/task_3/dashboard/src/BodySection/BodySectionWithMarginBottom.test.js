import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';

describe('<BodySectionWithMarginBottom />', () => {
  it('renders BodySection component with correct props', () => {
    const title = 'Test Title';
    const wrapper = shallow(
      <BodySectionWithMarginBottom title={title}>
        <p>Test children node</p>
      </BodySectionWithMarginBottom>
    );

    expect(wrapper.find(BodySection)).toHaveLength(1);

    const bodySectionProps = wrapper.find(BodySection).props();
    expect(bodySectionProps.title).toEqual(title);

  });
});
