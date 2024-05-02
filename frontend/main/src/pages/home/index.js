import { Link } from 'react-router-dom'
import "./home1.css"
import "./home.css"
import IndexHeader from './landing';
import Contactus from './contactus';
import Properties from './properties';
import OurServices from './services';
import ComingSoonProperties from './upcomingProperties'
import Promo from './promo';
import Features from './features/features';
import Stock from './stock marcket/stock';
import Vmc1 from './vmc1/vmc';



function Home() {
    return (
        <div>
            <IndexHeader />
            <Properties />
            <OurServices />
            <ComingSoonProperties />
            <Promo />
            <section className="sect">
                <div className='d-container'>
                    <div className='mx-5'>
                        <h1 className='fo mt-4'><b>About Us</b></h1>
                        <div>
                            <div className='sml'>
                                <p className='text-justify'><b>Addis Hiwot Real Estate Development and Trading Pvt.
                                    Limited Company is a sister Company of Eric Eriksson Business Plc.
                                    that has 17 years’ work experience in the real estate development
                                    industries since December 2005. This company has started its primary
                                    investment tasks in Adama Town in developing real estate. With this experience,
                                    Addis Hiwot Real Estate Development and Trading Pvt. </b></p>
                            </div>
                            <div className='flex justify-content-end'>
                                <Link to="/About" className='btn btn-warning text-dark'>Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Vmc1 />
            {/* <Stock /> */}
            <Features />
            <Contactus />
        </div>


    )
}

export default Home;