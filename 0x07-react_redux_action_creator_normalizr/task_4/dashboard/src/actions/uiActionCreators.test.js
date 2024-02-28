import { login, logout, hideNotificationDrawer, displayNotificationDrawer } from "./uiActionCreators";
import { LOGIN, LOGOUT, HIDE_NOTIFICATION_DRAWER, DISPLAY_NOTIFICATION_DRAWER } from "./uiActionTypes";


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
