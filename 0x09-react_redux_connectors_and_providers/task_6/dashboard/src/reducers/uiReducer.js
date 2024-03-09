import { map } from "immutable";
import {
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    LOGOUT,
    LOGIN,
} from "../actions/uiActionTypes";


const initialState =    map({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: map({}),
});

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case DISPLAY_NOTIFICATION_DRAWER:
            return state.set('isNotificationDrawerVisible', true);
        case HIDE_NOTIFICATION_DRAWER:
            return state.set('isNotificationDrawerVisible', false);
        case LOGIN_SUCCESS:
            return state.set('isUserLoggedIn', true).set('user', Map(action.user));
        case LOGIN_FAILURE:
        case LOGOUT:
            return state.set('isUserLoggedIn', false).set('user', Map({}));
        case LOGIN:
            return state.set('user', Map(action.user));
        default:
            return state;
    }
};
