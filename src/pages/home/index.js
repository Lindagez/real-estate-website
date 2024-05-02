// import React from 'react'
// import Slider from '../../components/header/home1'
import { Link } from 'react-router-dom'
import Vmc from './vmc';
import service1 from "../../components/resources/images/home-img.jpg"
// import Property from './property';
import "./index.css"
import IndexHeader from './Headers/IndexHeader';
import Contactus from '../contactus';
import Properties from './properties';

import Licence1 from './licence1';
import About1 from './aboutus';
import Features from './features/features';
import Stock from './stock marcket/stock';
import Vmc1 from './vmc1/vmc';
// import Stock from './vmc1/vmc';



function Home() {
    return (
        <div>
            <section className='sec'>
                <IndexHeader />
            </section>

            {/* <Property /> */}
            {/* <Property/> */}
            <section>
                {/* <h1 className='text-align : center'> services</h1> */}
                <Properties />

            </section>
            <section className="sect">
                <div className='d-container'>
                    <div>
                        <h1 className='fo'><b>About us</b></h1>

                        <div>
                            <div className='sml'>
                                <p><b>Addis Hiwot Real Estate Development and Trading Pvt.
                                    Limited Company is a sister Company of Eric Eriksson Business Plc.
                                    that has 17 years’ work experience in the real estate development
                                    industries since December 2005. This company has started its primary
                                    investment tasks in Adama Town in developing real estate. With this experience,
                                    Addis Hiwot Real Estate Development and Trading Pvt. </b></p>
                            </div>

                            <div className=''
                            style={{display: "flex", justifyContent: "space-between"}}
                            >
                                <div></div>
                                <Link to="/About" className='btn btn-warning shadow'>Read More</Link>
                            </div>

                        </div>
                        {/* <Link to ="/" className='btn btn-warning shadow'>read more</Link> */}
                    </div>
                </div>



            </section>
   
            <Licence1 />
            {/* <Vmc /> */}
            {/* <Stock/> */}
          <Vmc1/>
            <Stock />
            <Features />
            <Contactus />
            {/* our services  */}
        </div>


    )
}

export default Home;