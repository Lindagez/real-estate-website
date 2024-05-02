import React from 'react'
import { Link } from 'react-router-dom'
import "./vmc.css"
const Vmc1 = () => {
  return (
    <section className='a section bg-c-light border-top zx ba w' >
      <div className="ag-format-container">
        <h1 className="text-dark fw-medium"> Vision, Mission and Values </h1>
        <div className="ag-courses_box">
          <div className="ag-courses_item">
            <Link to="/about" className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>
              <div className="ag-courses-item_title flex justify-center item-center">
                <h3><b>Our Vision</b></h3>
              </div>
            </Link>
          </div>

          <div className="ag-courses_item">
            <Link to="/about" className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>
              <div className="ag-courses-item_title flex justify-center item-center">
                <h3><b>Our Mission</b></h3>
              </div>
            </Link>
          </div>

          <div className="ag-courses_item">
            <Link to="/about" className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>
              <div className="ag-courses-item_title flex justify-center item-center">
                <h3><b>Our Core Value</b></h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Vmc1