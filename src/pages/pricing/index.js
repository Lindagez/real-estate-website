import React from "react";
// import { pricing } from "../../components/data";
import { getProperties } from "../../api/request";
import { Link } from 'react-router-dom'
import { useState,useEffect,state } from "react";

import im from "../../components/resources/images/properties-1.jpg";
import im2 from "../../components/resources/images/home-img.jpg";
import im3 from "../../components/resources/images/bld2.jpg";
import im4 from "../../components/resources/images/pic.jpg";
import "./index.css"

import { api } from '../../config';

// import { handleClick } from '../pricing';


const Pricing = (setId) => {

  const [pricingData, setPricingData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  // const [success, setSuccess] = useState(false);
  // const [search, setSearch] = useState('');
  // const [searchFilter, setSearchFilter] = useState('none');
  // const [filterResult, setFilterResult] = useState([]);
  // useEffect(async () => {
  //   const data = await fetch("https://api.realestate.addishiwotbusiness.com/p/list" 
  //   ,{method:'GET'}
  //   );

  //   setPricingData(data);
  // }, []);

  
  const init = () => {
    getProperties().then(data => {
      if (data !== undefined) {
        setLoading(false);
        if (data.error) {
          return setError('Something went wrong!');
        } else {
          const { success, error, message, result } = data;
          console.log(result);
          setPricingData(result);
          if (error) {
            return setError(message);
          }
          
        }
      }
    });
  };
  const handleClick = event => {
    const { id } = event.target;
    
    setId(id);
  };
  useEffect(() => {
    init();
  }, []);
  
  const STRING_LIMIT = 150;
  const renderPricing = (pricingData) => {
    return pricingData.map((pricingItem, index) => {
      return (
        <div key={index} className="row justify-content-center mb-3">
          <div class="col-md-12 col-xl-10">
            <div class="card shadow-0 border rounded-3">
              <div class="card-body">
                <div class="row" >
                  <div class="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                    <div class="bg-image hover-zoom ripple rounded ripple-surface">
                      {/* <img src={pricingItem.image[0]
                    &&  `${api}/${pricingItem.images[0].imageUrl}`  
                    }
                        class="w-100"
                        alt='News'
                        /> */}
                        <img src= {im}
                        class="w-100"
                        />
                      <a href={`${api}${pricingItem.id}`
                    
                  }>
                        <div class="hover-overlay">
                          <div class="mask"></div>
                        </div>
                      </a>
                    </div>
                 
                  </div>
                  <div class="col-md-6 col-lg-6 col-xl-6">
                    <h5>{pricingItem.name}</h5>
                    <div className='mt-1 mb-0 text-muted small'>
                      <span>{pricingItem.size} square meters</span>
                    </div>
                    <h6>Description</h6>
                            <p className='mb-4 mb-md-0 w100'>
                              {pricingItem.description.length > STRING_LIMIT
                                ? pricingItem.description.slice(0, STRING_LIMIT) + '...'
                                : pricingItem.description}
                            </p></div>
                        
                  <div class="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                    <div class="d-flex flex-row align-items-center mb-1">
                      <h4 class="mb-1 me-1">ETB{pricingData.pricing}</h4>
                      {/* <span class="text-danger"><s>$20.99</s></span> */}
                    </div>
                    <h6 className='text-info'>
                              Remaining {pricingItem.quantity}
                            </h6>
                    {/* <h6 class="text-success">Free shipping</h6> */}
                    <div class="d-flex flex-column mt-4">
                    <Link to={`/pricing/${pricingItem.id}`}>
                    
                    <button
                                // onClick={handleClick}
                                className='btn btn-primary btn-sm'
                                type='button'
                                id={pricingItem.id}
                              >detail</button>
                    
                    </Link>
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
        <div className='f  '>
         <div className='z'>
      <div className='j'>
        <h1>pricing</h1>
      </div>
      </div></div>
      {renderPricing(pricingData)}
    </div>
  );
}

export default Pricing;
