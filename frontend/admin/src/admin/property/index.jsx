import Layout from '../../components/layout';
import List from './properties';
import Manager from './manager';
import Add from './add';
import Trash from './trash';
import { useState } from 'react';
 
export default function Customer() {
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
      display = <Add setSwitchPanel={setSwitchPanel}  />;
      break;
    case 'trash':
      display = (
        <Trash
          setSwitchPanel={setSwitchPanel}
          setEdit={setEdit}
          setId={setId}
        />
      );
      break;
    default:
      display = null;
  }

  return (
    <>
      <Layout title='Properties Management'>
        <div className=''>{display && display}</div>
      </Layout>
    </>
  );
}
