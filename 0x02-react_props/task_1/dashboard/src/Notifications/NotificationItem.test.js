import React from 'react';
import { render } from '@testing-library/react';
import NotificationItem from './NotificationItem';

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
  expect(getByTestId('notification-item')).toHaveAttribute(
    'dangerouslySetInnerHTML',
    { __html: '<u>test</u>' }
  );
});
