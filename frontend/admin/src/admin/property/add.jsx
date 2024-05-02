import { useState } from "react";
import { addProperty } from '../../api/request';
import { showError, showLoading, showSuccess, showWarning } from "../../components/messages";

export default function Add({ setSwitchPanel }) {
  const [values, setState] = useState({
    name: '',
    price: '',
    quantity: '',
    description: '',
    type: '',
    status: '',
    address: '',
    country: '',
    state: '',
    city: '',
    subCity: '',
    zipCode: '',
    location: '',

    noBedroom: '',
    noBathroom: '',
    noGarage: '',
    totalSize: '',
    livingroomSize: '',
    bedroomSize: '',
    bathroomSize: '',
    garageSize: '',
    buildYear: '',
  });
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [warning, setWarning] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSave = () => {
    setSuccess(false);
    setError(false);
    setWarning(false);
    setLoading(true);

    addProperty(values).then(data => {
      setLoading(false);
      const { errors, error, success, message } = data;
      if (error) {
        return setError(message);
      }
      if (errors) {
        return setError(JSON.stringify(errors[0].msg));
      }
      if (success) {
        return setSuccess(message);
      }
    });
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
    <>
      <div className='col-xxl-4 col-lg-6 col-sm-12  mb-4'>
        <div className='form-control pb-4'>
          <label htmlFor={props.label} className='form-label'>
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
    </>
  );

  const LabeledTextArea = props => (
    <>
      <div className='w-100 mb-4'>
        <div className='form-control pb-4'>
          <label htmlFor={props.label} className='form-label'>
            {props.label}
          </label>
          <textarea
            type={props.type}
            value={props.value}
            name={props.name}
            className='form-control'
            onChange={handleChange}
            style={{ height: '200px' }}
          />
        </div>
      </div>
    </>
  );

  const Section = props => (
    <div className=''>
      <div>{props.name}</div>
      <div className=''>
        <div className='row'>{props.labels}</div>
      </div>
    </div>
  );

  const AddContainer = () => (
    <div className=''>
      {Section({
        name: 'Property Information',
        labels: (
          <>
            {LabeledInput({
              label: 'Name',
              type: 'text',
              value: values.name,
              name: 'name',
            })}
            {LabeledInput({
              label: 'Price',
              type: 'number',
              value: values.price,
              name: 'price',
            })}
            {LabeledInput({
              label: 'Quantity',
              type: 'number',
              value: values.quantity,
              name: 'quantity',
            })}
            {LabeledInput({
              label: 'Type',
              type: 'text',
              value: values.type,
              name: 'type',
            })}
          </>
        ),
      })}

      {Section({
        name: 'Property Details',
        labels: (
          <>
            {LabeledInput({
              label: 'Number of Bedrooms',
              type: 'number',
              value: values.noBedroom,
              name: 'noBedroom',
            })}
            {LabeledInput({
              label: 'Number of Bathroom',
              type: 'number',
              value: values.noBathroom,
              name: 'noBathroom',
            })}
            {LabeledInput({
              label: 'Number of Garage',
              type: 'number',
              value: values.noGarage,
              name: 'noGarage',
            })}
            {LabeledInput({
              label: 'Total Size in Sq meter',
              type: 'number',
              value: values.totalSize,
              name: 'totalSize',
            })}

            {LabeledInput({
              label: 'Living Room Size in Sq meter',
              type: 'number',
              value: values.livingroomSize,
              name: 'livingroomSize',
            })}

            {LabeledInput({
              label: 'Bedroom  Size in Sq meter',
              type: 'number',
              value: values.bedroomSize,
              name: 'bedroomSize',
            })}

            {LabeledInput({
              label: 'Bathroom Size in Sq meter',
              type: 'number',
              value: values.bathroomSize,
              name: 'bathroomSize',
            })}

            {LabeledInput({
              label: 'Garage Size in Sq meter',
              type: 'number',
              value: values.garageSize,
              name: 'garageSize',
            })}

            {LabeledInput({
              label: 'Year Build',
              type: 'number',
              value: values.buildYear,
              name: 'buildYear',
            })}
          </>
        ),
      })}

      {Section({
        name: 'About Property',
        labels: (
          <>
            {LabeledTextArea({
              label: 'Description',
              type: 'text',
              value: values.description,
              name: 'description',
            })}
          </>
        ),
      })}

      {Section({
        name: 'Address Information',
        labels: (
          <>
            {LabeledInput({
              label: 'Address',
              type: 'text',
              value: values.address,
              name: 'address',
            })}
            {LabeledInput({
              label: 'Country',
              type: 'text',
              value: values.country,
              name: 'country',
            })}
            {LabeledInput({
              label: 'State',
              type: 'text',
              value: values.state,
              name: 'state',
            })}
            {LabeledInput({
              label: 'City',
              type: 'text',
              value: values.city,
              name: 'city',
            })}
            {LabeledInput({
              label: 'subCity',
              type: 'text',
              value: values.subCity,
              name: 'subCity',
            })}
            {LabeledInput({
              label: 'Zip Code',
              type: 'text',
              value: values.zipCode,
              name: 'zipCode',
            })}

            {LabeledInput({
              label: 'Map Location',
              type: 'text',
              value: values.location,
              name: 'location',
            })}
          </>
        ),
      })}

      {Section({
        name: 'Status',
        labels: (
          <>
            {LabeledInput({
              label: 'Status',
              type: 'text',
              value: values.status,
              name: 'status',
            })}
          </>
        ),
      })}
      <div className='d-flex justify-content-between mt-5 mb-5'>
        <div>
          <button
            onClick={() => setSwitchPanel('main')}
            className='btn btn-warning'
          >
            Back
          </button>
        </div>
        <div>
          <div>
            <button className='btn btn-primary' onClick={onSave}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className='w100'>
        <div className='c-a f-c w100'>
          <div className='w100'>
            {showError(error)}
            {showSuccess(success)}
            {showWarning(warning)}
          </div>
          <div className='position-absolute top-50 start-50 translate-middle'>
            {showLoading(loading)}
            {loading && (
              <button
                onClick={() => setSwitchPanel('main')}
                className='btn btn-warning mt-5'
              >
                Back
              </button>
            )}
          </div>
        </div>
        {loading === false && AddContainer()}
      </div>
    </>
  );
}
