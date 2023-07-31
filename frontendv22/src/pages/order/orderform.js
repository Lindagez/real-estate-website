import React from 'react';
import  { useState, useEffect } from 'react';
//  import axios from 'axios';
import { Link } from 'react-router-dom';
import "./index.css";
import Languageoption from "../../components/language-dropdoown"
// import {  useNavigate } from 'react-router-dom';
import {useTranslation} from 'react-i18next'
import i18next from "i18next"
function Orderform() {

  // const [status, setStatus] = useState('');
  const [propertyId, setpropertyId] = useState('');
  const [passportNo, setpassportNo] = useState('');
  const [kebeleIdNo, setkebeleIdNo] = useState('');
  const [houseNo, sethouseNo] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  // const navigate = useNavigate();
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

  const handleSubmit = async (e) => {
    
    e.preventDefault();
  
    // if (!localStorage.getItem('accessToken')) {
     
    //   setResponseMessage('Please log in first.');
    //   return;
    // }
  
    try {
      console.log("sending data");
      const response = await fetch('https://apifinal.realestate.addishiwotbusiness.com/u/register', {
        method: 'POST',
        headers: {
          
          'Content-Type': 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiYWZmMDcyMzgtMjEyMy00MGJmLWE0ZDgtYzQyNWYyOWIxZDlkIn0sImlhdCI6MTY4OTg0OTMzMCwiZXhwIjoxNjg5OTM1NzMwfQ.LGaYnBkVY1qqDNlRgw2UglWEGS3XpzmudAQSIAWilKw'
            // 'Authorization': `Bearer ${token}`,
            // 'Authorization': `Bearer ${localStorage.setItem('accessToken')}`,
          },
          body: JSON.stringify({
            "propertyId": "1f4c6bca-93bd-44e9-805a-42e34fa774af",
            "passportNo": "9348uoksdnfas",
            "kebeleIdNo": "ijasodamskldasd",
            "houseNo": "3sdas"
        }),
        });
        console.log("data sent");
        if (response.ok) {
          console.log("okay!");
          
          const data = await response.json();
          console.log(data);
      
          setResponseMessage(data.message);
          // console.log('nagivating');
          // return navigate('/');
          // console.log('hello');
        } else {
          const error = await response.json();
          setResponseMessage(error.error);
        }
      } catch (error) {
        console.error('Error:', error);
        setResponseMessage(error.message);
      }
    };
    const {t} = useTranslation();
    const handleClick=(e)=>{
        i18next.changeLanguage(e.target.value)
    }
  return (
    
      <section>
      <div className='f  '>
  
     
      <div className='z'>
        <div className='j'>
          <h1>Form</h1>
        </div>
        </div></div>
  <div>
    <h1> 
      Aggrement Form...
    </h1>
</div>
  <div>

  </div>
 
  <section class="h-100 h-custom  gradient-custom-2 ">
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
                          <input type="text" id="form3Examplev2" placeholder='First Name' class="" />
                          <label class="form-label" for="form3Examplev2"></label>
                        </div><br/>
                        <div class="outline">
                          <input type="text" id="form3Examplev2" placeholder='Last Name' class="" />
                          <label class="form-label" for="form3Examplev2"></label>
                        </div>
                      </div>
                      <div class="col-md-6 mb-4 pb-2">
  
                        <div class="outline">
                          <input type="text" id="form3Examplev3" placeholder="Middle Name"class="" />
                          <label class="form-label" for="form3Examplev3"></label>
                        </div>
  
                      </div>
                    </div>
  
                   
  
                    <div class="mb-4 pb-2">
                      
                      <div class="outline">
                        <input type="text" id="form3Examplev4" placeholder='Email' class="" />
                        <label class="form-label" for="form3Examplev4"></label>
                      </div>
                    </div>
                    <div class="mb-4 pb-2">
                      <div class="outline">
                        <input type="text" id="form3Examplev4" placeholder="subcity" class="" />
                        <label class="form-label" for="form3Examplev4"></label>
                      </div>
                    </div>
                    <div class="mb-4 pb-2">
                      <div class="outline">
                        <input type="text" id="form3Examplev4" class="" placeholder='His/ Her Mother Name'/>
                        <label class="form-label" for="form3Examplev4"></label>
                      </div>
                    </div>
                    
  
                    <div class="row">
                      <div class="col-md-6 mb-4 pb-2 mb-md-0 pb-md-0">
  
                        <div class="outline">
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
                      
                      <div class="mb-4 pb-2">
                      <div class="outline">
                        <input type="text" id="form3Examplev4" class="" placeholder='Education Level'/>
                        <label class="form-label" for="form3Examplev4"></label>
                      </div>
                    </div>
                    <div class="mb-4 pb-2">
                      <div class="outline">
                        <input type="text" id="form3Examplev4" class="" placeholder=' Field  of   Study'/>
                        <label class="form-label" for="form3Examplev4"></label>
                      </div>
                    </div>
                    <div class="mb-4 pb-2">
                      <div class="outline">
                        <input type="text" id="form3Examplev4" class="" placeholder='The office where you work'/>
                        <label class="form-label" for="form3Examplev4"></label>
                      </div>
                    </div>
                    <div class="mb-4 pb-2">
                      <div class="outline">
                        <input type="text" id="form3Examplev4" class="" placeholder='The Institution where you came from'/>
                        <label class="form-label" for="form3Examplev4"></label>
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
                        <input type="text" id="form3Examplea2" class="" placeholder='Country'/>
                        <label class="form-label" for="form3Examplea2"></label>
                      </div>
                    </div>
  
                    <div class="mb-4 pb-2">
                      <div class="outline form-white">
                        <input type="text" id="form3Examplea3" class="" placeholder='city' />
                        <label class="form-label" for="form3Examplea3"></label>
                      </div>
                    </div>
  
                    <div class="row">
                      <div class=" mb-4 pb-2">
  
                        <div class="outline form-white">
                          <input type="text" id="form3Examplea4" class="" placeholder='sub-city' />
                          <label class="form-label" for="form3Examplea4"></label>
                        </div>
  
                      </div><br/>
                      <div class="mb-4 pb-2">
  
                        <div class="outline form-white">
                          <input type="text" id="form3Examplea5" class="" placeholder='District/woreda' />
                          <label class="form-label" for="form3Examplea5"></label>
                        </div>
  
                      </div>
                    </div>
  
                    <div class="mb-4 pb-2">
                      <div class="form-outline form-white">
                        <input type="text"  placeholder='Property Type'
                         id = 'propertyId'
                        value={propertyId}
                                              
                        onChange={(e) => setpropertyId(e.target.value)}
                        />
                        <label class="form-label" for="form3Examplea6"></label>
                      </div>
                    </div>
  
                    <div class="row">
                      <div class="mb-4 pb-2">
  
                        <div class="outline form-white">
                          <input type="text" id="form3Examplea7" class="" placeholder='Phone no1'/>
                          <label class="form-label" for="form3Examplea7"> </label>
                        </div>
                           
                      </div>
                      <div class="mb-4 pb-2">
  
                        <div class="outline form-black">
                          <input type="text" id="form3Examplea8" class="" placeholder='Phone no2'/>
                          <label class="form-label" for="form3Examplea8"></label>
                        </div>
  
                      </div>
                    </div>
  
                    <div class="mb-4">
                      <div class="form-outline form-black">
                        <input type="text" id="form3Examplea9" class="" placeholder='zip code'/>
                        <label class="form-label" for="form3Examplea9"></label>
                      </div>
                    </div>
                   < div class="mb-4">
                      <div class="form-outline form-black">
                        <input type="text" id="form3Examplea9" class="" placeholder='postal code'/>
                        <label class="form-label" for="form3Examplea9"></label>
                      </div>
                    </div>
                    < div class="mb-4">
                      <div class="form-black">
                        <input type="text" class="" placeholder='passportNo'
                          
                          id = 'passportNo'
                         value={passportNo}
                                               
                         onChange={(e) => setpassportNo(e.target.value)}
                         />
                      
                        <label class="form-label" for="form3Examplea9"></label>
                      </div>
                    </div>
                    < div class="mb-4">
                      <div class="form-black">
                        <input type="text" id="kebeleIdNo" class="" placeholder='kebeleIdNo'
                         
                         value={kebeleIdNo}
                                               
                         onChange={(e) => setkebeleIdNo(e.target.value)}
                        />
                        <label class="form-label" for="form3Examplea9"></label>
                      </div>
                      <div>
      
    </div>  

                    </div>
                    < div class="mb-4">
                      <div class=" form-black">
                        <input type="text" id="houseNo" class="" placeholder='houseNo'
                     
                         value={houseNo}
                                               
                         onChange={(e) => sethouseNo(e.target.value)}
                        />
                        {/* <label class="form-label" for="form3Examplea9"></label>
                        <Languageoption  onChange={(e)=> handleClick(e)}/>
                        <h1>{t('welcome')} {t('contact')}  {t('holiday')} Developer</h1> */}
                      </div>
                    </div>
                   <div> upload your photo <input type="file"  /><button >Upload</button>


                        {  /*  */}</div><br/>
                    <div class="form-check d-flex justify-content-start mb-4 pb-3">
                      <input class="form-check-input me-3" type="checkbox" value="" id="form2Example3c" />
                      <label class="form-check-label text-black" for="form2Example3">
                     
                        I do accept the <a href="#!" class="text-black"><u>Terms and Conditions</u></a> of your
                        site.
                      </label>
                    </div>
  
                    {/* <button type="button" class="btn btn-light btn-lg"
                      data-mdb-ripple-color="dark">Register</button> */}
                <a href='/'>    <button className='btn btn-warning shadow' onClick={ handleSubmit}>Register</button></a> 
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

export default  Orderform;