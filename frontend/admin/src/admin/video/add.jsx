import { useState } from "react";
import { addVideo } from '../../api/request';
import {
  showError,
  showLoading,
  showSuccess,
  showWarning,
} from '../../components/messages';

export default function Add({ setSwitchPanel }) {
  const [values, setState] = useState({
    title: '',
    content: '',
    videoUrl: '',
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

    addVideo(values)
      .then(data => {
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
      })
  }

  const handleChange = (event) => {
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
  }

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
    <div className='p100 w100 o-d m10-20'>
      {Section({
        name: 'Video Information',
        labels: (
          <>
            {LabeledInput({
              label: 'Title',
              type: 'text',
              value: values.title,
              name: 'title',
            })}
            {LabeledTextArea({
              label: 'Content',
              type: 'text',
              value: values.content,
              name: 'content',
            })}
            {LabeledInput({
              label: 'YouTube Video Code',
              type: 'text',
              value: values.videoUrl,
              name: 'videoUrl',
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
