import { selectCourse, unSelectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetchCourses action creator', () => {
  it('should fetch courses and dispatch setCourses action', async () => {
    const expectedCourses = [
      { id: 'course1', title: 'Course 1' },
      { id: 'course2', title: 'Course 2' },
    ];

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(expectedCourses),
      })
    );

    const store = mockStore({});

    await store.dispatch(fetchCourses());

    const actions = store.getActions();
    expect(actions[0]).toEqual(setCourses(expectedCourses));
    expect(actions[0].type).toEqual(SET_COURSES);
  });
});

test('selectCourse action creator', () => {
  const action = selectCourse(1);
  expect(action).toEqual({ type: SELECT_COURSE, index: 1 });
});

test('unSelectCourse action creator', () => {
  const action = unSelectCourse(1);
  expect(action).toEqual({ type: UNSELECT_COURSE, index: 1 });
});

