// external
import React, { useState } from 'react';
import { format } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
// internal
import './Header.css';

// icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCalendar, faFemale } from '@fortawesome/free-solid-svg-icons';

function Header() {
   const [openDate, setOpenDate] = useState(false);

   const [dates, setDates] = useState([
      {
         startDate: new Date(),
         endDate: new Date(),
         key: 'selection',
      },
   ]);
   const handleOpenModal = () => {
      setOpenDate(!openDate);
   };
   const handleBtnSearch = () => {
      window.location.replace('./Search');
   };

   return (
      <div className='headerContainer'>
         <div className='headerWrap'>
            {/* headerHead */}
            <div className='headerHeadTitle'>
               <h1 className='title'>A lifetime of discounts? It's Genius.</h1>
               <p className='subtitle'>
                  Get rewarded for your travels - unlock instant savings of 10% or more with a free
                  account
               </p>
               <button className='headerBtn'>Sign in/Register</button>
            </div>
            {/* searchBar */}
            <div className='searchBar'>
               <div className='inputBoxWrap'>
                  <FontAwesomeIcon icon={faBed} className='icon' />
                  <input type='text' className='inputBox' placeholder='Where are you going?' />
               </div>

               <div className='inputBoxWrap'>
                  <FontAwesomeIcon icon={faCalendar} className='icon' />
                  <span onClick={handleOpenModal} className='dateChoose'>
                     {`${format(dates[0].startDate, 'MM/dd/yyyy')} 
                     to 
                     ${format(dates[0].endDate, 'MM/dd/yyyy')}`}
                  </span>
                  {openDate && (
                     <DateRange
                        onChange={item => setDates([item.selection])}
                        minDate={new Date()}
                        ranges={dates}
                        editableDateInputs={true}
                        moveRangeOnFirstSelection={false}
                        className='date'
                     />
                  )}
               </div>

               <div className='inputBoxWrap'>
                  <FontAwesomeIcon icon={faFemale} className='icon' />
                  <p>1 adult ~ 0 children ~ 1 room</p>
               </div>

               <button className='btnSearch' onClick={handleBtnSearch}>
                  Search
               </button>
            </div>
         </div>
      </div>
   );
}

export default Header;
