import { SET_TYPE_FILTER, MARK_AS_READ, NotificationTypeFilters } from "./notificationActionTypes";
import { setNotificationFilter, markAsRead,} from "./notificationActionCreators";

test('markAsRead action', () => {
    const action = MARK_AS_READ(1);
    expect(action).toEqual({ type: MARK_AS_READ, index: 1 });
});
  
test('setNotificationFilter action', () => {
    const filter = NotificationTypeFilters.DEFAULT;
    const action = SET_TYPE_FILTER(filter);
    expect(action).toEqual({ type: SET_TYPE_FILTER, filter });
});
  