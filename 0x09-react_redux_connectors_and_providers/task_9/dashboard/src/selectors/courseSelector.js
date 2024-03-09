import { createSelector } from 'reselect';
import { List } from 'immutable';

const selectCourses = (state) => state.get('courses');

export const getAllCourses = createSelector(
  [selectCourses],
  (courses) => {
    return List(courses.valueSeq());
  }
);
