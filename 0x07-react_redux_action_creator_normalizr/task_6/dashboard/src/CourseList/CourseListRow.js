import React, { Component }from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  row: {
    backgroundColor: '#f5f5f5ab'
  },
  header: {
    backgroundColor: '#deb5b545'
  }
})

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  if (isHeader) {
    return (
      <tr>
        {textSecondCell === null ? (
          <th colSpan={2}>{textFirstCell}</th>
        ) : (
          <>
            <th className={css(styles.header)}>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </>
        )}
      </tr>
    );
  } else {
    return (
      <tr className={isChecked ? css(styles.row, styles.rowChecked) : css(styles.row)}>
      <td>
        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
        {textFirstCell}
      </td>
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
