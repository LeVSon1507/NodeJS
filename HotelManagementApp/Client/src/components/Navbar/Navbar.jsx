import React from 'react';
import { useNavigate } from 'react-router-dom';
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


const Navbar = ({isSmall}) => {
   const token = localStorage.getItem('token');
   const userEmail = localStorage.getItem('userEmail');
   const navigate = useNavigate();
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
   const handleClickNavbarTitle = () => {
      window.location.replace('./');
   };
   
   const goToRegisterPage = () => {
      navigate('/register')
   }
   const goToLoginPage = () => {
      navigate('/login')
   }

   const goToTransactions = () => {
      navigate('/transactions')
   }

   const handleLogout = () => {
      localStorage.removeItem('token');
      localStorage.removeItem('userEmail');
      navigate('/login')
   }
   const isShowIconList = !isSmall ? true: false;
   

   return (
      <div className='navbarContainer'>
         <div className='navbarWrap'>
            <div className='navbarHeader'>
               <p className='navbarText' onClick={handleClickNavbarTitle}>
                  Booking Website
               </p>
             {token ?
              <div className='grBtnEmail'>
                  <p className='userEmail'>{userEmail}</p>
                  <button className='navbarBtn' onClick={goToTransactions}>Transactions</button>
                  <button className='navbarBtn' onClick={handleLogout}>Logout</button>
              </div>

               : 
               <div className='grBtn'>
                  <button className='navbarBtn' onClick={goToRegisterPage}>Register</button>
                  <button className='navbarBtn' onClick={goToLoginPage}>Login</button>
               </div>
               }  
              
            </div>
            {/* menu icon */}
         {isShowIconList && <div className='navbarIconListContainer'>{renderIconList(iconList)}</div>}  
         </div>
      </div>
   );
};

export default Navbar;
