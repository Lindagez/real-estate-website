import React from 'react'
import { useState } from "react";
import "./reg.css";
const Regi = () => {
  
  
    const [propertyId, setpropertyId] = useState('');
    const [passportNo, setpassportNo] = useState('');
    const [kebeleIdNo, sekebeleIdNo] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');
    // const [country, setCountry] = useState('');
    // const [gender, setGender] = useState('');
    // const [emailAddress, setEmailAddress] = useState('');
    const [houseNo, sethouseNo] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    
    
  
  
  
    const handleSubmit = async (e) => {
      // const token = localStorage.getItem('accessToken');
      e.preventDefault();
  
    
      try {
        console.log("sending data");
        const response = await fetch('https://apifinal.realestate.addishiwotbusiness.com/u/registration/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
            // 'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify({  propertyId,passportNo,kebeleIdNo,houseNo}),
        });
        console.log("data sent");
        if (response.ok) {
          console.log("okay!");
          const data = await response.json();
          console.log(data);
          if(data.message){
          // setResponseMessage(data.message);
          return true;
        }else{
            return false;
          }
          
        } else {
          const error = await response.json();
          setResponseMessage(error.error);
        }
      } catch (error) {
        console.error('Error:', error);
        setResponseMessage(error.message);
      }
    };
  
  return (
    <section >
       <div className='' >
{/* <div style={{width:"100%" ,maxWidth:997,minHeight: "100vh", position: 'relative', background: 'white'}}> */}

  <div style={{width: "100%",maxWidth:997, height: 328,  margin: 'auto',
          marginBottom: '1rem',marginTop:'13rem' ,background: '#F0EDED'}}>
            <div style={{width:"100%",maxWidth: 152, height: 48,marginLeft:"13rem",  marginBottom: '1rem', color: 'black', fontSize: 30.74, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>first name </div>
  <div style={{width:"100%",maxWidth: 372, height: 44, left: 985, top: 250, position: 'absolute', background: '#D9D9D9', borderRadius: 12}} >
  <input type ="text" 
    placeholder='First name '
    />
  </div>
  <div style={{margin: 'auto',
          marginBottom: '1rem',marginLeft:"13rem", color: 'black', fontSize: 30.74, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Father's name</div>
<div style={{width: 372, minHeight: 44, marginLeft:"13rem",  marginBottom: '1rem',marginLeft:"40rem",background: '#D9D9D9', borderRadius: 12}} >
  <input type ="text" 
    placeholder="Father's name"
    />
  </div>
          </div>
  <div style={{width: "100%",maxWidth:997, height: 328.07, left: 486, top: 993.97, position: 'absolute', background: '#F0EDED'}}></div>
  <div style={{width: "100%", maxWidth:997,height: 328.07, left: 486, top: 607.47, position: 'absolute', background: '#F0EDED'}}></div>
  <div style={{width: "100%", maxWidth:997,height: 357, left: 486, top: 1363, position: 'absolute', background: '#F0EDED'}}></div>
  <div style={{width:"100%",maxwWidth: 168, height: 32, left: 494, top: 1660, position: 'absolute', color: 'black', fontSize: 24.92, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>
 
    Property Type
    
    </div>
    
  <div style={{left: 766, top: 834, position: 'absolute', color: 'black', fontSize: 24.92, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>
   
    M
    </div> 
  <div style={{left: 734, top: 887, position: 'absolute', color: 'black', fontSize: 24.92, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>other</div>
  <div style={{left: 766, top: 787, position: 'absolute', color: 'black', fontSize: 24.92, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>F</div>
  
  <div style={{width: "100%",maxWidth: 248, height: 134, left: 548, top: 788, position: 'absolute', color: 'black', fontSize: 30.74, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Gender </div>
  <div style={{width: "100%",maxWidth: 124, height: 39, left: 507, top: 1560, position: 'absolute', color: 'black', fontSize: 30.74, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>zip code </div>
  <div style={{width: "100%",maxWidth: 152, height: 40, left: 502, top: 1402, position: 'absolute', color: 'black', fontSize: 30.74, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Phone no1</div>
  <div style={{width: "100%",maxWidth: '100%',maxwidth: 152, height: 40, left: 502, top: 1480, position: 'absolute', color: 'black', fontSize: 30.74, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Phone no2</div>
  <div style={{left: 532, top: 1230, position: 'absolute', color: 'black', fontSize: 30.74, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>District/woreda</div>
  <div style={{left: 532, top: 1132, position: 'absolute', color: 'black', fontSize: 30.74, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>sub-city</div>
  <div style={{width: "100%",maxWidth: 372, height: 44, left: 985, top: 401, position: 'absolute', background: '#D9D9D9', borderRadius: 12}} >
  <input type ="text" 
    placeholder='Last name'
    />
    </div>
  <div style={{width: "100%",maxWidth: 372, height: 44, left: 985, top: 656, position: 'absolute', background: '#D9D9D9', borderRadius: 12}} >

  <input type ="text" 
    placeholder='Mother name'
    />
  </div>
  
  <div style={{width: '100%',maxWidth: 372, height: 44, left: 1027, top: 1118, position: 'absolute', background: '#D9D9D9', borderRadius: 12}} >

  <input type ="text" 
    placeholder='sub-city'
    />
  </div>

  <div style={{width: '100%',maxWidth: 372, height: 44, left: 1027, top: 1235, position: 'absolute', background: '#D9D9D9', borderRadius: 12}} >
  <input type ="text" 
    placeholder='District/woreda'
    />
  </div>
  <div style={{width: "100%",maxWidth: 372, height: 44, left: 1025, top: 1402, position: 'absolute', background: '#D9D9D9', borderRadius: 12}} >

  <input type ="tel" 
    placeholder='phone no'
    />
  </div>
  <div style={{width: "100%",maxWidth: 372, height: 44, left: 1025, top: 1480, position: 'absolute', background: '#D9D9D9', borderRadius: 12}} >

  <input type ="text" 
    placeholder='home no '
    />
  </div>
  <div style={{width: "100%",maxWidth: 372, height: 44, left: 1025, top: 1660, position: 'absolute', background: '#D9D9D9', borderRadius: 12}} > 
  <input type ="text" 
    placeholder='property Type '
    id="propertyId"
    value={propertyId}
                          
    onChange={(e) => setpropertyId(e.target.value)}
    />
  </div>
  <div style={{width:"100%",maxWidth: 372, height: 44, left: 1027, top: 1560, position: 'absolute', background: '#D9D9D9', borderRadius: 12}} >

  <input type ="text" 
    placeholder='zip code '
    />
  </div>
  <div style={{width:"100%",maxWidth: 372, height: 44, left: 1027, top: 1012, position: 'absolute', background: '#D9D9D9', borderRadius: 12}} >

  <input type ="text" 
    placeholder='City'
    />
  </div>
  <div style={{width:"100%",maxWidth: 372, height: 44, left: 985, top: 736, position: 'absolute', background: '#D9D9D9', borderRadius: 12}} >
  <input type ="email" 
    placeholder='Email'
    />
  </div>
  
  

  <div style={{margin: 'auto',
          marginBottom: '1rem',color: 'black', fontSize: 30.74, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Last name</div>
  <div style={{margin: 'auto',
          marginBottom: '1rem', color: 'black', fontSize: 30.74, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Email Address</div>
  <div style={{width:"100%",maxWidth: 997, height: 332, left: 486, top: 1795, position: 'absolute', background: '#F0EDED'}}></div>
  <div style={{width:"100%",maxWidth: 372, height: 44, left: 1017, top: 1827, position: 'absolute', background: '#D9D9D9', borderRadius: 12}} >
  <input type ="text" 
    placeholder='Country '
    /> </div>
  <div style={{width:"100%",maxWidth: 372, height: 44, left: 1017, top: 2039, position: 'absolute', background: '#D9D9D9', borderRadius: 12}} >
  <input type ="text" 
    placeholder='Field of Study '
    />
  </div>
  <div style={{width:"100%",maxWidth: 372, height: 39, left: 1017, top: 1929, position: 'absolute', background: '#D9D9D9', borderRadius: 12}} >
  <input type ="text" 
    placeholder='
    Education Level'
    />

  </div>
  <div style={{left: 528, top: 1917, position: 'absolute', color: 'black', fontSize: 30.74, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Education Level</div>
  <div style={{left: 514, top: 2039, position: 'absolute', color: 'black', fontSize: 30.74, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}> Field  of   Study</div>
  <div style={{width:"100%",maxWidth: 27, height: 21, left: 817, top: 787, position: 'absolute'}} >
 
    <input type="radio"  name ="Gender" checked />
  </div>
  <div style={{width:"100%",maxWidth: 27, height: 21, left: 817, top: 892, position: 'absolute'}} >
    <input type="radio"  name ="Gender" checked/></div>
  <div style={{width:"100%",maxWidth: 27, height: 21, left: 817, top: 834, position: 'absolute'}} > 
  <input type="radio" name ="Gender" checked/></div>
  <div style={{width:"100%",maxWidth: 276, height: 26.33, left: 528, top: 664.84, position: 'absolute', color: 'black', fontSize: 26.10, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>His/ Her Mother Name</div>
  <div style={{left: 556, top: 1020, position: 'absolute', color: 'black', fontSize: 30.74, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>City</div>
  <div style={{width:"100%",maxWidth: 997, height: 328, left: 486, top: 2188, position: 'absolute', background: '#F0EDED'}}></div>
  <div style={{width:"100%",maxWidth: 372, height: 44, left: 1017, top: 2353, position: 'absolute', background: '#D9D9D9', borderRadius: 12}} >
  <input type ="text" 
    placeholder='The Institution where you
    came from '
    />
  </div>
  <div style={{left: 514, top: 2221, position: 'absolute', color: 'black', fontSize: 30.74, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>The office where you <br/>work</div>
  <div style={{width:"100%",maxWidth: 372, height: 44, left: 1017, top: 2236, position: 'absolute', background: '#D9D9D9', borderRadius: 12}} >
  <input type ="text" 
    placeholder='The office where you
    work '
    />
  </div>
  <div style={{left: 542, top: 2417, position: 'absolute', color: 'black', fontSize: 30.74, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>upload photo</div>
  <div style={{left: 507, top: 2323, position: 'absolute', color: 'black', fontSize: 30.74, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>The Institution where you <br/>came from</div>
  <div style={{left: 526, top: 1827, position: 'absolute', color: 'black', fontSize: 30.74, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>country</div>
  <div style={{width:"100%",maxWidth: 213, height: 58, left: 1270, top: 2554, position: 'absolute', background: '#D9D9D9', borderRadius: 20}} />
  <div style={{left: 796, top: 2674, position: 'absolute', color: 'black', fontSize: 30.74, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}> </div>
  <div style={{left: 1316, top: 2564, position: 'absolute', color: 'black', fontSize: 30.74, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>submit</div><br/>
</div>
{/* </div> */}

</section>
  )
}

export default Regi