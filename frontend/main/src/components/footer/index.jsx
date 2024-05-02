import React from 'react';
// import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import './index.css';
function Footer() {
  return (
    <section className='jj'>
      <footer className='text-center text-lg-start  jj text-muted'>
        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom jj'>
          <div className='me-5 z-9 d-none d-lg-block'>
            <span>Get connected with us on social networks:</span>
          </div>

          <div className='z-9'>
            <a href='' className='me-4 text-reset'>
              <i className='fab fa-facebook-f'></i>
            </a>
            <a href='' className='me-4 text-reset'>
              <i className='fab fa-twitter'></i>
            </a>
            <a href='' className='me-4 text-reset'>
              <i className='fab fa-google'></i>
            </a>
            <a href='' className='me-4 text-reset'>
              <i className='fab fa-instagram'></i>
            </a>
            <a href='' className='me-4 text-reset'>
              <i className='fab fa-linkedin'></i>
            </a>
            <a href='' className='me-4 text-reset'>
              <i className='fab fa-github'></i>
            </a>
          </div>
        </section>

        <section className='jj'>
          <div className='container text-center text-md-start mt-5'>
            <div className='row mt-3'>
              <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
                <h6 className='text-uppercase z-9 fw-bold mb-4'>
                  <i className='fas fa-gem me-3 z-9'></i>Addis Hiwot Real Estate
                  Development and Training Plc
                </h6>
                <p></p>
              </div>

              {/* <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
    
          <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" className="text-reset">33</a>
          </p>
          <p>
            <a href="#!" className="text-reset">33</a>
          </p>
          <p>
            <a href="#!" className="text-reset">V33</a>
          </p>
          <p>
            <a href="#!" className="text-reset">33</a>
          </p>
        </div> */}

              <div className='col-md-3 col-lg-2 col-xl-2 z-9 mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                <p>
                  <a href='pricing' className='text-reset'>
                    Pricing
                  </a>
                </p>
                <p>
                  <a href='About' className='text-reset'>
                    About
                  </a>
                </p>
                <p>
                  <a href='/' className='text-reset'>
                    Home
                  </a>
                </p>
                <p>
                  <a href='contactus' className='text-reset'>
                    FAQ
                  </a>
                </p>
              </div>

              <div className='col-md-4 z-9 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                <p>
                  <i className='fas fa-home me-3'></i> Addis Ababa,Yeka Subcity
                  KATEKS BLD
                </p>
                <p>
                  <i className='fas fa-envelope me-3'></i>{' '}
                  addishiwotrealestate@gmail.com
                </p>
                <p>
                  <i className='fas fa-phone me-3'></i> +251116686999
                </p>
                <p>
                  <i className='fas fa-print me-3'></i> +251960304530
                </p>
                <p>
                  <i className='fas fa-print me-3'></i> +251911842237
                </p>
                <p>
                  <i className='fas fa-print me-3'></i> +251941273427
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className='text-center p-4'>
          <div className='copyright z-9'>
            <p>Copyright@2023 Addis Hiwot Real Estate </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
export default Footer;
