import React, { Component }from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  row: {
    backgroundColor: '#f5f5f5ab'
  },
  header: {
    backgroundColor: '#deb5b545'
  },
});

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  const rowStyle = isHeader ? styles.header : styles.row;

  if (isHeader) {
    return (
      <tr>
        {textSecondCell === null ? (
          <th colSpan={2} className={css(rowStyle)}>
            {textFirstCell}
          </th>
        ) : (
          <>
            <th className={css(rowStyle)}>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </>
        )}
      </tr>
    );
  } else {
    return (
      <tr>
        <td className={css(styles.row)}>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </tr>
    );
  }
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
