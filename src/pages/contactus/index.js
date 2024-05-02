// // import React from 'react'
// // import  { useState } from 'react';
// // import { InputGroup, InputGroupText, InputGroupAddon, Button } from 'reactstrap';
// // import {

// //     Form,
// //     Input,
// //     Container,
// //     Row,
// //     Col,
// //   } from "reactstrap";
// // const Contactus = () => {
// //   return (
// //     <section>

// //      <div className="section landing-section">
// //     <Container>
// //       <Row>
// //         <Col className="ml-auto mr-auto" md="8">
// //           <h2 className="text-center">contact us</h2>
// //           <p>we will assist you 24/7...</p>
// //           <Form className="contact-form">
// //             <Row>
// //               <Col md="6">
// //                 <label>Name</label>
// //                 <InputGroup>
                  
// //                     <InputGroupText>
// //                       <i className="nc-icon nc-single-02" />
// //                     </InputGroupText>
// //                   <Input placeholder="Name" type="text" />
// //                 </InputGroup>
// //               </Col>
// //               <Col md="6">
// //                 <label>Email</label>
// //                 <InputGroup>
                  
// //                     <InputGroupText>
// //                       <i className="nc-icon nc-email-85" />
// //                     </InputGroupText>
               
// //                   <Input placeholder="Email" type="text" />
// //                 </InputGroup>
// //               </Col>
// //             </Row>
// //             <label>Message</label>
// //             <Input
// //               placeholder="Tell us your questions"
// //               type="textarea"
// //               rows="4"
// //             />
// //             <Row>
// //               <Col className="ml-auto mr-auto" md="4">
// //                 <Button className="btn-fill" color="danger" size="lg">
// //                   Send Message
// //                 </Button>
// //               </Col>
// //             </Row>
// //           </Form>
// //         </Col>
// //       </Row>
// //     </Container>
// //   </div>
// //   </section>

// //   )
// // }

// // export default Contactus;

// import React from 'react'
// import  { useState } from 'react';
// import { InputGroup, InputGroupText, InputGroupAddon, Button } from 'reactstrap';
// import {

//     Form,
//     Input,
//     Container,
//     Row,
//     Col,
//   } from "reactstrap";
//   import "./contact.css"
// const Contactus = () => {
//   return (
//     <section id="contact" class="contact">

//     <div class="container section-title" data-aos="fade-up">
//       <h2>Contact</h2>
//       <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
//     </div>
//     <div class="container" data-aos="fade-up" data-aos-delay="100">

//       <div class="row gy-4">

//         <div class="col-lg-6">

//           <div class="row gy-4">
//             <div class="col-md-6">
//               <div class="info-item" data-aos="fade" data-aos-delay="200">
//                 <i class="bi bi-geo-alt"></i>
//                 <h3>Address</h3>
//                 <p>A108 Adam Street</p>
//                 <p>New York, NY 535022</p>
//               </div>
//             </div>
//             <div class="col-md-6">
//               <div class="info-item" data-aos="fade" data-aos-delay="300">
//                 <i class="bi bi-telephone"></i>
//                 <h3>Call Us</h3>
//                 <p>+1 5589 55488 55</p>
//                 <p>+1 6678 254445 41</p>
//               </div>
//             </div>

//             <div class="col-md-6">
//               <div class="info-item" data-aos="fade" data-aos-delay="400">
//                 <i class="bi bi-envelope"></i>
//                 <h3>Email Us</h3>
//                 <p>info@example.com</p>
//                 <p>contact@example.com</p>
//               </div>
//             </div>

//             <div class="col-md-6">
//               <div class="info-item" data-aos="fade" data-aos-delay="500">
//                 <i class="bi bi-clock"></i>
//                 <h3>Open Hours</h3>
//                 <p>Monday - Friday</p>
//                 <p>9:00AM - 05:00PM</p>
//               </div>
//             </div>

//           </div>

//         </div>

//         <div class="col-lg-6">
//           <form action="" method="post" class="" data-aos="fade-up" data-aos-delay="200">
//             <div class="row gy-4">

//               <div class="col-md-6">
//                 <input type="text" name="name" class="form-control" placeholder="Your Name" required/>
//               </div>

//               <div class="col-md-6 ">
//                 <input type="email" class="form-control" name="email" placeholder="Your Email" required/>
//               </div>

//               <div class="col-md-12">
//                 <input type="text" class="form-control" name="subject" placeholder="Subject" required/>
//               </div>

//               <div class="col-md-12">
//                 <textarea class="form-control" name="message" rows="6" placeholder="Message" required></textarea>
//               </div>

//               <div class="col-md-12 text-center">
//                 <div class="loading">Loading</div>
//                 <div class="error-message"></div>
//                 <div class="sent-message">Your message has been sent. Thank you!</div>

//                 <button type="submit">Send Message</button>
//               </div>

//             </div>
//           </form>
//         </div>

//       </div>

//     </div>
// </section>
  
//   )
// }

// export default Contactus;



import React from 'react'
import  { useState } from 'react';
import { InputGroup, InputGroupText, InputGroupAddon, Button } from 'reactstrap';
import {

    Form,
    Input,
    Container,
    Row,
    Col,
  } from "reactstrap";
  import "./contact.css"
const Contactus = () => {
  return (
    <section className='' id='contact'>

     <div className="section  landing-section">
    <Container className=''>
      <Row>
        <Col className="ml-auto mr-auto" md="8">
          <h2 className="text-center">contact us</h2>
          <Form className="contact-form">
            <Row>
              <Col md="6">
                <label>Name</label>
                <InputGroup>
                  
                    <InputGroupText>
                      <i className="nc-icon nc-single-02" />
                    </InputGroupText>
                  <Input placeholder="Name" type="text" />
                </InputGroup>
              </Col>
              <Col md="6">
                <label>Email</label>
                <InputGroup>
                  
                    <InputGroupText>
                      <i className="nc-icon nc-email-85" />
                    </InputGroupText>
               
                  <Input placeholder="Email" type="text" />
                </InputGroup>
              </Col>
            </Row>
            <label>Message</label>
            <Input
              placeholder="Tell us your thoughts and feelings..."
              type="textarea"
              rows="4"
            />
            <Row>
              <Col className="ml-auto mr-auto" md="4">
                <Button className="btn-fill" color="danger" size="lg">
                  Send Message
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  </div>
  </section>

  )
}

export default Contactus;