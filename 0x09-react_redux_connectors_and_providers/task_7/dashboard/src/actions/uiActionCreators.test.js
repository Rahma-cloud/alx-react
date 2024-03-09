import { login, logout, hideNotificationDrawer, displayNotificationDrawer, loginSuccess, loginFailure, loginRequest } from "./uiActionCreators";
import { LOGIN, LOGOUT, HIDE_NOTIFICATION_DRAWER, DISPLAY_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from "./uiActionTypes";
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';


test('login', () => {
    const email = 'test@example.com';
    const password = 'password123';
    const action = login(email, password);
    expect(action).toEqual({ type: LOGIN, user: { email, password } });
});
  
  test('logout', () => {
    const action = logout(1);
    expect(action).toEqual({ type: LOGOUT });
});

test('hideNotificationDrawer', () => {
    const action = hideNotificationDrawer(1);
    expect(action).toEqual({ type: HIDE_NOTIFICATION_DRAWER });
});
  
test('displayNotificationDrawer', () => {
    const action = displayNotificationDrawer(1);
    expect(action).toEqual({ type: DISPLAY_NOTIFICATION_DRAWER });
});

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

afterEach(() => {
  fetchMock.restore();
});

describe('loginRequest action creator', () => {
  it('dispatches LOGIN_SUCCESS on successful API call', async () => {
    fetchMock.getOnce('/login-success.json', { status: 200, body: {} });

    const expectedActions = [
      // Assuming you have a login action creator
      { type: 'LOGIN' },
      { type: LOGIN_SUCCESS },
    ];

    const store = mockStore({});

    await store.dispatch(loginRequest('test@example.com', 'password123'));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches LOGIN_FAILURE on failed API call', async () => {
    fetchMock.getOnce('/login-success.json', { status: 500 });

    const expectedActions = [
      // Assuming you have a login action creator
      { type: 'LOGIN' },
      { type: LOGIN_FAILURE },
    ];

    const store = mockStore({});

    await store.dispatch(loginRequest('test@example.com', 'password123'));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
