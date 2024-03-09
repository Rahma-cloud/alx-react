import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import NotificationsContainer from './NotificationsContainer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('NotificationsContainer Component tests', () => {
  let store;
  let wrapper;

  beforeEach(() => {
    store = mockStore({});
    wrapper = mount(
      <Provider store={store}>
        <NotificationsContainer />
      </Provider>
    );
  });

  it('renders NotificationsContainer component without crashing', () => {
    expect(wrapper).toBeDefined();
  });

  it('dispatches fetchNotifications action on mount', () => {
    const actions = store.getActions();
    expect(actions).toHaveLength(1);
    expect(actions[0].type).toEqual('FETCH_NOTIFICATIONS');
  });
});
