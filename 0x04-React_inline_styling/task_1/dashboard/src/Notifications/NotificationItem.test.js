import React from 'react';
import { render } from '@testing-library/react';
import NotificationItem from './NotificationItem';

describe('NotificationItem Component tests', () => {
  test('renders without crashing', () => {
    render(<NotificationItem />);
  });
  
  test('renders correct html with dummy type and value props', () => {
    const { getByTestId } = render(
      <NotificationItem type="default" value="test" />
    );
    expect(getByTestId('notification-item')).toHaveAttribute(
      'data-notification-type',
      'default'
    );
    expect(getByTestId('notification-item')).toHaveTextContent('test');
  });
  
  test('renders correct html with dummy html prop', () => {
    const { getByTestId } = render(
      <NotificationItem html={{ __html: '<u>test</u>' }} />
    );
    expect(getByTestId('notification-item')).toHaveProperty(
      'dangerouslySetInnerHTML',
      { __html: '<u>test</u>' }
    );
  });

  test('calls markAsRead with the right ID when simulating a click', () => {
    const id = 1;
    const markAsReadSpy = jest.fn();
    const component = shallow(<NotificationItem id={id} markAsRead={markAsReadSpy} />);
    
    component.simulate('click');

    expect(markAsReadSpy).toHaveBeenCalledWith(id);
  });
});
