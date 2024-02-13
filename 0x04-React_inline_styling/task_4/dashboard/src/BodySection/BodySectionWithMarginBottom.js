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
        marginLeft: '60px',
        display: 'flex',
        flexDirection: 'row',
    },
    
});

BodySectionWithMarginBottom.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
};

export default BodySectionWithMarginBottom;
