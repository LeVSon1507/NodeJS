import React, { useState } from "react";
import { DateRange } from "react-date-range";
import './SearchPopup.css'
import { format } from "date-fns";

function SearchPopup({ handleClick }) {
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
    return (
        <div className='listSearch'>
            <h1 className='lsTitle'>Search</h1>
            <div className='lsItem'>
                <label>Destination</label>
                <input type="text" className="destination" />
            </div>
            <div className='lsItem'>
                <label>Check-in Date</label>
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
            <div className='lsItem'>
                <label>Options</label>
                <div className='lsOptions'>
                    <div className='lsOptionItem'>
                        <span className='lsOptionText'>
                            Min price <small>per night</small>
                        </span>
                        <input
                            type='number'
                            className='lsOptionInput'
                        />
                    </div>
                    <div className='lsOptionItem'>
                        <span className='lsOptionText'>
                            Max price <small>per night</small>
                        </span>
                        <input
                            type='number'
                            className='lsOptionInput'
                        />
                    </div>
                    <div className='lsOptionItem'>
                        <span className='lsOptionText'>Adult</span>
                        <input
                            type='number'
                            min={1}
                            className='lsOptionInput'
                        />
                    </div>
                    <div className='lsOptionItem'>
                        <span className='lsOptionText'>Children</span>
                        <input
                            type='number'
                            min={0}
                            className='lsOptionInput'
                        />
                    </div>
                    <div className='lsOptionItem'>
                        <span className='lsOptionText'>Room</span>
                        <input
                            type='number'
                            min={1}
                            className='lsOptionInput'
                        />
                    </div>
                </div>
            </div>
            <button onClick={handleClick}>Search</button>
        </div>

    )
}

export default SearchPopup;
