import React from "react";
import { useState, useEffect, state } from "react";
import { useLocation } from "react-router-dom";
import { isAuthenticated } from "../../../auth";
import { saveToCart } from "../../../utils/cartManager";
import { useNavigate } from "react-router-dom";

import Slis from "./sliders";

import { Link } from "react-router-dom";
import Slid from "./sliders";
import "./pricing.css";
import { login } from "../../../api/auth";
import { getPropertyById } from "../../../api/request";
const Pricingspe = () => {
  const [pricingItem, setPricingItem] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();
  const pathList = pathname.split("/");
  const id = pathList[pathList.length - 1];
  const navigate = useNavigate();

  const init = () => {
    getPropertyById(id).then((data) => {
      setLoading(false);
      if (data !== undefined) {
        const { success, error, message, result } = data;
        if (message) {
          return setError(message)
        }
        if (error) {
          return setError(error);
        }
        if (success) {
          setPricingItem(result);
        }
      }
    });
  }
  useEffect(() => {
    init();
  }, []);
  const STRING_LIMIT = 150;
  const handleOrder = (event) => {
    event.preventDefault();
    if (isAuthenticated()) {
      saveToCart(id);
      return navigate("/order/agreement");
    } else {
      return navigate("/login");
    }
  };


  const oldPage = () => (
    <section>
      <div className="f  ">
        <div className="z">
          <div className="j">
            <h1>Pricing</h1>
          </div>
        </div>
      </div>
      <div className="x about-colo-1">
        <Slid />
      </div>

      <div className="a1">
        <h1>Description</h1>
        <p>
          {pricingItem.description && pricingItem.description.length > STRING_LIMIT
            ? pricingItem.description.slice(0, STRING_LIMIT) + "..."
            : pricingItem.description}
          <h2>Pricing{pricingItem.price}</h2>
        </p>
        <button
          className="btn btn-warning shadow"
          onClick={handleOrder}
        >
          Order Now
        </button>{" "}
      </div>
    </section>
  )
  return (
    <div>
      
    </div>
  );
};
export default Pricingspe;
