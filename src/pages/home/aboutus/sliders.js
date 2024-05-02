
import React from 'react';
import slider1 from '../../../components/resources/images/photo_2023-03-07_05-37-19.jpg'
import slider2 from '../../../components/resources/images/photo_2023-03-07_05-37-37.jpg'
import slider3 from '../../../components/resources/images/l3.jpg'
function Slis(){
    return(
        <div id="carouselExampleFade" class="carousel slide carousel-fade">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={slider1}class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src={slider2}class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src={slider3} class="d-block w-100" alt="..."/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    )
}

export default Slis;