import { bindActionCreators } from 'redux';
import * as courseActionCreators from './courseActionCreators';

const { selectCourse, unSelectCourse } = courseActionCreators;

export const boundCourseActionCreators = bindActionCreators(
  { selectCourse, unSelectCourse },
  useDispatch()
);
