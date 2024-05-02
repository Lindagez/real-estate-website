import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function DisplayOrder() {
  const [values, setState] = useState({
    name: "Linda Gezahegn",
    email: "addis@gmail.com",
    propertyType: "Four Bedroom",
    totalPrice: 600000,
    completedPrice: 100000,
    status: "Active",
    isVerified: "Not verified"
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
  const editable = pathname.includes('/admin/orders/update') ? true : false;

  const LabeledInput = (props) => (
    <div className="f f-c w100 mt-20">
      <label htmlFor={props.label} className="">{props.label}</label>
      <input
        type={props.type}
        value={props.value}
        name={props.name}
        className="w100"
        onChange={props.editable ? handleChange : notEditable}
      />
    </div>
  )

  const OrderSection = (props) => (
    <div className="s-b w100 m10-20">
      <div>{props.name}</div>
      <div className="i-b">
        <div className="">
          {props.labels}
          <div className="w100 s-b mt-10">
            <div></div>
            <div>
              {props.edit && <div className="button s-c mt-10">Save</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const Order = (props) => (
    <div className="p100 w100 o-d m10-20">
      {OrderSection({
        name: "Buyer Information",
        edit: props.edit,
        labels: <>
          {LabeledInput({ label: "Name", type: "text", value: values.name, name: 'name', editable: false })}
          {LabeledInput({ label: "Email", type: "email", value: values.email, name: 'email', editable: false })}
        </>
      })}

      {OrderSection({
        name: "Property Information",
        edit: props.edit,
        labels: <>
          {LabeledInput({ label: "Property Type", type: "text", value: values.propertyType, name: 'propertyType', editable: props.edit })}
          {LabeledInput({ label: "Total Price", type: "text", value: values.totalPrice, name: 'totalPrice', editable: props.edit })}
          {LabeledInput({ label: "Completed Price", type: "text", value: values.completedPrice, name: 'completedPrice', editable: props.edit })}
        </>
      })}

      {OrderSection({
        name: "Status",
        edit: props.edit,
        labels: <>
          {LabeledInput({ label: "Status", type: "text", value: values.status, name: 'status', editable: props.edit })}
          {LabeledInput({ label: "Verification", type: "text", value: values.isVerified, name: 'isVerified', editable: props.edit })}
        </>
      })}
    </div>
  )

  return <>
    {Order({ edit: editable })}
  </>
}
