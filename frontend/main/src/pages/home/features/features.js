import React from 'react';
import './features.css';
import { Link } from 'react-router-dom';

const Features = () => {
  return (
    <div className='lpp k-1  sa'>
      <section id='features' className='features feature-overlay'>
        <div className='flex flex-column justify-content-center h-full ml-5'>
          <h1 className='text-white fw-medium flex'>Features</h1>
          <Link to={'/property'}>
            <h3 className='text-white fw-bolder'>Tour our properties</h3>
          </Link>
          <Link to={'/news'}>
            <h3 className='text-white fw-bolder'>Get latest news</h3>
          </Link>
          <Link to={'/videos'}>
            <h3 className='text-white fw-bolder'>Videos</h3>
          </Link>
          <div className='flex align-items-center column-later'>
            <h3 className='text-white fw-bold'>Join Addis Hiwot Now</h3>
            <Link to={'/signup'}>
              <button className='btn btn-primary fs-5'>Join Now</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
