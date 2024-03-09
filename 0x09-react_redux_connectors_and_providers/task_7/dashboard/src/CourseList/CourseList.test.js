import React from 'react';
import { shallow, mount, render } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { getListCourse } from '../selectors/courseSelector';
import { fetchCourses, selectCourse, unSelectCourse } from '../actions/courseActionCreators';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

jest.mock('../selectors/courseSelector', () => ({
  getListCourses: jest.fn(),
}));

jest.mock('../actions/courseActionCreators', () => ({
  fetchCourses: jest.fn(),
  selectCourse: jest.fn(),
  unSelectCourse: jest.fn(),
}));

describe('CourseList Component tests', () => {
  let wrapper;
  let store;

  beforeEach(() => {
    store = mockStore({
      listCourses,
    });
    getListCourses.mockReturnValue(listCourses);

    wrapper = mount(
      <Provider store={store}>
        <CourseList />
      </Provider>
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('renders CourseList component without crashing', () => {
    const courseList = shallow(<CourseList />);
    expect(courseList).toBeDefined();
  });

  it('renders different rows based on the listCourses length', () => {
    const courseList = shallow(<CourseList listCourses={listCourses} />);
    expect(courseList.find('CourseListRow')).toHaveLength(listCourses.length);
  });
  it('renders correctly when listCourses is an empty array', () => {
    store = mockStore({
      listCourses: [],
    });
    getListCourses.mockReturnValue([]);

    wrapper = mount(
      <Provider store={store}>
        <CourseList />
      </Provider>
    );

    expect(wrapper.find(CourseListRow)).toHaveLength(0);
  });

  it('renders correctly when listCourses is not passed as a prop', () => {
    store = mockStore({
      listCourses: [],
    });
    getListCourses.mockReturnValue([]);

    wrapper = mount(
      <Provider store={store}>
        <CourseList />
      </Provider>
    );

    expect(wrapper.find(CourseListRow)).toHaveLength(0);

  });

  it('renders a list of courses correctly', () => {
    const renderedRows = wrapper.find(CourseListRow);

    expect(renderedRows).toHaveLength(listCourses.length);

    renderedRows.forEach((row, index) => {
      const course = listCourses[index];
      expect(row.prop('textFirstCell')).toEqual(course.name);
      expect(row.prop('textSecondCell')).toEqual(course.credit);
    });
  });

  it('dispatches fetchCourses action on mount', () => {
    expect(fetchCourses).toHaveBeenCalledTimes(1);
  });

  it('dispatches selectCourse or unSelectCourse action when onChangeRow is called', () => {
    const instance = wrapper.find(CourseList).instance();
    instance.onChangeRow('course1', true);

    expect(selectCourse).toHaveBeenCalledWith('course1');

    instance.onChangeRow('course1', false);
    expect(unSelectCourse).toHaveBeenCalledWith('course1');
  });
});
