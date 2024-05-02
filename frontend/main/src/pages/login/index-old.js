import { useRef, useState, useEffect, useContext } from 'react';
import { Navigate, Link, useNavigate } from 'react-router-dom';
import AuthContext from "./authprovider";
import "./index.css"
import loginRequest from './request';
import { login } from '../../api/auth';
// import storage from '../../utils/storage';


function Login() {
  const [user, setuser] = useState('');
  const [pwd, setPwd] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const navigate = useNavigate()



  const handleSubmit = async (e) => {
    e.preventDefault();
    login({ email: user, password: pwd })
      .then(data => {
        if (data !== undefined) {
          const { status, accessToken, message, error } = data;
          if (status === 200) {
            localStorage.setItem("jwt", JSON.stringify(accessToken));
            return navigate('/');
          }
          else {
            if (message) {
              return responseMessage(message);
            }
            else {
              return responseMessage(error);
            }
          }
        }
      })
  };

  return (
    <>
      <section className='inputs_container b'>
        <div className='c'>
          {responseMessage && (
            <p>{responseMessage}</p>
          )}  <form>
            <h1 className='title'>Sign In to your account</h1>
            <p className="subtitle">please log by using email and password </p>
            <input
              type="text"
              id="username"
              placeholder='Email'
              onChange={(e) => setuser(e.target.value)}
              value={user}
              required
            />
            <input
              type="password"
              id="password"
              placeholder='********'
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
          </form>
          <div class="row mb-4">
            <div class="col-md-6 d-flex justify-content-center">
            </div>
            <div class="col-md-6 d-flex  justify-content-center">
              < a href='#'  >Forgot password?</a>
            </div>
          </div>
          <a href='/'>   <button type='submit' className='login_button' onClick={handleSubmit}>Sign In</button></a>
          <div class="row mb-4">
            <div class="col-md-6 d-flex justify-content-center">
            </div>
            <div class="text-center">
              <p>Not a member? <a href="/signup"><button >Register</button></a></p>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Login;
