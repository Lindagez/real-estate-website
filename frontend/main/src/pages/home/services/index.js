import './servies.css';
import { Link } from 'react-router-dom';
import Guarantee from '../../../components/resources/images/guarantee.jpeg';
import Affordable from '../../../components/resources/images/affordable.png';
import CustomerCare from '../../../components/resources/images/care.jpg';

const OurServices = () => {
  const oldSection = () => (
    <section className='co'>
      <div id='services'>
        <div class='container'>
          <h1 class='sub-title'></h1>
          <div class='work-list'>
            <div>
              <div class='work1 c7'>
                <img src={<Guarantee />} />
                <div class=''>
                  <div className='flex justify-center mx-2'>
                    <p className='z-2'>Guarantee</p>
                  </div>
                  <div className='flex justify-content-end'>
                    <Link
                      to='/About'
                      className='fa-solid fa-up-right-from-square mb-3 mr-3'
                    >
                      {' '}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class='work1 c8 '>
                <img src={<Affordable />} />
                <div class='#'>
                  <div className='flex justify-center'>
                    <p className='z-2'>Affordable Price </p>
                  </div>
                  <div className='flex justify-content-end'>
                    <Link
                      to='/About'
                      className='fa-solid fa-up-right-from-square mb-3 mr-3'
                    >
                      {' '}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class='work1 c7'>
                <img src={<CustomerCare />} />
                <div class='#'>
                  <div className='flex justify-center'>
                    <p className='z-2'>Customer Care</p>
                  </div>
                  <div className='flex justify-content-end'>
                    <Link
                      to='/About'
                      className='fa-solid fa-up-right-from-square mb-3 mr-3'
                    >
                      {' '}
                    </Link>
                  </div>
                </div>
                <p> </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <section className='services-section mb-4'>
      <div className='mt-5'>
        <h1 className='text-dark fw-medium mb-5'>We Deliver</h1>
      </div>
      <div className='service-container'>
        <Link to={'/about'} className='service-cards'>
          <img src={Guarantee} alt='service' className='mb-2' />
          <h3>Guarantee</h3>
        </Link>
        <Link to={'/about'} className='service-cards'>
          <img src={Affordable} alt='service' className='mb-2' />
          <h3>Affordable</h3>
        </Link>
        <Link to={'/about'} className='service-cards'>
          <img src={CustomerCare} alt='service' className='mb-2' />
          <h3>24/7 Customer Care</h3>
        </Link>
      </div>
    </section>
  );
};

export default OurServices;
