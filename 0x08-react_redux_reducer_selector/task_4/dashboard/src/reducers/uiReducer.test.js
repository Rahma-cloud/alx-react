// uiReducer.test.js
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
    const initialState = uiReducer(undefined, {});
    expect(initialState.toJS()).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    });
  });

  it('should return the same state for SELECT_COURSE action', () => {
    const currentState = uiReducer(initialState, { type: 'SELECT_COURSE' });
    expect(currentState.toJS()).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    });
  });

  it('should set isNotificationDrawerVisible to true for DISPLAY_NOTIFICATION_DRAWER action', () => {
    const nextState = uiReducer(initialState, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(nextState.toJS()).toEqual({
      isNotificationDrawerVisible: true,
      isUserLoggedIn: false,
      user: {},
    });
  });
});
