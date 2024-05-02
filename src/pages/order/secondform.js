import React from 'react';
// import  { useState, useEffect } from 'react';
//  import axios from 'axios';
import { Link } from 'react-router-dom';
import "./index.css"
function Secondform() {

  // const [status, setStatus] = useState('');
  // const [fname, setfName] = useState('');
  // const [mname, setmName] = useState('');
  // const [lname, setlName] = useState('');
  // const [state, setState] = useState('');
  // const [subCity, setSubCity] = useState('');
  // const [district, setDistrict] = useState('');
  // const [idNo, setIdNo] = useState('');
  // const [passportNo, setPassportNo] = useState('');
  // const [phone1, setPhone1] = useState('');
  // const [phone2, setPhone2] = useState('');
  // const [homeNo, setHomeNo] = useState('');
  // const [street, setStreet] = useState('');
  // const [postalCode, setPostalCode] = useState('');
  // const [zipCode, setZipCode] = useState('');

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   const data = {
    
  //     fname,
  //     mname,
  //     lname,
  //     state,
  //     subCity,
  //     district,
  //     idNo,
  //     passportNo,
  //     phone1,
  //     phone2,
  //     homeNo,
  //     street,
  //     postalCode,
  //     zipCode,
  //   };

  //   axios.post('/api/v1/users', data)
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  return (
    
      <section>
      <div className='f  '>
  
     
      <div className='z'>
        <div className='j'>
          <h1>Order</h1>
        </div>
        </div></div>
  <div>
    <h1> 
      Aggrement Form...
    </h1>
</div>
  <div>

  </div>
 
  <section class="h-100 h-custom bg gradient-custom-2 ">
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
  
                        <div class="form-outline">
                          <input type="text" id="form3Examplev2" class="" />
                          <label class="form-label" for="form3Examplev2">First name</label>
                        </div>
  
                      </div>
                      <div class="col-md-6 mb-4 pb-2">
  
                        <div class="form-outline">
                          <input type="text" id="form3Examplev3" class="" />
                          <label class="form-label" for="form3Examplev3">Last name</label>
                        </div>
  
                      </div>
                    </div>
  
                   
  
                    <div class="mb-4 pb-2">
                      <div class="form-outline">
                        <input type="text" id="form3Examplev4" class="" />
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
                      <div class="form-outline form-white">
                        <input type="text" id="form3Examplea2" class="" />
                        <label class="form-label" for="form3Examplea2">Street + Nr</label>
                      </div>
                    </div>
  
                    <div class="mb-4 pb-2">
                      <div class="form-outline form-white">
                        <input type="text" id="form3Examplea3" class="" />
                        <label class="form-label" for="form3Examplea3">Additional Information</label>
                      </div>
                    </div>
  
                    <div class="row">
                      <div class="col-md-5 mb-4 pb-2">
  
                        <div class="form-outline form-white">
                          <input type="text" id="form3Examplea4" class="" />
                          <label class="form-label" for="form3Examplea4">Zip Code</label>
                        </div>
  
                      </div><br/>
                      <div class="col-md-7 mb-4 pb-2">
  
                        <div class="form-outline form-white">
                          <input type="text" id="form3Examplea5" class="" />
                          <label class="form-label" for="form3Examplea5">Place</label>
                        </div>
  
                      </div>
                    </div>
  
                    <div class="mb-4 pb-2">
                      <div class="form-outline form-white">
                        <input type="text" id="form3Examplea6"  placeholder='country' />
                        <label class="form-label" for="form3Examplea6"></label>
                      </div>
                    </div>
  
                    <div class="row">
                      <div class="col-md-5 mb-4 pb-2">
  
                        <div class="form-outline form-white">
                          <input type="text" id="form3Examplea7" class="" />
                          <label class="form-label" for="form3Examplea7">Code +</label>
                        </div>
                            <br/>
                      </div>
                      <div class="col-md-7 mb-4 pb-1">
  
                        <div class="form-outline form-black">
                          <input type="text" id="form3Examplea8" class="" />
                          <label class="form-label" for="form3Examplea8">Phone Number</label>
                        </div>
  
                      </div>
                    </div>
  
                    <div class="mb-4">
                      <div class="form-outline form-black">
                        <input type="text" id="form3Examplea9" class="" />
                        <label class="form-label" for="form3Examplea9">Your Email</label>
                      </div>
                    </div>
  
                    <div class="form-check d-flex justify-content-start mb-4 pb-3">
                      <input class="form-check-input me-3" type="checkbox" value="" id="form2Example3c" />
                      <label class="form-check-label text-black" for="form2Example3">
                        I do accept the <a href="#!" class="text-black"><u>Terms and Conditions</u></a> of your
                        site.
                      </label>
                    </div>
  
                    {/* <button type="button" class="btn btn-light btn-lg"
                      data-mdb-ripple-color="dark">Register</button> */}
  <Link to ="slip" className='btn btn-warning shadow'>Register</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </section>

  );
}

export default Secondform;