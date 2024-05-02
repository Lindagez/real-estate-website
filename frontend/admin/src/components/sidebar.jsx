import { useState } from 'react';

export default function Sidebar({ activePanel, setActivePanel }) {
  const handleClick = title => {
    setActivePanel(title);
  };

  const SidebarMenu = ({ title, icon }) => (
    <div className='position-sticky'>
      <div className='list-group list-group-flush mx-3 mt-4'>
        <button
          className={`list-group-item list-group-item-action py-2 ripple ${
            activePanel === title && 'active'
          }`}
          aria-current='true'
          onClick={() => handleClick(title)}
        >
          <i
            onClick={() => handleClick(title)}
            className={`fa-solid fa-${icon}`}
          ></i>
          <span onClick={() => handleClick(title)} className='mx-2'>
            {title}
          </span>
        </button>
      </div>
    </div>
  );
  return (
    <>
      <nav
        id='sidebarMenu'
        className='collapse d-lg-block sidebar collapse bg-white my-sidebar'
      >
        <div className='list-group list-group-flush mx-3 mt-2'>
          <h3>Dashboards</h3>
        </div>
        <SidebarMenu title='Main' icon='house' />
        <SidebarMenu title='Customers' icon='users' />
        {/* <SidebarMenu title='Registrations' icon='registered' /> */}
        {/* <SidebarMenu title='Orders' icon='shop' /> */}
        <SidebarMenu title='Properties' icon='dollar' />
        <SidebarMenu title='News' icon='newspaper' />
        <SidebarMenu title='Videos' icon='video' />
      </nav>
    </>
  );
}
