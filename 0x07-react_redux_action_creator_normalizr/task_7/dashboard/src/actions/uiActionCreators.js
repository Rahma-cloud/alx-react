import { bindActionCreators } from 'redux';
import * as uiActionCreators from './uiActionCreators';
import { LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';


const { login, logout, displayNotificationDrawer, hideNotificationDrawer } = uiActionCreators;

export const boundUiActionCreators = bindActionCreators(
  { login, logout, displayNotificationDrawer, hideNotificationDrawer },
  useDispatch()
);

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE,
});

export const loginRequest = (email, password) => async (dispatch) => {
  dispatch(login()); // Assuming you have a login action creator

  try {
    const response = await fetch('/login-success.json');
    if (response.ok) {
      dispatch(loginSuccess());
    } else {
      dispatch(loginFailure());
    }
  } catch (error) {
    dispatch(loginFailure());
  }
};
