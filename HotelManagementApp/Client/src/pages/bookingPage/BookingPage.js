import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./BookingPage.css";
import { DateRange } from "react-date-range";
import Select from 'react-select';
import { useSelector } from "react-redux";

function BookingPage() {
   const hotelId = useParams().hotelID;
   const navigate = useNavigate();
   const [dataDetail, setDataDetail] = useState({})
   const userEmail = JSON.parse(localStorage.getItem('user')).userEmail || '';
   const userName = JSON.parse(localStorage.getItem('user')).userName || '';
   const [selectedOption, setSelectedOption] = useState(null);
   const searchData = useSelector(state => state.searchReducer.searchData);
   const [selectedRooms, setSelectedRooms] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const [phone, setPhone] = useState('');
   const [cardNumber, setCardNumber] = useState('');
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
   const handleSelect = (roomNumber, idRoom, e) => {
      const checked = e.target.checked;
      setSelectedRooms(
         checked
            ? [...selectedRooms, { roomNumber: roomNumber, idRoom: idRoom }]
            : selectedRooms.filter((item) => {
               return item.roomNumber !== roomNumber || item.idRoom !== idRoom;
            })
      );
   };

   // ----------------- Calculate days -----------------
   function calculateDays(dateStart, dateEnd) {
      const oneDay = 24 * 60 * 60 * 1000; // Số mili giây trong một ngày
      const timeDiff = Math.abs(dateEnd.getTime() - dateStart.getTime()); // Độ chênh lệch giữa 2 ngày tính bằng mili giây
      const diffDays = Math.round(timeDiff / oneDay); // Số ngày chênh lệch, làm tròn tới ngày gần nhất
      return diffDays;
   }
   const dateStart = new Date(dates[0].startDate);
   const dateEnd = new Date(dates[0].endDate);
   const days = calculateDays(dateStart, dateEnd) + 1;
   console.log(days);

   // ----------------- Calculate total price -----------------
   const totalPrice = selectedRooms.reduce((acc, cur) => {
      const room = dataDetailRooms.find((item) => item._id === cur.idRoom);
      const roomPrice = room ? room.price : 0;
      return acc + roomPrice * days;
   }, 0);
   console.log(totalPrice);

   const handleBooking = () => {
      if (selectedRooms.length === 0) {
         alert('Please select at least one room');
         return;
      }
      // Kiểm tra các trường thông tin khác có bị rỗng hay không
      if (!userName) {
         alert('Please enter your full name');
         return;
      }
      if (!userEmail) {
         alert('Please enter your email address');
         return;
      }
      if (!selectedOption) {
         alert('Please select a payment method');
         return;
      }
      if (!phone) {
         alert('Please enter your phone number');
         return;
      }
      if (!cardNumber) {
         alert('Please enter your card number');
         return;
      }
      const data = {
         user: userName,
         hotel: hotelId,
         room: selectedRooms.map((room) => {
            return {
               idRoom: room.idRoom,
               roomNumber: room.roomNumber,
            };
         }),
         dateStart: dateStart,
         dateEnd: dateEnd,
         checkIn: new Date(),
         price: totalPrice,
         payment: selectedOption.value,
         status: 'Booked'
      }
      try {
         const bookHotel = async () => {
            const result = await axios.post(`http://localhost:5000/api/transaction`, data);
            if (result.status === 200) {
               console.log(result.data);
               alert('Booked successfully');
               navigate('/')
            }
         }
         bookHotel();
      } catch (error) {
         console.log(error);
      }
   }
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
                           <b>${totalPrice}</b> ({days} nights)
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
                           value={userName}
                        />
                     </div>
                     <div className="form-group">
                        <label htmlFor="">Your Email:</label>
                        <input type="text"
                           placeholder="Email"
                           name="email"
                           value={userEmail}
                        />
                     </div>
                     <div className="form-group">
                        <label htmlFor="">Your Phone Number:</label>
                        <input type="text"
                           placeholder="Phone Number"
                           name="phone"
                           value={phone}
                           onChange={(e) => setPhone(e.target.value)}
                        />
                     </div>
                     <div className="form-group">
                        <label htmlFor="">Your Identity Card Number:</label>
                        <input type="text"
                           placeholder="Card Number"
                           name="card"
                           value={cardNumber}
                           onChange={(e) => setCardNumber(e.target.value)}
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
                                          onChange={(e) => handleSelect(roomNumber, item._id, e)}
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
               <h3> Total Bill: ${totalPrice}</h3>
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
                     <button className="btnBook" onClick={handleBooking}>Reserve Now</button>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
}

export default BookingPage;
