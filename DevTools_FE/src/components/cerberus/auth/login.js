import React, {useState} from 'react';
import {connect} from 'react-redux';

const LoginCerberus = props => {

  const maxfieldLength = 50; 
  const [user,setUser]= useState("");
  const [pass,setPass]= useState("");
  let intro = {
    svg: '/logo/Cerberus_logo_black.svg',
    name: 'cerberus'
  };

  const validateForm = () => {
    let validUser = user.length > 0;
    let validPass = pass.length > 0;
    return validUser && validPass;
  }

  const handleSubmit = event => {
    event.preventDefault();
    props.logIn(user);
  } 

  return (
    <div className="login">
      <div className="intro">
          <h2 className="subtitle">THE NEW ERA OF</h2>
          <h1 className="title">TEST MANAGEMENT</h1>
      </div>
      <form id="login" className="loginForm" onSubmit={handleSubmit}>
        <div className="brand">
          <img src={process.env.PUBLIC_URL + intro.svg} alt="" width="100px"/>
          <span>CERBERUS</span>
        </div>
        <h1 className="form-title">SIGN IN</h1>
        <div className="field">
          <div className="control">
            <input 
              type="text" 
              name="user"
              className="input" 
              placeholder="Username" 
              maxLength={maxfieldLength} 
              value={user}
              onChange={e => setUser(e.target.value)}/>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input 
              type="password"
              name="pass"
              className="input" 
              placeholder="Password"
              maxLength={maxfieldLength} 
              value={pass}
              onChange={e => setPass(e.target.value)}/>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button className="button is-medium is-fullwidth" type='submit' disabled={!validateForm()}></button>
          </div>
        </div>
      </form>
    </div> 
    );
}
const mapStateToProps = state => {
  return {
    isAuthenticated: state.isAuthenticated
  };
} 

const mapDispatchToProps = dispatch => {
  return {
    logIn: (user) => dispatch({type: 'CER_LOGIN', value:user})
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(LoginCerberus);
