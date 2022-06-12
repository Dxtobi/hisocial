import React from 'react';
//import { FaUser, FaPhone } from 'react-icons/fa';
import { MdEmail, MdPassword } from 'react-icons/md';
import { Link } from 'react-router-dom';

import './Auth.css';

function Login() {
  return (
    <div className='landing_page'>
      <div className='login-form'>
        <div className='small-login-info'>Start with 20 free likes</div>
        <div className='big-login-info'>Start from where you stopped<span className='full__stop1'>.</span></div>
        <div className='small-login-info'>No Account? <Link className='link-no-dec' to={'/register'}>Sign up</Link></div>

        <form className='form-auth'>
         
          <div className='input-div'>
            <label>Email</label>
            <div className='input-dive-input'>
              <input placeholder='joel@example.com' type='email' />
              <MdEmail size={30}/>
            </div>
          </div>
          <div className='input-div'>
            <label>Password</label>
            <div className='input-dive-input'>
              <input placeholder='password' type='password' />
              <MdPassword size={30}/>
            </div>
          </div>
        </form>
        <button className='input-btn-login'>Sign in</button>
      </div>
    </div>
  )
}

export default Login