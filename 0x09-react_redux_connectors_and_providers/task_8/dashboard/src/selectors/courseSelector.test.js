import { getAllCourses } from './courseSelector';
import { fromJS } from 'immutable';

describe('getAllCourses selector', () => {
  it('should return all courses as a List', () => {
    const state = fromJS({
      courses: {
        course1: { id: 'course1', title: 'Course 1' },
        course2: { id: 'course2', title: 'Course 2' },
      },
    });

    const result = getAllCourses(state);

    expect(result).toEqual(List([
      { id: 'course1', title: 'Course 1' },
      { id: 'course2', title: 'Course 2' },
    ]));
  });

});
