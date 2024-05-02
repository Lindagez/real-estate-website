import Layout from '../../components/layout';
import List from './videos';
import Manager from './manager';
import Add from './add';
import UpBar from '../../components/upbar';
import { useState } from 'react';

export default function Videos() {
  const [switchPanel, setSwitchPanel] = useState('main');
  const [id, setId] = useState('');
  const [edit, setEdit] = useState('');

  let display;
  switch (switchPanel) {
    case 'main':
      display = (
        <List
          setSwitchPanel={setSwitchPanel}
          setEdit={setEdit}
          setId={setId}
        />
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
      <Layout title='Videos Management'>
        <div className=''>{display && display}</div>
      </Layout>
    </>
  );
}
