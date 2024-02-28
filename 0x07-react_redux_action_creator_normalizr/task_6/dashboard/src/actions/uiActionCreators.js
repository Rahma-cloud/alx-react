import { bindActionCreators } from 'redux';
import * as uiActionCreators from './uiActionCreators';

const { login, logout, displayNotificationDrawer, hideNotificationDrawer } = uiActionCreators;

export const boundUiActionCreators = bindActionCreators(
  { login, logout, displayNotificationDrawer, hideNotificationDrawer },
  useDispatch()
);
