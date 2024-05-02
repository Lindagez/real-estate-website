import { useState } from 'react';
import { addCustomer } from '../../api/request';
import {
  showError,
  showLoading,
  showSuccess,
  showWarning,
} from '../../components/messages';

export default function AddCustomer({ setSwitchPanel }) {
  const [values, setState] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    phone2: '',
    email: '',
    password: '',
    country: '',
    city: '',
    state: '',
    street: '',
    zipCode: '',
  });
  const [userData] = useState(values);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [warning, setWarning] = useState(false);
  const [loading, setLoading] = useState(false);

  const getChangedValues = () => {
    const changedValues = {};
    for (const key in values) {
      if (userData.hasOwnProperty(key) && userData[key] !== values[key]) {
        changedValues[key] = values[key];
      }
    }
    return { ...changedValues };
  };

  const onSave = () => {
    if (window.confirm('Is the user information correct?')) {
      setSuccess(false);
      setError(false);
      setWarning(false);
      setLoading(true);
      const changedValues = getChangedValues();
      addCustomer(changedValues).then(data => {
        setLoading(false);
        const { errors, error, success, message } = data;
        if (error) {
          return setError(message);
        }
        if (errors) {
          return setError(errors[0].msg);
        }
        if (success) {
          return setSuccess(message);
        }
      });
    }
  };

  const handleBack = () => {
    if (window.confirm('Are you leaving?')) {
      setSwitchPanel('customers');
    }
  };

  const handleChange = event => {
    setSuccess(false);
    setError(false);
    setWarning(false);
    setLoading(false);
    event.preventDefault();
    const { name, value } = event.target;
    setState({
      ...values,
      [name]: value,
    });
  };

  const LabeledInput = props => (
    <div className='col-xxl-4 col-lg-6 col-sm-12  mb-4'>
      <div className='form-control pb-4'>
        <label className='form-label' htmlFor={props.label}>
          {props.label}
        </label>
        <input
          type={props.type}
          value={props.value}
          name={props.name}
          className='form-control'
          onChange={handleChange}
        />
      </div>
    </div>
  );

  const CustomerSection = props => (
    <div className=''>
      <h3 className='note note-light mb-3'>{props.name}</h3>
      <div className='row'>{props.labels}</div>
    </div>
  );

  const Customer = () => (
    <div className=''>
      {CustomerSection({
        name: 'Customer Information',
        labels: (
          <>
            {LabeledInput({
              label: 'First Name *',
              type: 'text',
              value: values.firstName,
              name: 'firstName',
            })}
            {LabeledInput({
              label: 'Last Name *',
              type: 'text',
              value: values.lastName,
              name: 'lastName',
            })}
            {LabeledInput({
              label: 'Phone *',
              type: 'text',
              value: values.phone,
              name: 'phone',
            })}
            {LabeledInput({
              label: 'Second Phone',
              type: 'text',
              value: values.phone2,
              name: 'phone2',
            })}
            {LabeledInput({
              label: 'Email *',
              type: 'email',
              value: values.email,
              name: 'email',
            })}
            {LabeledInput({
              label: 'New Password *',
              type: 'password',
              value: values.password,
              name: 'password',
            })}
          </>
        ),
      })}

      {CustomerSection({
        name: 'Address Information',
        labels: (
          <>
            {LabeledInput({
              label: 'Country *',
              type: 'text',
              value: values.country,
              name: 'country',
            })}
            {LabeledInput({
              label: 'State/Province/Region *',
              type: 'text',
              value: values.state,
              name: 'state',
            })}
            {LabeledInput({
              label: 'City *',
              type: 'text',
              value: values.city,
              name: 'city',
            })}
            {LabeledInput({
              label: 'Zip Code',
              type: 'text',
              value: values.zipCode,
              name: 'zipCode',
            })}
            {LabeledInput({
              label: 'Street',
              type: 'text',
              value: values.street,
              name: 'street',
            })}
          </>
        ),
      })}

      <div className='d-flex justify-content-between mt-5 mb-5'>
        <div>
          <button onClick={handleBack} className='btn btn-warning'>
            Back
          </button>
        </div>
        <div>
          <button className='btn btn-primary' onClick={onSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className='w-100'>
        <div className='w-100'>
          {showError(error)}
          {showSuccess(success)}
          {showWarning(warning)}
        </div>
        <div className='position-absolute top-50 start-50 translate-middle'>
          {showLoading(loading)}
          {loading && (
            <button
              onClick={() => setSwitchPanel('customers')}
              className='btn btn-warning mt-5'
            >
              Back
            </button>
          )}
        </div>
        {loading === false && Customer()}
      </div>
    </>
  );
}
