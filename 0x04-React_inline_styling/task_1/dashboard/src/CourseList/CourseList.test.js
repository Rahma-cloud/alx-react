import React from 'react';
import { shallow, mount, render } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types';

const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

describe('CourseList Component tests', () => {
  it('renders CourseList component without crashing', () => {
    const courseList = shallow(<CourseList />);
    expect(courseList).toBeDefined();
  });

  it('renders 5 different rows', () => {
    const courseList = shallow(<CourseList listCourses={listCourses} />);
    expect(courseList.find('CourseListRow')).toHaveLength(5);
  });
  it('renders correctly when listCourses is an empty array', () => {
    const courseList = shallow(<CourseList listCourses={[]} />);
    expect(courseList.find(CourseListRow)).toHaveLength(0);
  });

  it('renders correctly when listCourses is not passed as a prop', () => {
    const courseList = shallow(<CourseList />);
    expect(courseList.find(CourseListRow)).toHaveLength(0);
  });

  it('renders a list of courses correctly', () => {
    const courseList = shallow(<CourseList listCourses={listCourses} />);
    const renderedRows = courseList.find(CourseListRow);

    expect(renderedRows).toHaveLength(listCourses.length);

    renderedRows.forEach((row, index) => {
      const course = listCourses[index];
      expect(row.prop('textFirstCell')).toEqual(course.id.toString());
      expect(row.prop('textSecondCell')).toEqual(course.name);
      expect(row.prop('textThirdCell')).toEqual(course.credit.toString());
    });
  });
});
