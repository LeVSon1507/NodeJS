import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./BookingPage.css";
import { DateRange } from "react-date-range";
import Select from 'react-select';
import { useSelector } from "react-redux";

function BookingPage() {
   const hotelId = useParams().hotelID;
   const [dataDetail, setDataDetail] = useState({})
   const searchData = useSelector(state => state.searchReducer.searchData);
   const [selectedRooms, setSelectedRooms] = useState([]);
   console.log("🚀 ~ file: BookingPage.js:11 ~ BookingPage ~ selectedRooms:", selectedRooms)
   const [isLoading, setIsLoading] = useState(false);
   const [dates, setDates] = useState([
      {
         startDate: searchData.dateStart || new Date(),
         endDate: searchData.dateEnd || new Date(),
         key: 'selection',
      },
   ]);
   const paymentOptions = [
      { value: 'Card', label: 'Credit Card' },
      { value: 'Cash', label: 'Cash' },
   ];
   const [selectedOption, setSelectedOption] = useState(null);

   const handleChange = (selectedOption) => {
      setSelectedOption(selectedOption);
   };

   React.useEffect(() => {
      setIsLoading(true);
      try {
         const fetchData = async () => {
            const result = await axios.get(`http://localhost:5000/api/hotel/getHotelDetail?id=${hotelId}`);
            if (result.status === 200) {
               setDataDetail(result.data);
            }
         };
         fetchData();
         setIsLoading(false);
      } catch (error) {
         console.log(error);
         setIsLoading(false);
      }
   }, [hotelId]);
   const dataDetailResults = dataDetail?.results;
   const dataDetailRooms = dataDetail?.roomsList;
   const handleSelect = (e) => {
      const checked = e.target.checked;
      const value = e.target.value;
      setSelectedRooms(
         checked
            ? [...selectedRooms, value]
            : selectedRooms.filter((item) => {
               return item !== value;
            })
      );
   };

   console.log("🚀 ~ file: BookingPage.js:37 ~ BookingPage ~ dataDetailRooms:", dataDetailRooms)
   return (
      <div>
         {isLoading ? (
            <div>Loading...</div>
         ) : (
            <div className="wrap-container">
               <div className="row">
                  <div className="col-md-9">
                     <h3 className="nameBookform">{dataDetailResults?.name}</h3>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores sapiente provident neque repellat. Nobis sunt cumque quod magnam officiis nihil eligendi, laboriosam minus id nisi beatae earum eius labore unde!</p>
                  </div>
                  <div className="col-md-3">
                     <div className='hotelDetailsPriceB'>
                        <h2>
                           <b>$</b> (9 nights)
                        </h2>
                        <button >Reserve or Book Now!</button>
                     </div>
                  </div>
               </div>
               <div className="row tablePick">
                  <div className="col-md-4 datesPicker">
                     <h3>Dates</h3>
                     <div>
                        <DateRange
                           onChange={item => setDates([item.selection])}
                           minDate={new Date()}
                           ranges={dates}
                           editableDateInputs={true}
                           moveRangeOnFirstSelection={false}
                           className='dateBookingPage'
                        />
                     </div>
                  </div>
                  <form className="col-md-8">
                     <h3>Reserve Info</h3>
                     <div className="form-group">
                        <label htmlFor="">Your Full Name:</label>
                        <input type="text"
                           placeholder="Full Name"
                           name="name"
                        // value={data?.name}
                        />
                     </div>
                     <div className="form-group">
                        <label htmlFor="">Your Email:</label>
                        <input type="text"
                           placeholder="Email"
                           name="email"
                        // value={data?.email}
                        />
                     </div>
                     <div className="form-group">
                        <label htmlFor="">Your Phone Number:</label>
                        <input type="text"
                           placeholder="Phone Number"
                           name="phone"
                        // value={data?.phone}
                        />
                     </div>
                     <div className="form-group">
                        <label htmlFor="">Your Identity Card Number:</label>
                        <input type="text"
                           placeholder="Card Number"
                           name="card"
                        // value={data?.card}
                        />
                     </div>
                  </form>
               </div>
               <h3 className="nameBookform">Select Rooms</h3>
               <div className="row">
                  {dataDetailRooms?.map((item) => (
                     <div className="col-md-6">
                        <div className="rItem col-md-12" key={item._id}>
                           <div className="rItemInfo">
                              <div className="rTitle">{item.title}</div>
                              <div className="rDesc">{item.desc}</div>
                              <div className="rMax">
                                 <b> Max people: {item.maxPeople}</b>
                              </div>
                              <div className="rPrice">${item.price}</div>
                           </div>
                           <div className="rSelectRooms">
                              {item.roomNumbers.map((roomNumber) => {
                                 return (
                                    <div className="room">
                                       <label>{roomNumber}</label>
                                       <input
                                          type="checkbox"
                                          value={roomNumber}
                                          onChange={handleSelect}
                                       //TODO: check if room is available
                                       //  disabled={!isAvailable(roomNumber)}
                                       />
                                    </div>
                                 );
                              })}
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
               <h3> Total Bill: $700</h3>
              <div className="col-md-12 bottom">
               <div className="col-md-4">
               <Select
                  value={selectedOption}
                  onChange={handleChange}
                  options={paymentOptions}
                  placeholder="Select payment method"
               />
               </div>
               <div className="col-md-7">
               <button className="btn btn-primary">Reserve Now</button>
               </div>
              </div>
            </div>
         )}
      </div>
   );
}

export default BookingPage;
