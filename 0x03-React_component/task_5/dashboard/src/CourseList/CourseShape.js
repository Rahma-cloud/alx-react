import PropTypes from 'prop-types';

const CourseShape = PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.isRequired,
    credit: PropTypes.number.isRequired

});

export default CourseShape;
