// external
import React, { memo, useEffect, useState } from 'react';
import { format } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import { useNavigate } from 'react-router-dom';
// internal
import './Header.css';

// icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCalendar, faPerson } from '@fortawesome/free-solid-svg-icons';

function Header() {
   const {
      city: locationInit,
      // dateStart: dateStartInit,
      // dateEnd: dateEndInit,
      numAdult,
      numChildren,
      numRoom: numRoomInit,
   } = JSON.parse(localStorage.getItem('searchData')) || {};
   // console.log("🚀 ~ file: Header.jsx:24 ~ Header ~ dateStartInit:", dateStartInit)

   const navigate = useNavigate();
   const [openDate, setOpenDate] = useState(false);
   const [location, setLocation] = useState(locationInit);
   const dateStartInit = localStorage.getItem('searchData')
      ? JSON.parse(localStorage.getItem('searchData')).dateStart
      : new Date();
   const dateEndInit = localStorage.getItem('searchData')
      ? JSON.parse(localStorage.getItem('searchData')).dateEnd
      : new Date();

   const defaultDates = {
      startDate:
         dateStartInit instanceof Date && !isNaN(dateStartInit) ? dateStartInit : new Date(),
      endDate: dateEndInit instanceof Date && !isNaN(dateEndInit) ? dateEndInit : new Date(),
      key: 'selection',
   };

   const [dates, setDates] = useState([defaultDates]);
   const [options, setOptions] = useState({
      adult: numAdult,
      children: numChildren,
      room: numRoomInit,
   });
   const [openOptions, setOpenOptions] = useState(false);
   useEffect(() => {
      setLocation(locationInit);
   }, [locationInit]);

   const handleChange = e => {
      setLocation(e.target.value);
   };
   const handleOption = (name, operation) => {
      setOptions(prev => ({
         ...prev,
         [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
      }));
   };

   const handleOpenModal = () => {
      setOpenDate(!openDate);
   };
   const handleBtnSearch = () => {
      const { startDate, endDate } = dates[0];
      const isDateValid =
         startDate instanceof Date &&
         !isNaN(startDate) &&
         endDate instanceof Date &&
         !isNaN(endDate);

      if (isDateValid) {
         const dataSearch = {
            city: location,
            dateStart: startDate,
            dateEnd: endDate,
            numPeople: options.adult + options.children,
            numAdult: options.adult,
            numChildren: options.children,
            numRoom: options.room,
         };
         localStorage.setItem('searchData', JSON.stringify(dataSearch));
         navigate('./Search');
      }
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
                  <input
                     type='text'
                     className='inputBox'
                     placeholder='Where are you going?'
                     onChange={handleChange}
                     value={location}
                  />
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
                  <FontAwesomeIcon icon={faPerson} className='headerIcon' />
                  <span
                     onClick={() => setOpenOptions(!openOptions)}
                     className='headerSearchText'
                  >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
                  {openOptions && (
                     <div className='options'>
                        <div className='optionItem'>
                           <span className='optionText'>Adult</span>
                           <div className='optionCounter'>
                              <button
                                 disabled={options.adult <= 1}
                                 className='optionCounterButton'
                                 onClick={() => handleOption('adult', 'd')}
                              >
                                 -
                              </button>
                              <span className='optionCounterNumber'>{options.adult}</span>
                              <button
                                 className='optionCounterButton'
                                 onClick={() => handleOption('adult', 'i')}
                              >
                                 +
                              </button>
                           </div>
                        </div>
                        <div className='optionItem'>
                           <span className='optionText'>Children</span>
                           <div className='optionCounter'>
                              <button
                                 disabled={options.children <= 0}
                                 className='optionCounterButton'
                                 onClick={() => handleOption('children', 'd')}
                              >
                                 -
                              </button>
                              <span className='optionCounterNumber'>{options.children}</span>
                              <button
                                 className='optionCounterButton'
                                 onClick={() => handleOption('children', 'i')}
                              >
                                 +
                              </button>
                           </div>
                        </div>
                        <div className='optionItem'>
                           <span className='optionText'>Room</span>
                           <div className='optionCounter'>
                              <button
                                 disabled={options.room <= 1}
                                 className='optionCounterButton'
                                 onClick={() => handleOption('room', 'd')}
                              >
                                 -
                              </button>
                              <span className='optionCounterNumber'>{options.room}</span>
                              <button
                                 className='optionCounterButton'
                                 onClick={() => handleOption('room', 'i')}
                              >
                                 +
                              </button>
                           </div>
                        </div>
                     </div>
                  )}
               </div>
               <button className='btnSearch' onClick={handleBtnSearch}>
                  Search
               </button>
            </div>
         </div>
      </div>
   );
}

export default memo(Header);
