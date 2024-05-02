import { useState } from 'react';
import { login } from '../api/auth';
import { showLoading, adminError } from '../components/messages';
import { setToken } from '../utils/tokenManager';
export default function Login({ setPage }) {
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = event => {
    setError(false);
    setLoading(false);
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleClick = event => {
    event.preventDefault();
    setLoading(true);
    setError(false);
    const { email, password } = data;
    if (email === '' || password === '') {
      setLoading(false);
      return setError('Please provide credentials');
    }
    login(data).then(res => {
      setLoading(false);
      const { status, errors, message, accessToken, refreshToken } = res;
      if (errors) {
        return setError(errors[0].msg);
      }
      if (status !== 200) {
        setError(message);
      } else {
        setToken(accessToken, refreshToken);
        window.location.reload();
        setPage('admin');
      }
    });
  };

  return (
    <>
      <div
        className='position-absolute top-50 start-50 translate-middle'
        style={{ zIndex: '999' }}
      >
        {showLoading(loading)}
      </div>
      <form
        className='row my-row d-flex justify-content-center align-items-center px-5 my-px-5'
        style={{ height: '100vh', backgroundColor: '#3C2A21' }}
      >
        {adminError(error)}
        <div className='card my-card col-xl-4 col-lg-6 col-sm-12 my-card pt-5 pb-5 px-5 rounded-9'>
          <h3 className='mb-4'>Sign in to Admin Panel</h3>
          <div className='form-group mb-4'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              value={data.email}
              className='form-control'
              onChange={handleChange}
            />
          </div>
          <div className='form-group mb-4'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              name='password'
              value={data.password}
              onChange={handleChange}
              className='form-control'
            />
          </div>
          <button
            type='submit'
            className='btn btn-primary btn-block'
            onClick={handleClick}
          >
            Sign in
          </button>
        </div>
      </form>
    </>
  );
}
