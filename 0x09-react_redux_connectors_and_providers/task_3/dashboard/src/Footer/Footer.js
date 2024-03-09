import React, { useContext } from 'react';
import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';
import { connect } from 'react-redux';

function Footer() {
  return (
    <div className="App-footer">
      <p>Copyright {getFooterCopy(true)} - {getFullYear()}</p>
      {user.isLoggedIn && (
      <p>
          <a href="/contact">Contact us</a>
        </p>
    )}
    </div>
    );
}

const mapStateToProps = (state) => ({
  user: state.uiReducer,
});

export default connect(mapStateToProps)(Footer);
