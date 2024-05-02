import React from 'react';
import bld0 from '../../components/resources/images/bld2.jpg';
import bld from '../../components/resources/images/bld.jpeg';
import bld2 from '../../components/resources/images/b9.jpg';
import { useState } from 'react';
import Typed from 'react-typed';
const Landing = () => {
  const bgImg1 = `url(${bld0})`;
  const bgImg2 = `url(${bld})`;
  const bgImg3 = `url(${bld2})`;

  const strings = ['Real Estate', 'Development and Trading PLC.'];

  const typeSpeed = 100;
  const backSpeed = 80;
  const backDelay = 1500;

  return (
    <section>
      <div id='carouselExampleFade' className='carousel slide carousel-fade'>
        <div className='carousel-inner'>
          <div
            style={{ backgroundImage: bgImg1, minHeight: '100vh ' }}
            className='carousel-item active background-image'
          >
            <div className='h-screen-full flex justify-center item-center'>
              <div className='bg-overlay-black border-1 color-white p-2 text-center'>
                <h2>
                  <div className='f-extra'>Addis Hiwot</div>
                </h2>
                <h1 className=''>
                  <Typed
                    classes='multitext'
                    strings={strings}
                    loop={true}
                    typeSpeed={typeSpeed}
                    backSpeed={backSpeed}
                    backDelay={backDelay}
                  />
                </h1>
                <span>
                  <p className='f-description'>
                    We uncompromised a honesty and integrity and fairness
                  </p>
                </span>
              </div>
            </div>
            <div className='w3-display-topleft w3-container w3-padding-32'>
              <span className='w3-white w3-padding-large w3-animate-bottom'></span>
            </div>
          </div>

          <div
            style={{ backgroundImage: bgImg2, minHeight: '100vh ' }}
            className='carousel-item background-image'
          >
            <div className='h-screen-full flex justify-center item-center'>
              <div className='bg-overlay-black w-half text-center border-1 color-white'>
                <h2>
                  <div className='f-extra'>
                    Find a perfect home for your family
                  </div>
                </h2>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: bgImg3, minHeight: '100vh' }}
            className='carousel-item background-image'
          >
            <div className='h-screen-full flex justify-center item-center'>
              <div className='bg-overlay-black color-white w-half p-3 border-1 text-center'>
                <h2 className=''>
                  <div className='f-extra'>
                    Your dream home is just a click away
                  </div>
                </h2>
              </div>
            </div>
          </div>
        </div>

        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExampleFade'
          data-bs-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'></span>
        </button>

        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#carouselExampleFade'
          data-bs-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'></span>
        </button>
      </div>
    </section>
  );
};
export default Landing;
