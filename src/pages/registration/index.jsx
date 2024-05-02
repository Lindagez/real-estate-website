// import React, { useState } from 'react';
// import axios from 'axios';
// import "./index.css"
// const App = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [phone, setPhone] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [country, setCountry] = useState('');
//   const [state, setState] = useState('');
//   const [city, setCity] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const data = {
//       firstName,
//       lastName,
//       phone,
//       email,
//       password,
//       country,
//       state,
//       city,
//     };

//     try {
//       const response = await axios({
//         method: 'post',
//         url: 'https://api.axiom.co/auth/signup',
//         data,
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       if (response.status === 200) {
//         console.log('User created successfully!');
//       } else {
//         console.log('Error creating user:', response.status);
//       }
//     } catch (error) {
//       console.log('Error creating user:', error);
//     }
//   };

//   return (
//     <div className='card-registration form-control '>
//       <h1>Sign Up</h1>

//       <form onSubmit={handleSubmit}>
//         <div>
//           <label for="firstName">First Name</label>
//           <input
//             type="text"
//             id="firstName"
//             value={firstName}
//             onChange={(event) => setFirstName(event.target.value)}
//           />
//         </div>

//         <div>
//           <label for="lastName">Last Name</label>
//           <input
//             type="text"
//             id="lastName"
//             value={lastName}
//             onChange={(event) => setLastName(event.target.value)}
//           />
//         </div>

//         <div>
//           <label for="phone">Phone Number</label>
//           <input
//             type="text"
//             id="phone"
//             value={phone}
//             onChange={(event) => setPhone(event.target.value)}
//           />
//         </div>

//         <div>
//           <label for="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(event) => setEmail(event.target.value)}
//           />
//         </div>

//         <div>
//           <label for="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(event) => setPassword(event.target.value)}
//           />
//         </div>

//         <div>
//           <label for="country">Country</label>
//           <input
//             type="text"
//             id="country"
//             value={country}
//             onChange={(event) => setCountry(event.target.value)}
//           />
//         </div>

//         <div>
//           <label for="state">State</label>
//           <input
//             type="text"
//             id="state"
//             value={state}
//             onChange={(event) => setState(event.target.value)}
//           />
//         </div>

//         <div>
//           <label for="city">City</label>
//           <input
//             type="text"
//             id="city"
//             value={city}
//             onChange={(event) => setCity(event.target.value)}
//           />
//         </div>

//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// };
import React from 'react';
// import axios from 'axios';
import { useState } from 'react';
import "./index.css"
const Registration = () => {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      firstName,
      middleName,
      lastName,
      phone,
      email,
      password,
      country,
      state,
      city,
    };
    

  //   try {
  //     const response = await axios({
  //       method: 'post',
  //       url: 'https://api.axiom.co/auth/signup',
  //       data,
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });

  //     if (response.status === 200) {
  //       console.log('User created successfully!');
  //     } else {
  //       console.log('Error creating user:', response.status);
  //     }
  //   } catch (error) {
  //     console.log('Error creating user:', error);
  //   }
  };

  return (
    <section class="h-100 h-custom bg gradient-custom-2 li">
    <div className="container py-5 h-100">
      <div className="row d-flex bg justify-content-center align-items-center h-100">
        <div className="col-12">
          <div className=" card-registration card-registration-2" >
            <div className="card-body p-0">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="p-5">
                    <h3 className="fw-normal mb-5" >General Infomation</h3>
  
                    
                    <div class="row">
                      <div class="col-md-6 mb-4 pb-2">
  
                        <div class="outline">
                          <input type="text" id="form3Examplev2" class="form-control form-control-lg" />
                          <label class="form-label" for="form3Examplev2">First name</label>
                        </div>
  
                      </div>
                      <div class="col-md-6 mb-4 pb-2">
  
                        <div class="outline">
                          <input type="text" id="form3Examplev3" class="form-control form-control-lg" />
                          <label class="form-label" for="form3Examplev3">Last name</label>
                        </div>
  
                      </div>
                    </div>
  
                   
  
                    <div class="mb-4 pb-2">
                      <div class="outline">
                        <input type="text" id="form3Examplev4" class="form-control form-control-lg" />
                        <label class="form-label" for="form3Examplev4">Position</label>
                      </div>
                    </div>
  
                    <div class="row">
                      <div class="col-md-6 mb-4 pb-2 mb-md-0 pb-md-0">
  
                        <div class="form-outline">
                        <div class="d-md-flex justify-content-start align-items-center mb-4 py-2">

<h6 class="mb-0 me-4">Gender: </h6>

<div class="form-check form-check-inline mb-0 me-4">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
    value="option1" />
  <label class="form-check-label" for="femaleGender">Female</label>
</div>

<div class="form-check form-check-inline mb-0 me-4">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
    value="option2" />
  <label class="form-check-label" for="maleGender">Male</label>
</div>

<div class="form-check form-check-inline mb-0">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
    value="option3" />
  <label class="form-check-label" for="otherGender">Other</label>
</div>

</div>

                        </div>
  
                      </div>
                    
                    </div>
  
                  </div>
                </div>
                <div class="col-lg-6 bg text-black la">
                  <div class="p-5">
                    <h3 class="fw-normal mb-5">Contact Details</h3>
  
                    <div class="mb-4 pb-2">
                      <div class="outline form-white">
                        <input type="text" id="form3Examplea2" class="form-control form-control-lg" />
                        <label class="form-label" for="form3Examplea2">Street + Nr</label>
                      </div>
                    </div>
  
                    <div class="mb-4 pb-2">
                      <div class="outline form-white">
                        <input type="text" id="form3Examplea3" class="form-control form-control-lg" />
                        <label class="form-label" for="form3Examplea3">Additional Information</label>
                      </div>
                    </div>
  
                    <div class="row">
                      <div class="col-md-5 mb-4 pb-2">
  
                        <div class="outline form-white">
                          <input type="text" id="form3Examplea4" class="form-control form-control-lg" />
                          <label class="form-label" for="form3Examplea4">Zip Code</label>
                        </div>
  
                      </div>
                      <div class="col-md-7 mb-4 pb-2">
  
                        <div class="outline form-white">
                          <input type="text" id="form3Examplea5" class="form-control form-control-lg" />
                          <label class="form-label" for="form3Examplea5">Place</label>
                        </div>
  
                      </div>
                    </div>
  
                    <div class="mb-4 pb-2">
                      <div class="outline form-white">
                        <input type="text" id="form3Examplea6" class="form-control form-control-lg" />
                        <label class="form-label" for="form3Examplea6">Country</label>
                      </div>
                    </div>
  
                    <div class="row">
                      <div class="col-md-5 mb-4 pb-2">
  
                        <div class="outline form-white">
                          <input type="text" id="form3Examplea7" class="form-control form-control-lg" />
                          <label class="form-label" for="form3Examplea7">Code +</label>
                        </div>
  
                      </div>
                      <div class="col-md-7 mb-4 pb-2">
  
                        <div class="outline form-white">
                          <input type="text" id="form3Examplea8" class="form-control form-control-lg" />
                          <label class="form-label" for="form3Examplea8">Phone Number</label>
                        </div>
  
                      </div>
                    </div>
  
                    <div class="mb-4">
                      <div class="outline form-white">
                        <input type="text" id="form3Examplea9" class="form-control form-control-lg" />
                        <label class="form-label" for="form3Examplea9">Your Email</label>
                      </div>
                    </div>
  
                    <div class="form-check d-flex justify-content-start mb-4 pb-3">
                      <input class="form-check-input me-3" type="checkbox" value="" id="form2Example3c" />
                      <label class="form-check-label text-white" for="form2Example3">
                        I do accept the <a href="#!" class="text-white"><u>Terms and Conditions</u></a> of your
                        site.
                      </label>
                    </div>
  
                    <button type="button" class="btn btn-light btn-lg"
                      data-mdb-ripple-color="dark">Register</button>
  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )}
  export default Registration