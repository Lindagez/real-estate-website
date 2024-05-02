import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginRequest } from '../../auth';
import { setToken } from '../../utils/tokenManager';
import './index.css';
import { showLoading } from '../../components/messages'

export default function Login(params) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setError(false);
    if (name === 'rememberMe') {
      return values.rememberMe === true ?
        setValues({ ...values, rememberMe: false }) :
        setValues({ ...values, rememberMe: true });
    }
    return setValues({ ...values, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    loginRequest(values)
      .then(data => {
        setLoading(false);
        if (data !== undefined) {
          const { status, accessToken, refreshToken, message, error } = data;
          if (error) {
            if (message) {
              return setError(message);
            }
            return setError(error);
          }
          if (status === 200) {
            setToken(accessToken, refreshToken);
            return window.location.href = '/';
          }
        }
      })
  };

  return (
    <div className='login-container'>
      {showLoading(loading)}
      <form className='login-form'>
        <div className='w-100 flex item-center flex-column'>
          <h2 className='text-primary'>Addis Hiwot Realestate</h2>
          <h4 className='fw-semibold'>Sign in</h4>
          <h6>Use your email</h6>
        </div>
        <div className='form-group mb-4'>
          <label className='form-label' htmlFor='form1Example1'>
            Email address
          </label>
          <input type='email' id='form1Example1' className='form-control' name='email' value={values.email} onChange={handleChange} />
        </div>

        <div className='form-group mb-4'>
          <label className='form-label' htmlFor='form1Example2'>
            Password
          </label>
          <input type='password' id='form1Example2' className='form-control' name='password' value={values.password} onChange={handleChange} />
        </div>

        <div className='row mb-4'>
          <div className='col d-flex justify-content-center'>
            <div className='form-check'>
              <input
                className='form-check-input'
                type='checkbox'
                value=''
                id='form1Example3'
                name='rememberMe'
                onChange={handleChange}
              />
              <label className='form-check-label' htmlFor='form1Example3'>
                Remember me
              </label>
            </div>
          </div>

          <div className='col'>
            <a href='#'>Forgot password?</a>
          </div>
        </div>

        <button type='submit' className='btn btn-primary btn-block rounded-5' onClick={handleSubmit}>
          Sign in
        </button>
        <div className='flex mt-2'>
          <p className='mr-2'>Don't have an account yet?</p>
          <Link to='/signup'>Sign up</Link>
        </div>
      </form>
    </div>
  );
}
