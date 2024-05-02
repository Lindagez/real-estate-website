import React from 'react';
import { getProperties } from '../../api/request';
import { Link } from 'react-router-dom';
import { useState, useEffect, state } from 'react';
import './index.css';
import { api } from '../../config';
import { showLoading } from '../../components/messages'

const Pricing = setId => {
  const [pricingData, setPricingData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const init = () => {
    getProperties().then(data => {
      if (data !== undefined) {
        setLoading(false);
        const { success, error, message, result } = data;
        if (message) {
          return setError(message);
        }
        if (error) {
          return setError(error);
        }
        if (success) {
          const filterResult = result.filter(r => r.status !== 'deleted');
          setPricingData(filterResult);
        }
      }
    });
  };
  useEffect(() => {
    init();
  }, []);

  const STRING_LIMIT = 150;
  const renderPricing = pricingData => {
    return pricingData.map((pricingItem, index) => (
      <div className='row pro-list-card' key={index}>
        <div className='col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0'>
          <div className='bg-image hover-zoom ripple rounded ripple-surface'>
            {pricingItem.images[0] !== undefined ? (
              <img
                src={`${api}/${pricingItem.images[0].imageUrl}`}
                className='w-100'
                alt='News'
              />
            ) : (
              <img src='' className='w-100' alt='Image not found' />
            )}
            <Link to={`/property/${pricingItem.id}`}>
              <div className='hover-overlay'>
                <div className='mask'></div>
              </div>
            </Link>
          </div>
        </div>
        <div className='col-md-6 col-lg-6 col-xl-6'>
          <span className='badge badge-dark rounded-pill d-inline px-2 mb-3'>
            {pricingItem.status}
          </span>
          <h4 className='mt-2 fw-bolder'>{pricingItem.name}</h4>
          <div className='flex'>
            <i className='fa-solid fa-location-dot mr-2'></i>
            <h6 className=''>{pricingItem.city}</h6>
          </div>
          <div className='flex'>
            <div className='mt-1 mb-0 text-muted mx-1'>
              <span>
                <i className='fa-solid fa-ruler mr-2'></i>
                {pricingItem.totalSize} Sq m
              </span>
            </div>
            <div className='mt-1 mb-0 text-muted mx-1'>
              <span>
                <i className='fa-solid fa-bed mr-2'></i>
                {pricingItem.noBedroom}
              </span>
            </div>
            <div className='mt-1 mb-0 text-muted mx-1'>
              <span>
                <i className='fa-solid fa-bath mr-2'></i>
                {pricingItem.noBathroom}
              </span>
            </div>
          </div>
          <p className='text-secondary'>{pricingItem.type}</p>
          <h4>Description</h4>
          <p className='mb-4 mb-md-0 w100'>
            {pricingItem.description.length > STRING_LIMIT
              ? pricingItem.description.slice(0, STRING_LIMIT) + '...'
              : pricingItem.description}
          </p>
        </div>
        <div className='col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start justify-content-between h-100'>
          <div>
            <div className='d-flex flex-row align-items-center mb-1'>
              <h4 className='mb-1 me-1'>ETB {pricingItem.price}</h4>
            </div>
            <h6 className='text-info'>Remaining {pricingItem.quantity}</h6>
          </div>
          <div className='d-flex flex-column mt-4'>
            <Link to={`/property/${pricingItem.id}`}>
              <button
                className='btn btn-primary btn-sm'
                type='button'
                id={pricingItem.id}
              >
                Detail
              </button>
            </Link>
          </div>
        </div>
      </div>
    ));
  };

  const renderPricing2 = pricingData => {
    return pricingData.map((pricingItem, index) => (
      <div key={index} className='row justify-content-center mb-3'>
        <div className='col-md-12 col-xl-10'>
          <div className='card shadow-0 border rounded-3'>
            <div className='card-body'>
              <div className='row'>
                <div className='col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0'>
                  <div className='bg-image hover-zoom ripple rounded ripple-surface'>
                    {pricingItem.images[0] !== undefined ? (
                      <img
                        src={`${api}/${pricingItem.images[0].imageUrl}`}
                        className='w-100'
                        alt='News'
                      />
                    ) : (
                      <img src='' className='w-100' alt='Image not found' />
                    )}
                    <Link to={`/pricing/${pricingItem.id}`}>
                      <div className='hover-overlay'>
                        <div className='mask'></div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className='col-md-6 col-lg-6 col-xl-6'>
                  <h5>{pricingItem.name}</h5>
                  <div className='mt-1 mb-0 text-muted'>
                    <span>{pricingItem.totalSize} square meters</span>
                  </div>
                  <h6>Description</h6>
                  <p className='mb-4 mb-md-0 w100'>
                    {pricingItem.description.length > STRING_LIMIT
                      ? pricingItem.description.slice(0, STRING_LIMIT) + '...'
                      : pricingItem.description}
                  </p>
                </div>
                <div className='col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start'>
                  <div className='d-flex flex-row align-items-center mb-1'>
                    <h4 className='mb-1 me-1'>ETB {pricingItem.price}</h4>
                  </div>
                  <h6 className='text-info'>
                    Remaining {pricingItem.quantity}
                  </h6>
                  <div className='d-flex flex-column mt-4'>
                    <Link to={`/pricing/${pricingItem.id}`}>
                      <button
                        className='btn btn-primary btn-sm'
                        type='button'
                        id={pricingItem.id}
                      >
                        Detail
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className='pro-list-container'>
      <div className='list-container  pt-3'>
        <div className='w-100 flex justify-content-start'>
          <h1 className='text-dark fw-medium'>Properties</h1>
        </div>
        <p className='text-info'>
          {pricingData.length}{' '}
          {pricingData.length < 2 ? 'Property' : 'Properties'}
        </p>
        {showLoading(loading)}
        {!loading && renderPricing(pricingData)}
      </div>
    </div>
  );
};

export default Pricing;
