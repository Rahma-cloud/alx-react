import courseReducer from './courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { fromJS } from 'immutable';
import { coursesNormalizer } from '../schema/courses';

describe('courseReducer', () => {
  it('should return the default state', () => {
    const state = courseReducer(undefined, {});
    expect(state).toEqual([]);
  });

  it('should normalize the data and merge with the state for FETCH_COURSE_SUCCESS action', () => {
    const data = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];
    const normalizedData = coursesNormalizer(data);
    const state = courseReducer(fromJS({ courses: {} }), { type: FETCH_COURSE_SUCCESS, data });
    expect(state.toJS()).toEqual({
      courses: normalizedData.entities.courses,
    });
  });

  it('should update the value of the item for SELECT_COURSE action', () => {
    const initialState = fromJS({
      courses: {
        1: { id: 1, isSelected: false },
        2: { id: 2, isSelected: false },
        3: { id: 3, isSelected: false },
      },
    });
    const state = courseReducer(initialState, { type: SELECT_COURSE, index: 2 });
    expect(state.toJS()).toEqual({
      courses: {
        1: { id: 1, isSelected: false },
        2: { id: 2, isSelected: true },
        3: { id: 3, isSelected: false },
      },
    });
  });

  it('should update the value of the item  for UNSELECT_COURSE action', () => {
    const initialState = fromJS({
      courses: {
        1: { id: 1, isSelected: false },
        2: { id: 2, isSelected: true },
        3: { id: 3, isSelected: false },
      },
    });
    const state = courseReducer(initialState, { type: UNSELECT_COURSE, index: 2 });
    expect(state.toJS()).toEqual({
      courses: {
        1: { id: 1, isSelected: false },
        2: { id: 2, isSelected: false },
        3: { id: 3, isSelected: false },
      },
    });
  });
});
