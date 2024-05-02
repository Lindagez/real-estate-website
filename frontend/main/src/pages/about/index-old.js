import React from 'react'
import  {Image} from 'react-bootstrap'
import './about.css'
const About123 = () => {
  return (
<section>
{/* <div className='f  '> 

    
<div className='i'>
  <div className='j'>
    <h1>About us</h1>
  </div></div></div>
  <div className=''> 
  <div className=''>
  
   
   


 

 

  </div></div> */}
  <section class="hero flex items-center justify-center py-32">
    <div class="container mx-auto text-center">
      <h2 class="text-6xl mb-6">Welcome to Real Estate</h2>
      <p class="text-2xl mb-6">Find your dream house today!</p>
      <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded shadow">
        Get Started</button>
    </div>
  </section>
  <section class="features bg-gray-100 py-20">
    <div class="container mx-auto grid grid-cols-3 gap-8">
      <div class="feature-card text-center px-6 py-10 bg-white shadow-lg">
        <i class="fas fa-home fa-3x mb-6 text-blue-500"></i>
        <h3 class="text-xl font-bold mb-4">Property Listings</h3>
        <p class="text-gray-600">Browse through our extensive collection of property listings.</p>
        <a href="#" class="text-blue-500 font-bold mt-6">Learn More</a>
      </div>
      <div class="feature-card text-center px-6 py-10 bg-white shadow-lg">
        <i class="fas fa-key fa-3x mb-6 text-blue-500"></i>
        <h3 class="text-xl font-bold mb-4">Buying & Selling</h3>
        <p class="text-gray-600">We assist you in buying or selling your property.</p>
        <a href="#" class="text-blue-500 font-bold mt-6">Learn More</a>
      </div>
      <div class="feature-card text-center px-6 py-10 bg-white shadow-lg">
        <i class="fas fa-money-bill-wave fa-3x mb-6 text-blue-500"></i>
        <h3 class="text-xl font-bold mb-4">Finance & Insurance</h3>
        <p class="text-gray-600">Get help with property finance and insurance options.</p>
        <a href="#" class="text-blue-500 font-bold mt-6">Learn More</a>
      </div>
    </div>
  </section>
    <div class="individual-feature bg-gray-200 py-20">
    <div class="container mx-auto flex flex-col md:flex-row items-center">
      <div class="md:w-1/2">
        {/* <img src="https://source.unsplash.com/featured/1280x720/?property" alt="Property" class="w-full rounded-lg"> */}
        <img
      src="https://source.unsplash.com/featured/1280x720/?finance"
      alt="Finance"
      class="w-full rounded-lg"
    />
      </div>
      <div class="md:w-1/2 md:ml-8 mt-8 md:mt-0">
        <h3 class="text-3xl font-bold mb-4">Effortless Property Search</h3>
        <p class="text-gray-600 mb-6">With our advanced search options,
           finding the perfect property is quick and easy.</p>
        <a href="#" class="text-blue-500 font-bold">Explore Properties</a>
      </div>
    </div>
  </div>


  <div class="individual-feature bg-gray-100 py-20">
    <div class="container mx-auto flex flex-col-reverse md:flex-row items-center">
      <div class="md:w-1/2 md:mr-8 mt-8 md:mt-0">
        <h3 class="text-3xl font-bold mb-4">Expert Real Estate Agents</h3>
        <p class="text-gray-600 mb-6">Our experienced agents are dedicated to helping you in every step of your property journey.</p>
        <a href="#" class="text-blue-500 font-bold">Meet Our Agents</a>
      </div>
      <div class="md:w-1/2">
        <img src="https://source.unsplash.com/featured/1280x720/?agents" alt="Agents" class="w-full rounded-lg"/>
        <img
      src="https://source.unsplash.com/featured/1280x720/?finance"
      alt="Finance"
      class="w-full rounded-lg"
    />
      </div>
    </div>
  </div>

  
  <div class="individual-feature bg-gray-200 py-20">
    <div class="container mx-auto flex flex-col md:flex-row items-center">
      <div class="md:w-1/2">
        <img src="https://source.unsplash.com/featured/1280x720/?finance" alt="Finance" class="w-full rounded-lg"/>
      </div>
      <div class="md:w-1/2 md:ml-8 mt-8 md:mt-0">
        <h3 class="text-3xl font-bold mb-4">Flexible Financing Options</h3>
        <p class="text-gray-600 mb-6">We offer flexible financing options to
         help you make your dream property a reality.</p>
        <a href="#" class="text-blue-500 font-bold">Discover Financing</a>
      </div>
    </div>
  </div> 

  {/* <div class="testimonial bg-gray-100 py-20">
    <div class="container mx-auto">
      <h2 class="text-4xl font-bold mb-8">What our clients say</h2>
      <div class="grid grid-cols-2 gap-8">
        <div class="testimonial-card bg-white shadow-lg p-6">
          <p class="text-gray-600 mb-4">"I found my dream home through Real Estate and 
            the entire experience was fantastic. Highly recommend!"</p>
          <p class="text-gray-800 font-bold">John Doe</p>
          <p class="text-gray-600">Property Buyer</p>
        </div>
        <div class="testimonial-card bg-white shadow-lg p-6">
          <p class="text-gray-600 mb-4">"The team at Real Estate is professional, 
            friendly, and responsive. They made selling our property a breeze!"</p>
          <p class="text-gray-800 font-bold">Jane Smith</p>
          <p class="text-gray-600">Property Seller</p>
        </div>
      </div>
    </div>
  </div> */}
  
 
  <div class="faq bg-gray-100 py-20">
    <div class="container mx-auto">
      <h2 class="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
      <div class="grid grid-cols-2 gap-8">
        <div class="faq-item">
          <h4 class="text-xl font-bold mb-2">Can I schedule property viewings?</h4>
          <p class="text-gray-600">Yes, you can schedule property viewings by 
             contacting our team or through the website.</p>
        </div>
        <div class="faq-item">
          <h4 class="text-xl font-bold mb-2">Do you offer property valuation services?</h4>
          <p class="text-gray-600">Yes, we provide property valuation services to 
             help you determine the market value of your property.</p>
        </div>
        <div class="faq-item">
          <h4 class="text-xl font-bold mb-2">Are there any hidden fees?</h4>
          <p class="text-gray-600">No, we are transparent about 
             our fees and there are no hidden charges.</p>
        </div>
        <div class="faq-item">
          <h4 class="text-xl font-bold mb-2">Do you offer property management services?</h4>
          <p class="text-gray-600">Yes, we have property management services to 
             help you manage your rental properties.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="team bg-gray-200 py-20">
    <div class="container mx-auto">
      <h2 class="text-4xl font-bold mb-8 text-center">Our Team</h2>
      <div class="grid grid-cols-4 gap-8">
        <div class="team-member text-center">
          <img src="https://th.bing.com/th/id/OIP.fFF3Uo8Gp2ROms2DO3nbxwHaEK?pid=ImgDet&rs=1" alt="Team Member" class="w-full rounded-full mb-4"/>
          <h3 class="text-lg font-bold">John Doe</h3>
          <p class="text-gray-600">Real Estate Agent</p>
          <div class="social-icons mt-4">
            <a href="#" class="text-blue-500"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="text-blue-500"><i class="fab fa-twitter"></i></a>
            <a href="#" class="text-blue-500"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
        <div class="team-member text-center">
          <img src="https://th.bing.com/th/id/OIP.fFF3Uo8Gp2ROms2DO3nbxwHaEK?pid=ImgDet&rs=1" alt="Team Member" class="w-full rounded-full mb-4"/>
          <h3 class="text-lg font-bold">Jane Smith</h3>
          <p class="text-gray-600">Real Estate Agent</p>
          <div class="social-icons mt-4">
            <a href="#" class="text-blue-500"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="text-blue-500"><i class="fab fa-twitter"></i></a>
            <a href="#" class="text-blue-500"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
        <div class="team-member text-center">
          <img src="https://th.bing.com/th/id/OIP.fFF3Uo8Gp2ROms2DO3nbxwHaEK?pid=ImgDet&rs=1" alt="Team Member" class="w-full rounded-full mb-4"/>
          <h3 class="text-lg font-bold">Mark Johnson</h3>
          <p class="text-gray-600">Real Estate Agent</p>
          <div class="social-icons mt-4">
            <a href="#" class="text-blue-500"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="text-blue-500"><i class="fab fa-twitter"></i></a>
            <a href="#" class="text-blue-500"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
        <div class="team-member text-center">
          <img src="https://th.bing.com/th/id/OIP.fFF3Uo8Gp2ROms2DO3nbxwHaEK?pid=ImgDet&rs=1" alt="Team Member" class="w-full rounded-full mb-4"/>
          <h3 class="text-lg font-bold">Sarah Thompson</h3>
          <p class="text-gray-600">Real Estate Agent</p>
          <div class="social-icons mt-4">
            <a href="#" class="text-blue-500"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="text-blue-500"><i class="fab fa-twitter"></i></a>
            <a href="#" class="text-blue-500"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>
  )
}

export default About123;