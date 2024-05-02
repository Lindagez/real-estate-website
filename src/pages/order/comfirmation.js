import React, { Component } from 'react';
import {  Container } from 'react-bootstrap';

import "./index.css"
import {Input } from "reactstrap";
import  { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./slip.css"
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
class Confirmation extends Component{

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    };
    
    // const [input, setInput] = useState("");
    // const handleSubmit = (event) => {
    //     event.preventDefault();
      
    //     const inputValue = Input.value;
      
    //     // Do something with the input value
      
    //     // Close the confirmation dialog
    //     setOpen(false);
    //   };
      
  
    render(){
        const {inputValues: { firstName, lastName, email, address, city, state, zip }} = this.props;

        return(
            <Container>
                <h1>Confirm your Details</h1>
                <p>Confirm if the following details are correct.</p>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Adress: {address}</p>
                <p>City: {city}</p>
                <p>State: {state}</p>
                <p>Zip: {zip}</p>
                {/* <Button variant="secondary" onClick={this.back}>Back</Button>{' '} */}

                <Button variant="primary">Confirm</Button>
                {/* {open && (
            <Dialog open={open} onClose={() => setOpen(false)}>
              <DialogTitle>Transaction submitted</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Your transaction has been submitted successfully. We will send you an email once your account has been verified.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Link to="/">Ok</Link>
              </DialogActions>
            </Dialog>
                )} */}
            </Container>
        )
    }
}

export default Confirmation;