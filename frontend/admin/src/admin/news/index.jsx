import Layout from '../../components/layout';
import List from './news';
import Manager from './manager';
import Add from './add';
import { useState } from 'react';

export default function News() {
  const [switchPanel, setSwitchPanel] = useState('main');
  const [id, setId] = useState('');
  const [edit, setEdit] = useState('');

  let display;
  switch (switchPanel) {
    case 'main':
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
      <Layout title='News Management'>
        <div className='c-a p100 ord w100'>{display && display}</div>
      </Layout>
    </>
  );
}
