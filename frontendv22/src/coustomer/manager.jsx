import { useState } from "react";
import { useLocation } from "react-router-dom";
import "../../App.css"
export default function ManageRegistration() {
  const [values, setState] = useState({
    fistName: "Linda",
    lastName: "Gezahegn",
    email: "addis@gmail.com",
    country: "Ethiopia",
    city: "Addis Ababa",
    zipCode: "0000",
    street: "Karl Square",
    totalPrice: 600000,
    completedPrice: 100000,
    status: "Active",
    isVerified: "Verified"
  });

  const handleChange = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    setState({
      ...values,
      [name]: value,
    });
  }

  const notEditable = () => { }

  const { pathname } = useLocation();
  const editable = pathname.includes('/admin/registrations/update/') ? true : false;

  const LabeledInput = (props) => (
    <div className="f f-c w50 mt-20">
      <label htmlFor={props.label} className="">{props.label}</label>
      <input
        type={props.type}
        value={props.value}
        name={props.name}
        className="w100"
        onChange={notEditable}
      />
    </div>
  )

  const RegistrationSection = (props) => (
    <div className="s-b w70 m10-20">
      <div>{props.name}</div>
      <div className="i-b">
        <div className="">
          {props.labels}
          <div className="w70 s-b mt-10">
            <div></div>
            <div>
              {props.edit && <div className="button s-c mt-10">Save</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const RegisteredCustomer = (props) => (
    <div className="p100 w70 o-d m10-20">
      {RegistrationSection({
        name: "Registered Customer Information",
        edit: props.edit,
        labels: <>
          {LabeledInput({ label: "First Name", type: "text", value: values.fistName, name: 'fistName', editable: props.edit })}
          {LabeledInput({ label: "Last Name", type: "text", value: values.lastName, name: 'lastName', editable: props.edit })}
          {LabeledInput({ label: "Email", type: "email", value: values.email, name: 'email', editable: props.edit })}
        </>
      })}

      {RegistrationSection({
        name: "Address Information",
        edit: props.edit,
        labels: <>
          {LabeledInput({ label: "Country", type: "text", value: values.country, name: 'country', editable: props.edit })}
          {LabeledInput({ label: "City", value: values.city, name: 'city', editable: props.edit })}
          {LabeledInput({ label: "Zip Code", type: "text", value: values.zipCode, name: 'zipCode', editable: props.edit })}
          {LabeledInput({ label: "Street", type: "text", value: values.street, name: 'street', editable: props.edit })}
        </>
      })}

      {RegistrationSection({
        name: "Pricing Information",
        edit: props.edit,
        labels: <>
          {LabeledInput({ label: "Total Price", type: "text", value: values.totalPrice, name: 'totalPrice', editable: props.edit })}
          {LabeledInput({ label: "Completed Price", value: values.completedPrice, name: 'completedPrice', editable: props.edit })}
        </>
      })}

      {RegistrationSection({
        name: "Status",
        edit: props.edit,
        labels: <>
          {LabeledInput({ label: "Status", type: "text", value: values.status, name: 'status'   })}
          {LabeledInput({ label: "Verification", type: "text", value: values.isVerified, name: 'isVerified', editable: props.edit })}
        </>
      })}
    </div>
  )

  return <>
    {RegisteredCustomer({ edit: editable })}
  </>
}