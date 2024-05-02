import React, { useState, useEffect, state } from 'react';
import { useLocation } from 'react-router-dom';
import './pricing.css';
import { getPropertyById, sendForm } from '../../../api/request';
import { api } from '../../../config';
import { showError, showLoading, showSuccess } from '../../../components/messages'

export default function SelectedProperty() {
  const [pricingItem, setPricingItem] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const { pathname } = useLocation();
  const pathList = pathname.split('/');
  const id = pathList[pathList.length - 1];

  const ADDIS_HIWOT_PHONE = '251960077672'

  const init = () => {
    getPropertyById(id).then(data => {
      setLoading(false);
      if (data !== undefined) {
        const { success, error, message, result } = data;
        if (message) {
          return setError(message);
        }
        if (error) {
          return setError(error);
        }
        if (success) {
          if (result !== undefined) {
            return setPricingItem(result);
          }
        }
      }
    });
  };
  useEffect(() => {
    init();
  }, []);

  const handleFormChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value })
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setSending(true);
    sendForm(formData)
      .then(data => { 
        setError(false);
        setSuccess(false);
        setSending(false);
        if (data !== undefined) {
          const { error, success, message } = data;
          if (error) {
            setTimeout(() => {
              setError(false);
            }, 10000);
            return setError(message);
          }
          if (!success) {
            setTimeout(() => {
              setError(false);
            }, 10000);
            return setError('Something went wrong!')
          }
          if (success) {
            setFormData({
              name: '',
              email: '',
              phone: '',
              message: '',
            });
            setTimeout(() => {
              setSuccess(false);
            }, 10000);
            return setSuccess(message);
          }
        }
      })
  }

  const handlePhoneCall = (event) => {
    event.preventDefault();
    window.open(`tel:${ADDIS_HIWOT_PHONE}`, '_parent'); 
  }

  const handleWhatAppCall = (event) => {
    event.preventDefault();
    window.open(`whatsapp://send?phone=${ADDIS_HIWOT_PHONE}&text=${formData.message}`, '_blank', 'rel=noopener noreferrer')
  }

  const PricingPage = () => (
    <div className='container-wrapper'>
      <div className='property-container'>
        <div className='pro-head'>
          <div className='pro-title'>
            <h2>{pricingItem.name}</h2>
            <h2>ETB {pricingItem.price}</h2>
          </div>
          <div className='location flex'>
            <i className='fa-solid fa-location-dot mr-2'></i>
            <h6 className='text-secondary'>
              {pricingItem.city}, {pricingItem.country}
            </h6>
          </div>
        </div>
        {pricingItem.images.length > 0 && (
          <div
            id='carouselExampleCaptions'
            className='carousel slide pro-images'
          >
            <div className='carousel-indicators'>
              {pricingItem.images.map((image, index) => (
                <button
                  key={index}
                  type='button'
                  data-bs-target='#carouselExampleCaptions'
                  data-bs-slide-to={index}
                  className='active'
                  aria-current='true'
                  aria-label={`Slide ${index + 1}`}
                ></button>
              ))}
            </div>
            <div className='carousel-inner'>
              {pricingItem.images.map((image, index) => (
                <div
                  key={index}
                  className={
                    index === 0 ? 'carousel-item active' : 'carousel-item'
                  }
                >
                  <img
                    src={`${api}/${image.imageUrl}`}
                    className='d-block w-100'
                    alt='...'
                  />
                  <div className='carousel-caption d-none d-md-block'>
                    <h1 className='note note-light text-dark'>{image.description}</h1>
                  </div>
                </div>
              ))}
            </div>
            <button
              className='carousel-control-prev'
              type='button'
              data-bs-target='#carouselExampleCaptions'
              data-bs-slide='prev'
            >
              <span
                className='carousel-control-prev-icon'
                aria-hidden='true'
              ></span>
              <span className='visually-hidden'>Previous</span>
            </button>
            <button
              className='carousel-control-next'
              type='button'
              data-bs-target='#carouselExampleCaptions'
              data-bs-slide='next'
            >
              <span
                className='carousel-control-next-icon'
                aria-hidden='true'
              ></span>
              <span className='visually-hidden'>Next</span>
            </button>
          </div>
        )}

        <div className='pro-other'>
          <div className='pro-scrollable'>
            <div className='info-section'>
              <div className='info-title'>
                <h3 className='fw-semibold'>Overview</h3>
              </div>
              <div className='info-content'>
                <div>
                  <h5 className='fw-semibold'>{pricingItem.type}</h5>
                  <p>Property Type</p>
                </div>
                <div>
                  <div className='flex'>
                    <i className='fa-solid fa-bed mr-2'></i>
                    <h5 className='fw-semibold'>{pricingItem.noBedroom}</h5>
                  </div>
                  <p>Bedroom</p>
                </div>
                <div>
                  <div className='flex'>
                    <i className='fa-solid fa-bath mr-2'></i>
                    <h5 className='fw-semibold'>{pricingItem.noBathroom}</h5>
                  </div>
                  <p>Bathroom</p>
                </div>
                <div>
                  <div className='flex'>
                    <i className='fa-solid fa-car mr-2'></i>
                    <h5 className='fw-semibold'>{pricingItem.noGarage}</h5>
                  </div>
                  <p>Garage</p>
                </div>
                <div>
                  <div className='flex'>
                    <i className='fa-solid fa-ruler mr-2'></i>
                    <h5 className='fw-semibold'>{pricingItem.totalSize}</h5>
                  </div>
                  <p>Sq meter</p>
                </div>
                <div>
                  <div className='flex'>
                    <i className='fa-solid fa-calendar-days mr-2'></i>
                    <h5 className='fw-semibold'>{pricingItem.buildYear}</h5>
                  </div>
                  <p>Year Build</p>
                </div>
              </div>
            </div>

            <div className='info-section'>
              <div className='info-title'>
                <h3 className='fw-semibold'>Description</h3>
              </div>
              <div className='info-content'>
                <p>{pricingItem.description}</p>
              </div>
            </div>

            <div className='info-section'>
              <div className='info-title'>
                <h3 className='fw-semibold'>Details</h3>
              </div>
              <div className='info-content'>
                <div className='row w-100'>
                  <div className='col-lg-6 col-sm-12'>
                    <ul className='list-group list-group-light w-100'>
                      <li className='list-group-item d-flex justify-content-between align-items-center'>
                        <div>
                          <div className='fw-bold'>Price</div>
                        </div>
                        <span className=''>ETB {pricingItem.price}</span>
                      </li>

                      <li className='list-group-item d-flex justify-content-between align-items-center'>
                        <div>
                          <div className='fw-bold'>Bedroom</div>
                        </div>
                        <span className=''>{pricingItem.noBedroom}</span>
                      </li>
                      <li className='list-group-item d-flex justify-content-between align-items-center'>
                        <div>
                          <div className='fw-bold'>Bathroom</div>
                        </div>
                        <span className=''>{pricingItem.noBathroom}</span>
                      </li>
                      <li className='list-group-item d-flex justify-content-between align-items-center'>
                        <div>
                          <div className='fw-bold'>Garage</div>
                        </div>
                        <span className=''>{pricingItem.noGarage}</span>
                      </li>
                      <li className='list-group-item d-flex justify-content-between align-items-center'>
                        <div>
                          <div className='fw-bold'>Year Build</div>
                        </div>
                        <span className=''>{pricingItem.buildYear}</span>
                      </li>
                    </ul>
                  </div>
                  <div className='col-lg-6 col-sm-12'>
                    <ul className='list-group list-group-light w-100'>
                      <li className='list-group-item d-flex justify-content-between align-items-center'>
                        <div>
                          <div className='fw-bold'>Property Size</div>
                        </div>
                        <span className=''>
                          {pricingItem.totalSize} Sq meter
                        </span>
                      </li>
                      <li className='list-group-item d-flex justify-content-between align-items-center'>
                        <div>
                          <div className='fw-bold'>Living Room Size</div>
                        </div>
                        <span className=''>
                          {pricingItem.livingroomSize} Sq meter
                        </span>
                      </li>
                      <li className='list-group-item d-flex justify-content-between align-items-center'>
                        <div>
                          <div className='fw-bold'>Bedroom Size</div>
                        </div>
                        <span className=''>
                          {pricingItem.bedroomSize} Sq meter
                        </span>
                      </li>
                      <li className='list-group-item d-flex justify-content-between align-items-center'>
                        <div>
                          <div className='fw-bold'>Bathroom Size</div>
                        </div>
                        <span className=''>
                          {pricingItem.bathroomSize} Sq meter
                        </span>
                      </li>
                      <li className='list-group-item d-flex justify-content-between align-items-center'>
                        <div>
                          <div className='fw-bold'>Garage Size</div>
                        </div>
                        <span className=''>{pricingItem.garageSize}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className='info-section'>
              <div className='info-title'>
                <h3 className='fw-semibold'>Address</h3>
              </div>
              <div className='info-content'>
                <div className='row w-100'>
                  <div className='col-lg-6 col-sm-12'>
                    <ul className='list-group list-group-light w-100'>
                      <li className='list-group-item d-flex justify-content-between align-items-center'>
                        <div>
                          <div className='fw-bold'>Address</div>
                        </div>
                        <span className=''>{pricingItem.address}</span>
                      </li>
                      <li className='list-group-item d-flex justify-content-between align-items-center'>
                        <div>
                          <div className='fw-bold'>City</div>
                        </div>
                        <span className=''>{pricingItem.city}</span>
                      </li>
                      <li className='list-group-item d-flex justify-content-between align-items-center'>
                        <div>
                          <div className='fw-bold'>Sub City</div>
                        </div>
                        <span className=''>{pricingItem.subCity}</span>
                      </li>
                    </ul>
                  </div>
                  <div className='col-lg-6 col-sm-12'>
                    <ul className='list-group list-group-light w-100'>
                      <li className='list-group-item d-flex justify-content-between align-items-center'>
                        <div>
                          <div className='fw-bold'>State/Region</div>
                        </div>
                        <span className=''>{pricingItem.state}</span>
                      </li>
                      <li className='list-group-item d-flex justify-content-between align-items-center'>
                        <div>
                          <div className='fw-bold'>Zip/Postal Code</div>
                        </div>
                        <span className=''>{pricingItem.zipCode}</span>
                      </li>
                      <li className='list-group-item d-flex justify-content-between align-items-center'>
                        <div>
                          <div className='fw-bold'>Country</div>
                        </div>
                        <span className=''>{pricingItem.country}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='pro-fixed'>
            <div className='pro-form'>
              {showError(error)}
              {showSuccess(success)}
              {showLoading(sending)}
              <form action='' className='form-group'>
                <h3 className='form-element'>Contact Us</h3>
                <input
                  type='text'
                  name='name'
                  id=''
                  placeholder='Name'
                  className='form-control form-element'
                  value={formData.name}
                  onChange={handleFormChange}
                />
                <input
                  type='email'
                  name='email'
                  id=''
                  placeholder='Email'
                  className='form-control form-element'
                  value={formData.email}
                  onChange={handleFormChange}
                />
                <input
                  type='tel'
                  name='phone'
                  id=''
                  placeholder='Phone'
                  className='form-control form-element'
                  value={formData.phone}
                  onChange={handleFormChange}
                />
                <textarea
                  name='message'
                  className='form-control form-element'
                  placeholder='Hello, I am interested in ...'
                  value={formData.message}
                  onChange={handleFormChange}
                ></textarea>
                <button className='btn btn-primary col-12 pt-3 pb-3 mb-2' onClick={handleFormSubmit}>
                  Send Message
                </button>
                <div className='row'>
                  <div className='col-6'>
                    <button className='btn btn-outline-primary w-100' onClick={handlePhoneCall}>
                      Call
                    </button>
                  </div>
                  <div className='col-6'>
                    <button className='btn btn-outline-primary w-100' onClick={handleWhatAppCall}>
                      WhatApp
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return <div>
    {showLoading(loading)}
    {!loading && PricingPage()}
  </div>;
}
