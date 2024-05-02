import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css"
const Coustomer1 = ({ setInput }) => 
//APP
 {
//   //STATES - for the tabs
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       setResponseMessage("Passwords do not match");
//       return;
//     }

//     try {
//       console.log("sending data");
//       const response = await fetch(
//         "https://api.realestate.addishiwotbusiness.com/auth/signup",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ email: emailAddress, password }),
//         }
//       );
//       console.log("data sent");
//       if (response.ok) {
//         console.log("okay!");
//         const data = await response.json();
//         console.log(data);

//         setResponseMessage(data.message);

     
//       } else {
//         const error = await response.json();
//         setResponseMessage(error.error);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setResponseMessage(error.message);
//     }
  //  }
  // const [value, setValue] = React.useState("one");

  // const handleChange = (event: React.SyntheticEvent, newValue: string) => {
  //   setValue(newValue);
  // };
  const [propertyId, setPropertyId] = useState("");
  const [passportId, setPassportId] = useState("");
  const [kebeleNo, setKebeleNo] = useState("");
  const [HouseNo, setHouseNo] = useState("");

  const [responseMessage, setResponseMessage] = useState("");


  //RETURN
  return (
    <section class="lii-2 lii-1 margin-f gradient-custom">
      <div class="contair lii py-5 h-100">
        <div class="row justify-content-center align-items-center h-100" style={{marginTop: "50px"}}>
          <div class="col-12 col-lg-9 col-xl-7">
            <div class="shadow-2-strong card-registration">
              <div class="card-body jss p-4 p-md-5">
                {/* <h3 class="mb-4 pb-2 pb-md-0 lo mb-md-5">Signup</h3> */}
                {responseMessage && <p>{responseMessage}</p>}
                <form >
                  <div class="row input-f">
                    <div class="col-md-6 mb-4">
                      <div class="e">
                        <input
                          type="text"
                          id=""
                          class="form-control form-control-lg input-f"
                          placeholder="Property Number"
                          // value={firstName}
                          required
                          onChange={(e) => setPropertyId(e.target.value)}
                        />
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="">
                        <input
                          type="text"
                          id=""
                          class="form-control form-control-lg input-f"
                          placeholder="Passport Number "
                          // value={lastName}
                          onChange={(e) => setPassportId(e.target.value)}
                        />
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="e">
                        <input
                          type="password"
                          id="Password"
                          class="form-control form-control-lg"
                          // value={password}
                          placeholder=" kebele Number "
                          onChange={(e) => setKebeleNo(e.target.value)}
                          required
                        />
               
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="">
                        <input
                          type="password"
                          id="comfirmpassword"
                          class="form-control form-control-lg"
                          placeholder="House Number "
                          // value={confirmPassword}
                          onChange={(e) => setHouseNo(e.target.value)}
                        />
                      </div>
                    </div>

                   
                    <div class="col-md-6 lo mb-4"></div>
                  </div>
                  <input
       type="text"
       placeholder="Transaction id "
       onChange={(event) => setInput(event.target.value)}

     />
                  <div class="mt-4 loo   pt-2">
                    <a>
                      <button
                        href="/Login"
                        type="submit"
                        className="login_butt"
                        // onClick={handleSubmit}
                      >
                        Update
                      </button>
                    </a>
                    <p className="f3">
                      {/* <Link to ="slip" className='btn btn-warning shadow'>Register</Link>  */}
                     
                      <span className="line  ">
                      
                      </span>
                      {/* <button className="" onClick={togglePage}>
                             Login here
        </button> */}
                    </p>
                  </div>
                  {/* <button >Sign Up</button> */}
                  {/* disabled={!validName || !validPwd || !validMatch ? true : false} */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
      }
export default Coustomer1;