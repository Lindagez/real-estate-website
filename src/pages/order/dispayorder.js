import React, { Component } from 'react';
// import UserDetails from "./UserDetails";
// import AddressDetails from "./AddressDetails";
import Confirmation from "./comfirmation";

class Displayorder extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zip:'',
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    render(){
        const {  firstName, lastName, email, address, city, state, zip } = this.state;
        const inputValues = { firstName, lastName, email, address, city, state, zip };
        // switch(step) {
        // case 1:
        //     return <UserDetails
        //             nextStep={this.nextStep}
        //             handleChange = {this.handleChange}
        //             inputValues={inputValues}
        //             />
        // case 2:
        //     return <AddressDetails
        //             nextStep={this.nextStep}
        //             prevStep={this.prevStep}
        //             handleChange = {this.handleChange}
        //             inputValues={inputValues}
     
            return <Confirmation
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    inputValues={inputValues}
                    />
        
    }
}

export default Displayorder;