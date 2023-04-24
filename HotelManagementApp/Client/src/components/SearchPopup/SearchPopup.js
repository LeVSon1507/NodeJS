import React, { useEffect, useState } from "react";
import { DateRange } from "react-date-range";
import './SearchPopup.css'
import { format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { setSearchData } from "../../redux/reducer";
import { useNavigate } from "react-router-dom";

function SearchPopup() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const searchData = useSelector(state => state.searchReducer.searchData);
    const [openDate, setOpenDate] = useState(false);
    const [location, setLocation] = useState(searchData.city);
    const [options, setOptions] = useState({
        adult: searchData.numAdult || 1,
        children: searchData.numChildren || 0,
        room: searchData.numRoom || 1,
    });
    const [dates, setDates] = useState([
        {
            startDate: searchData.dateStart || new Date(),
            endDate: searchData.dateEnd || new Date(),
            key: 'selection',
        },
    ]);
    useEffect(() => {
        setLocation(searchData.city);
        setOptions({
            adult: searchData.numAdult || 1,
            children: searchData.numChildren || 0,
            room: searchData.numRoom || 1,
        });
        setDates([
            {
                startDate: searchData.dateStart || new Date(),
                endDate: searchData.dateEnd || new Date(),
                key: 'selection',
            },
        ]);
    }, [searchData]);
    const handleChange = e => {
        setLocation(e.target.value);
    };
    const handleOpenModal = () => {
        setOpenDate(!openDate);
    };
    // TODO: handle search
    const handleOption = (name, operation) => {
        setOptions(prev => ({
            ...prev,
            [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
        }));
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
            if (location && dataSearch) {
                dispatch(setSearchData(dataSearch));
            } else if (!location) {
                alert('Please enter your destination');
            } else if (!dataSearch.dateEnd || !dataSearch.dateStart) {
                alert('Please enter your date');
            }
        }
    }
    return (
        <div className='listSearch'>
            <h1 className='lsTitle'>Search</h1>
            <div className='lsItem'>
                <label>Destination</label>
                <input
                    type='text'
                    className='inputBox'
                    placeholder='Where are you going?'
                    onChange={handleChange}
                    value={location}
                />
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
                            value={searchData.numAdult}
                        />
                    </div>
                    <div className='lsOptionItem'>
                        <span className='lsOptionText'>Children</span>
                        <input
                            type='number'
                            min={0}
                            className='lsOptionInput'
                            value={searchData.numChildren}
                        />
                    </div>
                    <div className='lsOptionItem'>
                        <span className='lsOptionText'>Room</span>
                        <input
                            type='number'
                            min={1}
                            className='lsOptionInput'
                            value={searchData.numRoom}
                        />
                    </div>
                </div>
            </div>
            <button onClick={handleBtnSearch}>Search</button>
        </div>

    )
}

export default SearchPopup;
