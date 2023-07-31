import React, { useState,  } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import img from "../../../components/resources/images/home-img.jpg"
import aa from '../../../components/resources/images/R (2).png'
import bb from '../../../components/resources/images/R.png'
import "./index.css"
import { Link } from 'react-router-dom';
const Licence1 = () => {
  
  return (
    <section className='co'>
     <div id="services">
        <div class="container">
            <h1 class="sub-title"></h1>
            <div class="work-list">
                <div>
            <div class="work1 c7">
             
               <img src="https://riskcenter.wharton.upenn.edu/wp-content/uploads/2019/05/houseumbrella1.jpeg" />
                     <div class="">
                      <p className='z-2'>professional viewpoint <br/>
                      with a gurantee<br/></p>

                      <Link to="/About" className="fa-solid fa-up-right-from-square"> </Link>
                    </div>
                 

                </div>
              
                </div>
                <div>
                <div class="work1 c8 ">
                     <img src="https://th.bing.com/th/id/R.b471109ba4b67691cf99ee420820dfb7?rik=48zCTtG%2bsMdflg&pid=ImgRaw&r=0" />
                    <div class="#">
                        <p className='z-2'>Affordable Price </p>
                        
                            
                        <Link to="/About" className="fa-solid fa-up-right-from-square"> </Link>
                    </div>
                   
                    </div>
                  
                </div>
                <div>
                <div class="work1 c7">
                     <img src="https://qualityhomewatchnaples.com/wp-content/uploads/HomeHands1-348-300-300x259.jpg" />
                    <div class="">
                      <p className='z-2'>customer care</p>

                      <Link to="/About" className="fa-solid fa-up-right-from-square"> </Link>
                    </div>
                     <p> </p>
                </div>
               
                </div>
            </div>
           
        </div>

    </div>
    </section>
  );
};

export default Licence1;
