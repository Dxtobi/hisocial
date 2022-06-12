import React, { useState } from 'react';
import { FaUser, FaPhone } from 'react-icons/fa';
import { MdEmail, MdPassword } from 'react-icons/md';
import { Link } from 'react-router-dom';

import './Auth.css';
import Select from './Select';

function Register() {
const [select, setSelect] = useState(true)


if(select){
   return <Select setSelect={setSelect}/>
}
  return (
    <div className='landing_page'>
      <div className='login-form'>
        <div className='small-login-info'>Start with 20 free likes</div>
        <div className='big-login-info'>Create New Account<div className='full__stop'/><div className='full__stop1'/></div>
        <div className='small-login-info'>Already have an account? <Link className='link-no-dec' to={'/login'}>Sign in</Link></div>

        <form className='form-auth'>
          <div className='input-div'>
            <label>Full Name</label>
            <div className='input-dive-input'>
              <input placeholder='Mick Joel' type='text' />
              <FaUser size={30}/>
            </div>
          </div>
          <div className='input-div'>
            <label>Email</label>
            <div className='input-dive-input'>
              <input placeholder='joel@example.com' type='email' />
              <MdEmail size={30}/>
            </div>
          </div>
          <div className='input-div'>
            <label>Phone</label>
            <div className='input-dive-input'>
              <input placeholder='+234' type='tel' />
              <FaPhone size={30}/>
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
        <button className='input-btn-login'>Sign up</button>
          </div>
          
    </div>
  )
}

export default Register