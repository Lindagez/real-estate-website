 import React from "react"
 import "./index.css"
 import {Input } from "reactstrap";
 import  { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./slip.css"
 const Slip= () => {
    const [input, setInput,setStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (input === '') {
      alert("Please fill the box");
    } else {
        console.log("djs")
    }
  };
return (
    <section>
    <div className='f  '>

   
    <div className='z'>
      <div className='j'>
         <h1>Order</h1>
       </div>
       </div></div>
 <div className="a-6 ">
 
  
</div>
<div className="c1">


<div>
    <h4>add transaction id </h4>
    <p>fghjkjhgbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfa-borde<br/>
fghjkmmmmmmmmmmmmmmmmmmmmmmmmm<br/>
mmmmmmmmmmmmmmmmmmmmm<br/> </p>
<input
        type="text"
        placeholder="Transaction id "
        onChange={(event) => setInput(event.target.value)}

      />
      <Link to ="/Displayorder" className='btn btn-warning shadow'>Submit</Link> 
    {/* <button type="submit" onClick={handleSubmit}>Submit</button>  */}

</div></div>

</section>
)}
export default Slip
