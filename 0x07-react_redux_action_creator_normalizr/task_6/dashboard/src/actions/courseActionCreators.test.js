import { selectCourse, unSelectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

test('selectCourse action creator', () => {
  const action = selectCourse(1);
  expect(action).toEqual({ type: SELECT_COURSE, index: 1 });
});

test('unSelectCourse action creator', () => {
  const action = unSelectCourse(1);
  expect(action).toEqual({ type: UNSELECT_COURSE, index: 1 });
});
