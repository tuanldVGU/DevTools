import React from 'react';
import {connect} from 'react-redux';

const Topnav = props =>{
  return (
    <nav className="navbar is-white is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
        </div>
        <div className="navbar-end">
          <div className="navbar-item">

          </div>
          <div className="navbar-item">
            <div className="buttons">
              <button className="btn-close delete" onClick={props.logOut}></button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

const mapStateToProps = state => {
  return {
  };
}

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch({type: 'CER_LOGOUT'})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Topnav);