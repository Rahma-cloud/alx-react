import React, { useEffect} from 'react';
import { StyleSheet, css } from 'aphrodite';
import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types'
import CourseShape from './CourseShape';
import { connect } from 'react-redux';
import { getListCourses } from '../selectors/courseSelector';
import { fetchCourses, selectCourse, unSelectCourse } from '../actions/courseActionCreators';

const CourseList = ({ listCourses, fetchCourses, selectCourse, unSelectCourse }) => {
  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  const onChangeRow = (id, checked) => {
    if (checked) {
      selectCourse(id);
    } else {
      unSelectCourse(id);
    }
  };

  return (
    <table id="CourseList" className={css(styles.table)}>
      <thead className={css(styles.th)}>
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
      </thead>
      <tbody>
      {listCourses.length > 0 ? (
          listCourses.map(({ id, name, credit, isSelected }) =>
          <CourseListRow key={id} textFirstCell={name} textSecondCell={credit}
          isChecked={isSelected} onChangeRow={(checked) => onChangeRow(id, checked)}/>)
        ) : (
          <CourseListRow textFirstCell="No course available yet" />
        )}
      </tbody>
    </table>
  );
};

const styles = StyleSheet.create({
  table: {
    marginTop: '2em',
    width: '100%',
    border: '1px solid #ddd',
    fontSize: '1.2rem',
    marginBottom: '15em',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  
  th: {
    borderBottom: '1px solid #ddd',
    width: '80%',
  },
  
  td: {
    width: '80%',
  },
  
  tr: {
    textAlign: 'left',
  },

});

CourseList.PropTypes = {
  listCourses: PropTypes.arrayOf(PropTypes.object),
  fetchCourses: PropTypes.func.isRequired,
  selectCourse: PropTypes.func.isRequired,
  unSelectCourse: PropTypes.func.isRequired,
};

CourseList.defaultProps = {
  listCourses: [],
};

const mapStateToProps = (state) => ({
  listCourses: getListCourses(state),
});

const mapDispatchToProps = {
  fetchCourses,
  selectCourse,
  unSelectCourse,
};

export default connect(mapDispatchToProps, mapStateToProps)(CourseList);
