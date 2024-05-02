import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './signup.css';
import { signup, loginRequest } from '../../auth';
import { setToken } from '../../utils/tokenManager';
import { Alert } from '../../components/alert';

const PasswordStrengthIndicator = ({ password }) => {
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialCharacter = /[!@#$%^&*()_+\-=[\]{};':"|,.<>/?]/.test(
    password
  );

  const getColor = () => {
    if (password.length === 0) {
      return 'gray'; // Default color
    }
    if (password.length < 8) {
      return 'red'; // Weak password
    }
    if (
      password.length > 8 &&
      hasUppercase &&
      hasLowercase &&
      hasNumber &&
      hasSpecialCharacter
    ) {
      return 'green'; // Strong password
    }
    if (password.length >= 8) {
      return 'orange'; // Medium password
    }
  };
  const getPasswordStrength = () => {
    if (password.length <= 0) return '';
    if (password.length < 8 && password.length > 0) return 'Weak';
    if (
      password.length > 7 &&
      hasUppercase &&
      hasLowercase &&
      hasNumber &&
      hasSpecialCharacter
    )
      return 'Strong';
    if (password.length >= 8) return 'Good';
  };

  return <span style={{ color: getColor() }}>{getPasswordStrength()}</span>;
};

const Signup = ({ togglePage }) => {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [phone1, setPhone1] = useState('');
  const [city, setCity] = useState('');
  const [gender, setGender] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [enable, setEnable] = useState(true);

  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();

    if (!firstName) {
      setResponseMessage('First name is required');
      return;
    }
    if (!lastName) {
      setResponseMessage('last name is required');
      return;
    }
    if (!password) {
      setResponseMessage('password is required');
      return;
    }
    if (password !== confirmPassword) {
      setResponseMessage('Passwords do not match');
      return;
    }
    if (!phone) {
      setResponseMessage('phone is required');
      return;
    }

    if (!emailAddress) {
      setResponseMessage('Email is required');
      return;
    }
    if (!city) {
      setResponseMessage('City is required');
      return;
    }
    if (!state) {
      setResponseMessage('State is required');
      return;
    }
    if (!country) {
      setResponseMessage('country is required');
      return;
    }
    setLoading(true);
    signup({
      firstName,
      middleName,
      lastName,
      password,
      state,
      email: emailAddress,
      phone,
      gender,
      phone2: phone1,
      city,
      country,
    }).then(data => {
      setLoading(false);
      if (data !== undefined) {
        const { errors, error, success, message } = data;
        if (error) {
          return responseMessage(message);
        }
        if (errors) {
          return responseMessage(errors[0].msg);
        }
        if (success) {
          setSuccess(message);
          setLoading(true);
          loginRequest({ email: emailAddress, password })
            .then(data => {
              setLoading(false);
              if (data !== undefined) {
                const { status, accessToken, refreshToken, message, error } = data;
                if (error) {
                  if (message) {
                    return setResponseMessage(message);
                  }
                  return setResponseMessage(error);
                }
                if (status === 200) {
                  setToken(accessToken, refreshToken);
                  return window.location.href = '/';
                }
              }
            })
        }
      }
    });
  };

  const SignupSection = () => <section className='li-2 li-1 gradient-custom'>
      <div className='contair lii py-5 h-100'>
        <div
          className='row justify-content-center align-items-center h-100'
          style={{ marginTop: '50px' }}
        >
          <div className='col-12 col-lg-9 col-xl-7'>
            <div className='shadow-2-strong card-registration'>
              <div className='card-body js p-4 p-md-5'>
                <div className='w-100 flex flex-column align-items-center'>
                  <h2 className='text-primary'>Addis Hiwot Realestate</h2>
                  <h4 className='fw-semibold'>Sign up</h4>
                </div>
                {responseMessage && (
                  <p className='text-danger'>{responseMessage}</p>
                )}
                <form action='' onSubmit={handleSubmit} className='mt-4'>
                  <div className='row input-f'>
                    <div className='col-md-6 mb-4'>
                      <div className='e'>
                        <input
                          type='text'
                          name='first name'
                          id='firstName'
                          className='form-control form-control-lg input-f'
                          placeholder='First Name'
                          value={firstName}
                          required
                          onChange={e => setFirstName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className='col-md-6 mb-4'>
                      <div className='e'>
                        <input
                          type='text'
                          name='middle name'
                          id='middleName'
                          className='form-control form-control-lg input-f'
                          placeholder='Middle Name'
                          value={middleName}
                          required
                          onChange={e => setMiddleName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className='col-md-6 mb-4'>
                      <div className=''>
                        <input
                          type='text'
                          name='last name'
                          id='LastName'
                          className='form-control form-control-lg input-f'
                          placeholder='Last Name'
                          value={lastName}
                          onChange={e => setLastName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className='col-md-6 mb-4'>
                      <div className='e'>
                        <input
                          type='password'
                          name='password'
                          id='Password'
                          className='form-control form-control-lg'
                          value={password}
                          placeholder=' Password'
                          onChange={e => setPassword(e.target.value)}
                          required
                        />
                        <PasswordStrengthIndicator password={password} />
                      </div>
                    </div>
                    <div className='col-md-6 mb-4'>
                      <div className=''>
                        <input
                          type='password'
                          name='password'
                          id='comfirmpassword'
                          className='form-control form-control-lg'
                          placeholder='Comfirm Pasword'
                          value={confirmPassword}
                          onChange={e => setConfirmPassword(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className='col-md-6 mb-4'>
                      <div className='e'>
                        <input
                          type='tel'
                          name='phone'
                          id='phone'
                          className='form-control  form-control-lg'
                          value={phone}
                          placeholder='Phone'
                          onChange={e => setPhone(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className='col-md-6 mb-4'>
                      <div className=''>
                        <input
                          type='tel'
                          name='phone'
                          id='phone1'
                          className='form-control form-control-lg'
                          value={phone1}
                          placeholder='Phone 2'
                          onChange={e => setPhone1(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className='col-md-6 mb-4'>
                      <div className='e'>
                        <input
                          type='email'
                          name='email'
                          id='email'
                          className='form-control form-control-lg'
                          value={emailAddress}
                          placeholder='Email'
                          onChange={e => setEmailAddress(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className='col-md-6 mb-4'>
                      <div className=''>
                        <input
                          type='text'
                          name='city'
                          id='city'
                          className='form-control form-control-lg'
                          value={city}
                          placeholder='City'
                          onChange={e => setCity(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className='col-md-6 mb-4'>
                      <div className='e'>
                        <input
                          type='text'
                          name='state'
                          id='state'
                          className='form-control form-control-lg'
                          value={state}
                          placeholder='State'
                          onChange={e => setState(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className='col-md-6 mb-4'>
                      <div className=''>
                        <input
                          type='text'
                          name='country'
                          id='country'
                          className='form-control form-control-lg'
                          value={country}
                          placeholder='Country'
                          onChange={e => setCountry(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='lo pt-2'>
                    <button
                      href='/Login'
                      type='submit'
                      className='btn btn-primary rounded-5 login_butt text-white shadow-1 fw-medium'
                      onClick={handleSubmit}
                    >
                      Sign up
                    </button>
                    <div className='w-100 flex justify-center'>
                      <p className='f3 mr-2'>Already registered?</p>
                      <Link to={'/login'} className='f3'>
                        Sign in
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  return (
    <>
      {/* {success && <Alert message={success} type='success' />} */}
      {/* {responseMessage && <Alert message={responseMessage} type='error' />} */}
      {/* {responseMessage && Alert({ message: responseMessage, type: 'error' })} */}
      {success && Alert({ message: success })}
      {responseMessage && Alert({ message: responseMessage })}
      {!loading && SignupSection()}
    </>

  );
};
export default Signup;
