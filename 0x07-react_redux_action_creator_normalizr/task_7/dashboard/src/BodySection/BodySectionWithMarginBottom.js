import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import BodySection from './BodySection';

class BodySectionWithMarginBottom extends React.Component {
    render() {
        const { title, children } = this.props;
        return (
            <div className={css(styles.bodySectionWithMargin)}>
                <BodySection title={title}>
                {children}
                </BodySection>
            </div>
        );
    };
};

const styles = StyleSheet.create({
    bodySectionWithMargin: {
        marginBottom: '40px',
    },
    
});

BodySectionWithMarginBottom.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ])
};

BodySectionWithMarginBottom. defaultProps = {
	children: <React.Fragment />
};
export default BodySectionWithMarginBottom;
