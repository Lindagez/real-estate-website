import { Link } from 'react-router-dom';
import './promo.css';

export default function Promo() {
  return (
    <section className='promo-section'>
      <div className='promo-container'>
        <div className='promo-container-adjusted'>
          <h1 className='promo-title'>Addis Hiwot Real Estate</h1>
          <h1 className='promo-headline'>
            Where dreams find a place to call home
          </h1>
          <div className='flex align-items-center column-later'>
            <h3 className='text-white mt-2 mr-3'>Secure Your Spot Today</h3>
            <Link to={'/property'}>
              <button className='btn  btn-primary fs-5 border-5'>Secure Now</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
