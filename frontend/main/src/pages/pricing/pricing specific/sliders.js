import React, { useEffect ,useState } from 'react';
import slider1 from '../../../components/resources/images/properties-1.jpg';
import slider2 from '../../../components/resources/images/home-img.jpg';
import slider3 from '../../../components/resources/images/properties-1.jpg';
import {api} from '../../../config/';
import "./pricing.css"
import { getPropertyById } from '../../../api/request';
const Slid = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    getPropertyById().then(data => {
      // setPricingData(data);
      setImages(data[0]);
    });
  }, []);

  const handleSlideChange = (event) => {
    setActiveSlide(event.target.dataset.slide);
  };

  return (
    <div id="carouselExampleFade" class="carousel slide l-1 carousel-fade">
      <div class="carousel-inner">
        <img src={slider1} class="d-block w-100" alt="..." />
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
        aria-label="Previous"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
        aria-label="Next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  );
};

export default Slid;
