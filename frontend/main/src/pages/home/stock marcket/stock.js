import React from 'react'
import "./stock.css"
const Stock = () => {
	return (
		<section className='bo1'>
			<div className="wrap animate pop">
				<div className="overlay">
					<div className="overlay-content animate slide-left delay-2">
						<h1 className="animate slide-left pop delay-4 h3">Addis Hiwot </h1>
						<p className="animate slide-left pop delay-5" >Stock  <em>Market</em></p>
					</div>
					<div className="image-content animate slide delay-5"></div>
					<div className="dots animate">
						<div className="dot animate slide-up delay-6"></div>
						<div className="dot animate slide-up delay-7"></div>
						<div className="dot animate slide-up delay-8"></div>
					</div>
				</div>
				<div className="text  flex justify-center item-center">
					<p className='p1'>Details information about stock market</p>
				</div>
			</div></section>
	)
}

export default Stock