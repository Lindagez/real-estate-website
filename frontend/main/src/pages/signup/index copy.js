import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./signup.css";
const PasswordStrengthIndicator = ({ password }) => {
  const getColor = () => {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialCharacter = /[!@#$%^&*()_+\-=[\]{};':"|,.<>/?]/.test(
      password
    );

    if (password.length === 0) {
      return "gray";
    }
    if (password.length <= 6) {
      return "red";
    }
    if (password.length <= 8) {
      return "orange";
    }
    if (
      password.length > 8 &&
      hasUppercase &&
      hasLowercase &&
      hasNumber &&
      hasSpecialCharacter
    ) {
      return "green";
    } else {
      return "gray";
    }
  };

  return password.length > 0 ? (
    <div>
      <div
        style={{
          width: "80px",
          height: "10px",
          fontSize: "8px",
          backgroundColor: getColor(),
          marginTop: "5px",
        }}
      ></div>
    </div>
  ) : null;
};
const Signup = ({ togglePage }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [phone1, setPhone1] = useState("");
  const [city, setCity] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setResponseMessage("Passwords do not match");
      return;
    }

    try {
      console.log("sending data");
      const response = await fetch(
        "https://api.realestate.addishiwotbusiness.com/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: emailAddress, password }),
        }
      );
      console.log("data sent");
      if (response.ok) {
        console.log("okay!");
        const data = await response.json();
        console.log(data);

        setResponseMessage(data.message);

        togglePage();
      } else {
        const error = await response.json();
        setResponseMessage(error.error);
      }
    } catch (error) {
      console.error("Error:", error);
      setResponseMessage(error.message);
    }
  };
  return (
    <section class="li-2 li-1 gradient-custom">
      <div class="contair lii py-5 h-100">
        <div class="row justify-content-center align-items-center h-100" style={{marginTop: "50px"}}>
          <div class="col-12 col-lg-9 col-xl-7">
            <div class="shadow-2-strong card-registration">
              <div class="card-body js p-4 p-md-5">
                <h3 class="mb-4 pb-2 pb-md-0 lo mb-md-5">Signup</h3>
                {responseMessage && <p>{responseMessage}</p>}
                <form action="" onSubmit={handleSubmit}>
                  <div class="row input-f">
                    <div class="col-md-6 mb-4">
                      <div class="e">
                        <input
                          type="text"
                          id="firstName"
                          class="form-control form-control-lg input-f"
                          placeholder="First Name"
                          value={firstName}
                          required
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="">
                        <input
                          type="text"
                          id="LastName"
                          class="form-control form-control-lg input-f"
                          placeholder="Last Name"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="e">
                        <input
                          type="password"
                          id="Password"
                          class="form-control form-control-lg"
                          value={password}
                          placeholder=" Password"
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                        <PasswordStrengthIndicator password={password} />
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="">
                        <input
                          type="password"
                          id="comfirmpassword"
                          class="form-control form-control-lg"
                          placeholder="Comfirm Pasword"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                      </div>
                    </div>

                    <div class="col-md-6 mb-4">
                      <div class="e">
                        <input
                          type="tel"
                          id="phone"
                          class=" form-control-lg"
                          value={phone}
                          placeholder="Phone"
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="">
                        <input
                          type="tel"
                          id="phone1"
                          class=" form-control-lg"
                          value={phone1}
                          placeholder="Phone1"
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="e">
                        <input
                          type="email"
                          id="email"
                          class="form-control form-control-lg"
                          value={emailAddress}
                          placeholder="Email"
                          onChange={(e) => setEmailAddress(e.target.value)}
                        />
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="">
                        <input
                          type="text"
                          id="country"
                          class="form-control form-control-lg"
                          value={city}
                          placeholder="City"
                          onChange={(e) => setCity(e.target.value)}
                        />
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="e">
                        <input
                          type="text"
                          id="country"
                          class="form-control form-control-lg"
                          value={country}
                          placeholder="state"
                          onChange={(e) => setCountry(e.target.value)}
                        />
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="">
                        <input
                          type="text"
                          id="country"
                          class="form-control form-control-lg"
                          value={country}
                          placeholder="Country"
                          onChange={(e) => setCountry(e.target.value)}
                        />
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div className=""></div>
                    </div>

                    <div class="col-md-6 lo mb-4"></div>
                  </div>
                  <div class="mt-4 lo   pt-2">
                    <a>
                      <button
                        href="/Login"
                        type="submit"
                        className="login_butt"
                        onClick={handleSubmit}
                      >
                        Sign In
                      </button>
                    </a>
                    <p className="f3">
                      {/* <Link to ="slip" className='btn btn-warning shadow'>Register</Link>  */}
                      Already registered?
                      <span className="line  ">
                        <a href="/Login" className="">
                          SignIn
                        </a>
                      </span>
                      {/* <button className="" onClick={togglePage}>
                             Login here
        </button> */}
                    </p>
                  </div>
                  {/* <button >Sign Up</button> */}
                  {/* disabled={!validName || !validPwd || !validMatch ? true : false} */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Signup;
