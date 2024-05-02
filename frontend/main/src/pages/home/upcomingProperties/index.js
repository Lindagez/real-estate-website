import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './upcoming.css';
import { getProperties } from '../../../api/request';
import { api } from '../../../config';

const Cards = () => {
  const [properties, setProperties] = useState([]);

  const init = () => {
    getProperties().then(data => {
      if (data !== undefined) {
        const { success, error, message, result } = data;
        if (error) {
          return;
        }
        if (success) {
          const filterResult = result.filter(
            r => r.status.toLowerCase() === 'coming soon'
          );
          if (filterResult.length > 3) {
            setProperties(filterResult.splice(0, 3));
          } else {
            setProperties(filterResult);
          }
        }
      }
    });
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <section className='pro-section'>
      <div>
        <h1 className='text-dark fw-medium mb-5'>Coming Soon</h1>
      </div>
      <div className='pro-row'>
        {properties.map((p, i) => (
          <div className='pro-card' key={i}>
            <div className='pro-card-img'>
              <Link to={'property'}>
                {p.images && p.images[0] && (
                  <img
                    src={`${api}/${p.images[0].imageUrl}`}
                    className='w-100'
                    alt='property-image'
                  />
                )}
                {!p.images[0] && <img src='' alt='property-image' />}
              </Link>
            </div>
            <div className='pro-card-content'>
              <Link to={'property'}>
                <h4 className='mb-1'>{p.name}</h4>
              </Link>
              <div className='flex mb-1'>
                <i className='fa-solid fa-location-dot mr-2 pro-text-mute'></i>
                <p className='pro-text-mute mb-0'>{p.address}</p>
                {','}
                <p className='pro-text-mute ml-1 mb-0'>{p.country}</p>
              </div>
              <div className='flex mb-1'>
                <div className='mt-1 mb-0 text-muted mx-1'>
                  <span>
                    <i className='fa-solid fa-bed mr-2'></i>
                    {p.noBedroom}
                  </span>
                </div>
                <div className='mt-1 mb-0 text-muted mx-1'>
                  <span>
                    <i className='fa-solid fa-bath mr-2'></i>
                    {p.noBathroom}
                  </span>
                </div>
                <div className='mt-1 mb-0 text-muted mx-1'>
                  <span>
                    <i className='fa-solid fa-ruler mr-2'></i>
                    {p.totalSize} Sq meter
                  </span>
                </div>
              </div>
              <p className='fw-medium mb-1'>{p.type}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
