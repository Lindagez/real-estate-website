import React from 'react';
// import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import img from "../../../components/resources/images/home-img.jpg"
import aa from '../../../components/resources/images/properties-1.jpg'
import ae from '../../../components/resources/images/b3.webp'
import "./index.css"
const Cards = () => {
  
  return (
    
    <section className='widt'>
            
    
     <div id="services ">
        <div class="container">
            <div>
                
            </div>
            <h1 class="sub-title"></h1>
            <div class="wor-list">
                <div>
            <div class="wor">
           
               <img src="https://th.bing.com/th/id/R.ec41fb661d917b352b23cad2eadfbd3a?rik=ut69mKfG02OoQg&pid=ImgRaw&r=0" />
                     <div class="layer">
                        <h3>Addis Hiwot</h3>

                        <a href="Pricing"><i class="fa-solid fa-up-right-from-square"></i></a>
                    </div>
                    
                </div>
                <p>One bed Apartment<br/> Area 60-70 </p>
              
                </div>
                <div>
                <div class="wor">
                     <img src="https://th.bing.com/th/id/R.58fd41777311911f0b8ec1419e67823c?rik=tK9K1boyKK8Zhg&pid=ImgRaw&r=0"/>
                    <div class="layer">
                        <h3>Adis Hiwot</h3>

                        <a href="Pricing"><i class="fa-solid fa-up-right-from-square"></i></a>
                    </div>
                   
                    </div>
                    <p className='z-2'>Two bed Apartment<br/> Area 80-90</p>
                </div>
                <div>
                <div class="wor">
                     <img src={img}/>
                    <div class="layer">
                        <h3>Adis Hiwot</h3>

                        <a href="Pricing"><i class="fa-solid fa-up-right-from-square"></i></a>
                    </div>
                   
                    </div>
                    <p>Three bed Apartment<br/> Area 100-120</p>
                </div>
                <div>
                <div class="wor">
                     <img src={ae}/>
                    <div class="layer">
                        <h3>Adis Hiwot</h3>

                        <a href="Pricing"><i class="fa-solid fa-up-right-from-square"></i></a>
                    </div>
                   
                    </div>
                    <p>Four bed Apartment<br/> Area 130-150</p>
                </div>
                {/* <div>
                <div class="wor">
                     <img src={aa}/>
                    <div class="layer">
                        <h3>Addis Hiwot</h3>

                        <a href="#"><i class="fa-solid fa-up-right-from-square"></i></a>
                    </div>
                   
                    </div>
                    <p>Addis Hiwot Appartment</p>
                </div> */}
                {/* <div>
                <div class="wor">
                     <img src="https://th.bing.com/th/id/R.269aa7725d0ee7a0bbf45645f45f3436?rik=XK1O0Y97MonndQ&pid=ImgRaw&r=0"/>
                    <div class="layer">
                        <h3>Addis Hiwot</h3>

                        <a href="#"><i class="fa-solid fa-up-right-from-square"></i></a>
                    </div>
                    
                </div>
                <p>Addis Hiwot Appartment</p>
                </div> */}
            </div>
            <div className='see'>
            <a href="Pricing" class="btn">See more</a>
            </div>
        </div>

    </div>
    </section>
  );
};

export default Cards;
