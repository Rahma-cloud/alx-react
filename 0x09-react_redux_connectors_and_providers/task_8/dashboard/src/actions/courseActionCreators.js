import { bindActionCreators } from 'redux';
import * as courseActionCreators from './courseActionCreators';

const { selectCourse, unSelectCourse } = courseActionCreators;

export const boundCourseActionCreators = bindActionCreators(
  { selectCourse, unSelectCourse },
  useDispatch()
);

export const fetchCourses = () => async (dispatch) => {
  try {
    const response = await fetch('/dist/courses.json');
    const data = await response.json();

    const boundSetCourses = bindActionCreators({ setCourses }, dispatch);
    boundSetCourses.setCourses(data);
  } catch (error) {
    console.error('Error fetching courses:', error);
  }
};
