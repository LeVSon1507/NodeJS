import React from 'react';

// icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBed, faPlane, faCar, faTaxi } from '@fortawesome/free-solid-svg-icons';

// internal
import './Navbar.css';

library.add(faBed, faPlane, faCar, faTaxi);

const iconList = [
   {
      type: 'Stays',
      icon: 'fa-bed',
      active: true,
   },
   {
      type: 'Flights',
      icon: 'fa-plane',
      active: false,
   },
   {
      type: 'Car rentals',
      icon: 'fa-car',
      active: false,
   },
   {
      type: 'Attractions',
      icon: 'fa-bed',
      active: false,
   },
   {
      type: 'Airport taxis',
      icon: 'fa-taxi',
      active: false,
   },
];
const handleClickNavbarTitle = () => {
   window.location.replace('./');
};

const Navbar = () => {
   const renderIconList = listIcon => {
      return listIcon.map(({ icon, type, active }) => (
         <div className='iconItemWrap' key={type}>
            <div className={`iconItem ${active && 'active'}`}>
               <FontAwesomeIcon icon={icon} className='icon' />
               <p>{type}</p>
            </div>
         </div>
      ));
   };

   return (
      <div className='navbarContainer'>
         <div className='navbarWrap'>
            <div className='navbarHeader'>
               <p className='navbarText' onClick={handleClickNavbarTitle}>
                  Booking Website
               </p>
               <div>
                  <button className='navbarBtn'>Register</button>
                  <button className='navbarBtn'>Login</button>
               </div>
            </div>
            {/* menu icon */}
            <div className='navbarIconListContainer'>{renderIconList(iconList)}</div>
         </div>
      </div>
   );
};

export default Navbar;
