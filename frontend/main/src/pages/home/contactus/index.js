import React from 'react';
import { useState, useEffect } from 'react';
import { sendMessage } from '../../../api/request';
import { showLoading, showSuccess, showError } from '../../../components/messages'

import './contact.css';
const Contactus = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = event => {
    setSuccess(false);
    setError(false);
    const { name, value } = event.target;
    setContactForm({ ...contactForm, [name]: value });
  };

  const handleSend = event => {
    event.preventDefault();
    setLoading(true);
    setError(false);
    setSuccess(false);
    sendMessage(contactForm).then(data => {
      setLoading(false);
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
          setContactForm({
            name: '',
            email: '',
            message: '',
          });
          setTimeout(() => {
            setSuccess(false);
          }, 10000);
          return setSuccess(message);
        }
      } else {
        setTimeout(() => {
          setError(false);
        }, 10000);
        return setError('Something went wrong!')
      }
    });
  };

  const ContactSection = () => (
    <section className='contact-section'>
      <div className='contact-container'>
        <h1 className='text-dark fw-medium'>Contact Us</h1>
        <form className='row w-100'>
          <div className='col-lg-6 col-sm-12 form-prop'>
            <label htmlFor='name' className='form-label'>
              Name
            </label>
            <input
              type='text'
              name='name'
              id='name'
              className='form-control'
              placeholder='Berry Alan'
              value={contactForm.name}
              onChange={handleChange}
            />
          </div>
          <div className='col-lg-6 col-sm-12 form-prop'>
            <label htmlFor='name' className='form-label'>
              Email
            </label>
            <input
              type='email'
              name='email'
              id='email'
              className='form-control'
              placeholder='berryalan12@gmail.com'
              value={contactForm.email}
              onChange={handleChange}
            />
          </div>
          <div className='col-12  form-prop'>
            <label htmlFor='name' className='form-label'>
              Your Message
            </label>
            <textarea
              name='message'
              id='message'
              rows='5'
              className='form-control'
              placeholder='I have seen your properties and ...'
              value={contactForm.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className='flex justify-center w-100'>
            <div className='col-lg-3 col-sm-12'>
              <button
                className='btn btn-primary mt-3 w-100'
                onClick={handleSend}
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );

  return (
    <>
      {showLoading(loading)}
      {showSuccess(success)}
      {showError(error)}
      {ContactSection()}
    </>
  );
};

export default Contactus;
