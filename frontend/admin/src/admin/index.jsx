import { useState } from 'react';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import PanelSwitch from '../components/panelSwitch';
import { checkToken } from '../utils/auth';

export default function Admin({ setPage }) {
  const [activePanel, setActivePanel] = useState('Main');
  const [isLogin, setIsLogin] = useState(false);
  checkToken().then(data => {
    if (data === true) {
      setIsLogin(true);
    } else {
      setPage('login');
    }
  });

  return (
    <>
      {isLogin && (
        <>
          <Navbar />
          <Sidebar setActivePanel={setActivePanel} activePanel={activePanel} />
          <main className='my-container'>
            <div className='' style={{ marginTop: '70px' }}>
              <PanelSwitch activePanel={activePanel} />
            </div>
          </main>
        </>
      )}
    </>
  );
}
