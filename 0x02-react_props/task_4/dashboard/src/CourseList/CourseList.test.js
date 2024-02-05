import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';

describe('CourseList Component tests', () => {
  it('renders CourseList component without crashing', () => {
    const courseList = shallow(<CourseList />);
    expect(courseList).toBeDefined();
  });

  it('renders 5 different rows', () => {
    const courseList = shallow(<CourseList />);
    expect(courseList.find('CourseListRow')).toHaveLength(5);
  });
});
