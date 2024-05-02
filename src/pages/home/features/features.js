import React from 'react'
import "./features.css"

import pp from "../../../components/resources/images/home-img.jpg"
import pa from "../../../components/resources/images/pic.jpg"
import  { useEffect,useRef } from 'react';

import backgroundImage from '../../../components/resources/images/properties-1.jpg';


const Features = () => {
  
  return (

    
    <div className='lpp k-1  sa'><section id="features" class="features ">
   
       
   
    <div class="container section-title" data-aos="fade-up">
      <h2><b>Features</b></h2>
      <p className='f-1'><br/><a href='About1'>About us</a><br/><a href='pricing'>Pricing</a>
      {/* <br/><a href='videos'>Videos</a> */}
      </p>
    </div>

    <div class="container">

      <div class="row gy-4 align-items-center features-item">
        <div class="col-lg-5 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
          <h3>Addis Hiwot Real estate development and plc</h3>
          {/* <p> */}
           {/* #######3 */}
          {/* </p> */}
          <a href="signup" class="btn btn-get-started">Get Started</a>
        </div>
        <div class="col-lg-7 order-1 order-lg-2 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="100">
    
        </div>
      </div>

      

    </div>

  </section></div>
  )
}

export default Features