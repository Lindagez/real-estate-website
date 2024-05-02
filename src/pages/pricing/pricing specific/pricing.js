import React from "react";
import { useState, useEffect, state } from "react";
import { useLocation } from "react-router-dom";
// import "./pricing.css"
import Slis from "./sliders";
// import aa from "../../../components/resources/images/home-img.jpg"
import { Link } from "react-router-dom";
import Slid from "./sliders";
import "./pricing.css";
import { login } from "../../../api/auth";
import { getPropertyById } from "../../../api/request";
const Pricingspe = () => {
  const [pricingData, setPricingData] = useState([]);
  const [pricingItem, setPricingItem] = useState({});

  const { pathname } = useLocation();

  const pathList = pathname.split("/");

  const id = pathList[pathList.length - 1];

  console.log(id);

  useEffect(() => {
    getPropertyById(id).then((data) => {
      console.log(data);
      // setPricingData(data.result);
      setPricingItem(data.result);
    });
  }, []); // not understand
  const STRING_LIMIT = 150;
  const handleOrder = () => {
    if (!login()) {
      // Redirect the user to the sign up page
      window.location.href = "/signup";
    } else {
      // Continue with the order
      console.log("");
    }
  };
  return (
    <section>
      <div className="f  ">
        <div className="z">
          <div className="j">
            <h1>Pricing</h1>
          </div>
        </div>
      </div>
      <div></div>
      {/* <div class="">
            <div class="row"> */}
      <div className="x about-colo-1">
        <Slid />

        <div className="about-colo-2">
          
         
        </div>
        {/* </div></div></div></div> */}
      </div>

      <div className="a1">
     
      
        {/* <p className='mb-4 mb-md-0 w100'>
                              {pricingItem.description.length > STRING_LIMIT
                                ? pricingItem.description.slice(0, STRING_LIMIT) + '...'
                                : pricingItem.description}
                            </p> */}
                             
                             <p >
                             <h1>Description</h1>
            {pricingItem.description && pricingItem.description.length > STRING_LIMIT
              ? pricingItem.description.slice(0, STRING_LIMIT) + "..."
              : pricingItem.description}
               <h2>Pricing{pricingItem.price}</h2>
          </p>
        <Link
          to="/Order"
          className="btn btn-warning shadow"
          onClick={handleOrder}
        >
          Order Now
        </Link>{" "}
      </div>
    </section>
  );
};
export default Pricingspe;
