import Layout from '../../components/layout';
import List from './customers';
import Manager from './manager';
import Add from './add';
import UpBar from '../../components/upbar';
import { useState } from 'react';

export default function Customer() {
  const [switchPanel, setSwitchPanel] = useState('customers');
  const [id, setId] = useState('');
  const [edit, setEdit] = useState('');

  let display;
  switch (switchPanel) {
    case 'customers':
      display = (
        <List setSwitchPanel={setSwitchPanel} setEdit={setEdit} setId={setId} />
      );
      break;
    case 'manager':
      display = <Manager edit={edit} id={id} setSwitchPanel={setSwitchPanel} />;
      break;
    case 'add':
      display = <Add setSwitchPanel={setSwitchPanel} />;
      break;
    default:
      display = null;
  }

  return (
    <>
      <Layout title='Customers Management'>
        <div className=''>{display && display}</div>
      </Layout>
    </>
  );
}
