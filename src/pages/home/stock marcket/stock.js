import React from 'react'
import "./stock.css"
const Stock = () => {
  return (
    <section className='bo1'>
   	<div class="wrap animate pop">
		<div class="overlay">
			<div class="overlay-content animate slide-left delay-2">
				<h1 class="animate slide-left pop delay-4 h3">Addis Hiwot </h1>
				<p class="animate slide-left pop delay-5" >Stock  <em>marcket</em></p>
			</div>
			<div class="image-content animate slide delay-5"></div>
					<div class="dots animate">
						<div class="dot animate slide-up delay-6"></div>
						<div class="dot animate slide-up delay-7"></div>
						<div class="dot animate slide-up delay-8"></div>
					</div>
		</div>
			<div class="text">
				<p className='p1'>details imformation about stock marcket </p>
			</div>
	</div></section>
  )
}

export default Stock