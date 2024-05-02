// import React from 'react';
// import {
//   MDBCarousel,
//   MDBCarouselItem,
// } from 'mdb-react-ui-kit';
// import img1 from '../../../components/resources/images/home-img.jpg';
// import img2 from '../../../components/resources/images/properties-1.jpg';
// import img3 from '../../../components/resources/images/properties-1.jpg';
// export default function Home() {
//   return (
//     <MDBCarousel showIndicators showControls fade>
//       <MDBCarouselItem
//         className='w-100 d-block '
//         itemId={1}
//         src={img1}
//         alt='...'
//       >
//         <h5 className='a'>First slide label</h5>
//         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//       </MDBCarouselItem>

//       <MDBCarouselItem
//         className='w-100 d-block'
//         itemId={2}
//         src={img2}
//         alt='...'
//       >
//         <h5 className='a'>Second slide label</h5>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//       </MDBCarouselItem>

//       <MDBCarouselItem
//         className='w-100 d-block a'
//         itemId={3}
//         src={img3}
//         alt='...'
//       >
//         <h5>Third slide label</h5>
//         <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//       </MDBCarouselItem>
//     </MDBCarousel>
//   );
// }


import React from 'react';
import ab from "../../../components/resources/images/bld2.jpg"
import bld from "../../../components/resources/images/bld.jpeg"
import bld2 from "../../../components/resources/images/b9.avif"
import log from "../../../components/resources/images/logo.jpg"
import "./index.css"
import bc from "../../../components/resources/images/logo.jpg"
import  { useState } from 'react';
import Typed from 'react-typed';
const IndexHeader= () => {
  const bgImg1 = `url(${ab})`
  const bgImg2 = `url(${bld})`
  const bgImg3 = `url(${bld2})`

  const [strings, setStrings] = useState([
   "Addis Hiwot Real Estate",
  
   "Development and Trading PLC."
 
  ]);

  const typeSpeed = 100;
  const backSpeed = 80;
  const backDelay = 1500;
return(
 <section>
  

  <div id="carouselExampleFade" class="carousel slide carousel-fade ">
  <div class="carousel-inner">
  
    <div class="carousel-item active">
      <div style={{backgroundImage: bgImg1, minHeight: '100vh'}} className='l-1 l-7'>
<div className=''>
{/* <div class="logo"><img src={bc} alt="My Logo" width="70" height="70"/> */}
   <b>.</b>
<p>
<b>

</b>
</p></div>
<div>
      {/* <div className='b-5 d-8 b-7'><p> */}
      {/* <div>
      <Typed
        classes="multitext"
        strings={strings}
        loop={true}
        typeSpeed={typeSpeed}
        backSpeed={backSpeed}
        backDelay={backDelay}
      />
    </div> */}
   
      {/* Addis Hiwot Real Estate Development and Trading Pvt.  */}
        {/* </p> */}
        </div></div>
      {/* <img src={ab}class="d-block w-100" alt="..."/> */}
      <div class="w3-display-topleft w3-container w3-padding-32">
        <span class="w3-white w3-padding-large w3-animate-bottom"></span>
      </div>
    </div>
    <div class="spli ">
  <div class="centered ">
    <img src="" alt=" "/></div><div className='centere'>
    <h2> <div className='z-1'>
      <Typed
        classes="multitext"
        strings={strings}
        loop={true}
        typeSpeed={typeSpeed}
        backSpeed={backSpeed}
        backDelay={backDelay}
      />
    </div></h2>
   
 
  <span><p className='z-8'>We uncompromised a honesty and integrity and fairness</p></span>
    
  </div>
 
  {/* <p className='z-8'>We uncompromised a honesty and integrity and fairness</p> */}
  </div>

    <div class="carousel-item">
    <div style={{backgroundImage: bgImg2, minHeight: '100vh '}} className='b-6 l-7 '>
<div className='b-7'>
<p>
<b>

</b>
</p></div>
    
      <div  className='cen'><p>
      {/* Find the perfect home for your family. */}
        </p></div></div>
      {/* <img src={bld}class="d-block w-100" alt="..."/> */}
      <div class="w3-display-topleft w3-container w3-padding-32">
        <span class="w3-white w3-padding-large w3-animate-bottom"></span>
      </div>
    </div>
    <div class="carousel-item">
    <div style={{backgroundImage: bgImg3, minHeight: '100vh'}} className='b-6'>
<div className='b-7'>
<p>
<b>

</b>
</p></div>
    
      <div className='cen'><p>
      Your dream home is just a click away.
        </p></div></div>
      {/* <img src={bld2} class="d-block w-100" alt="..."/> */}
      <div class="w3-display-topleft w3-container w3-padding-32">
        <span class="w3-white w3-padding-large w3-animate-bottom"></span>
      </div>
    </div>
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden"></span>
  </button>
  {/* <div class="spli lef">
  <div class="centered">
    <img src="log" alt=" "/>
    <h2>Addis Hiwot</h2>
    <p>Addis Hiwot</p>
  </div>
</div> */}
</div>


</section>
 
  );
};

export default IndexHeader;



{/* <div class="w3-container">
    <div class="w3-display-container mySlides">
      <img src="/w3images/coffee.jpg" style="width:100%">
      <div class="w3-display-topleft w3-container w3-padding-32">
        <span class="w3-white w3-padding-large w3-animate-bottom">Lorem ipsum</span>
      </div>
    </div>
    <div class="w3-display-container mySlides">
      <img src="/w3images/workbench.jpg" style="width:100%">
      <div class="w3-display-middle w3-container w3-padding-32">
        <span class="w3-white w3-padding-large w3-animate-bottom">Klorim tipsum</span>
      </div>
    </div>
    <div class="w3-display-container mySlides">
      <img src="/w3images/sound.jpg" style="width:100%">
      <div class="w3-display-topright w3-container w3-padding-32">
        <span class="w3-white w3-padding-large w3-animate-bottom">Blorum pipsum</span>
      </div>
    </div>

    <!-- Slideshow next/previous buttons -->
    <div class="w3-container w3-dark-grey w3-padding w3-xlarge">
      <div class="w3-left" onclick="plusDivs(-1)"><i class="fa fa-arrow-circle-left w3-hover-text-teal"></i></div>
      <div class="w3-right" onclick="plusDivs(1)"><i class="fa fa-arrow-circle-right w3-hover-text-teal"></i></div>
    
      <div class="w3-center">
        <span class="w3-tag demodots w3-border w3-transparent w3-hover-white" onclick="currentDiv(1)"></span>
        <span class="w3-tag demodots w3-border w3-transparent w3-hover-white" onclick="currentDiv(2)"></span>
        <span class="w3-tag demodots w3-border w3-transparent w3-hover-white" onclick="currentDiv(3)"></span>
      </div>
    </div>
  </div> */}