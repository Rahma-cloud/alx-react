import notificationReducer from './notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';
import { fromJS } from 'immutable';

describe('notificationReducer', () => {
  it('should return the default state', () => {
    const state = notificationReducer(undefined, {});
    expect(state).toEqual(fromJs({
      filter: 'DEFAULT',
      notifications: [],
      loading: false,
    }));
  });

  it('should return the data passed with isRead set to false for FETCH_NOTIFICATIONS_SUCCESS action', () => {
    const data = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', value: 'New data available' },
    ];
    const state = notificationReducer({}, { type: FETCH_NOTIFICATIONS_SUCCESS, data });
    expect(state).toEqual({
      filter: 'DEFAULT',
      notifications: [
        { id: 1, isRead: false, type: 'default', value: 'New course available' },
        { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
        { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
      ],
      loading: false,
    });
  });

  it('should update the data with the right item marked as read for MARK_AS_READ action', () => {
    const initialState = fromJS({
      filter: 'DEFAULT',
      notifications: [
        { id: 1, isRead: false, type: 'default', value: 'New course available' },
        { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
        { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
      ],
      loading: false,
    });
    const state = notificationReducer(initialState, { type: MARK_AS_READ, index: 2 });
    expect(state).toEqual(fromJS({
      filter: 'DEFAULT',
      notifications: [
        { id: 1, isRead: false, type: 'default', value: 'New course available' },
        { id: 2, isRead: true, type: 'urgent', value: 'New resume available' },
        { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
      ],
      loading: false,
    }));
  });

  it('should update the filter attribute for SET_TYPE_FILTER action', () => {
    const initialState = fromJS({
      filter: 'DEFAULT',
      notifications: [
        { id: 1, isRead: false, type: 'default', value: 'New course available' },
        { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
        { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
      ],
      loading: false,
    });
    const state = notificationReducer(initialState, { type: SET_TYPE_FILTER, filter: 'URGENT' });
    expect(state).toEqual(fromJS({
      filter: 'URGENT',
      notifications: [
        { id: 1, isRead: false, type: 'default', value: 'New course available' },
        { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
        { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
      ],
      loading: false,
    }));
  });
  it('should update the loading attribute for SET_LOADING_STATE action', () => {
    const initialState = fromJS({
      filter: 'DEFAULT',
      notifications: [
        { id: 1, isRead: false, type: 'default', value: 'New course available' },
        { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
        { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
      ],
      loading: false,
    });
    const state = notificationReducer(initialState, { type: SET_LOADING_STATE, loading: true });
    expect(state).toEqual(fromJS({
      filter: 'DEFAULT',
      notifications: [
        { id: 1, isRead: false, type: 'default', value: 'New course available' },
        { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
        { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
      ],
      loading: true,
    }));
  });
});
