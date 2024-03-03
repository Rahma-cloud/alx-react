import uiReducer from './uiReducer';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actions/uiActionTypes';

describe('uiReducer', () => {
  it('should return the initial state', () => {
    const initialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };
    const state = uiReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('should return the same state for SELECT_COURSE action', () => {
    const currentState = {
      isNotificationDrawerVisible: true,
      isUserLoggedIn: true,
      user: { name: 'John Doe' },
    };
    const state = uiReducer(currentState, { type: 'SELECT_COURSE' });
    expect(state).toEqual(currentState);
  });

  it('should set isNotificationDrawerVisible to true for DISPLAY_NOTIFICATION_DRAWER action', () => {
    const currentState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: true,
      user: { name: 'John Doe' },
    };
    const state = uiReducer(currentState, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(state.isNotificationDrawerVisible).toEqual(true);
  });
});
