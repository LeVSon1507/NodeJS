import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./BookingPage.css";
import { DateRange } from "react-date-range";

function BookingPage() {
   const hotelId = useParams().hotelID;
   const [dataDetail, setDataDetail] = useState({})
   const [isLoading, setIsLoading] = useState(false);
   const [dates, setDates] = useState([
      {
         startDate: new Date(),
         endDate: new Date(),
         key: 'selection',
      },
   ]);
   React.useEffect(() => {
      setIsLoading(true);
      try {
         const fetchData = async () => {
            const result = await axios.get(`http://localhost:5000/api/hotel/getHotelDetail?id=${hotelId}`);
            if (result.status === 200) {
               setDataDetail(result.data.results);
            }
         };
         fetchData();
         setIsLoading(false);
      } catch (error) {
         console.log(error);
         setIsLoading(false);
      }
   }, [hotelId]);
   return (
      <div>
         {isLoading ? (
            <div>Loading...</div>
         ) : (
            <div className="container-fluid wrap-container">
               <div className="row">
                  <div className="col-md-9">
                     <h3 className="nameBookform">{dataDetail?.name}</h3>
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
                  <div className="col-md-6">
                    <div>
                    <h5>Budget Double Room</h5>
                     <p>Pay nothing until 'daystart'</p>
                     <p>Max people: 2</p>
                     <h5>$350</h5>
                    </div>
                    <div>
                       {/* {room?.map((item, index) => {
                           return (
                              <div key={index}>
                                 <p>room.number</p>
                                 <input type="checkbox" />
                              </div>
                           )
                        }) } */}
                     
                    </div>
                  </div>
                  <div className="col-md-6"></div>
               </div>
            </div>
         )}
      </div>
   );
}

export default BookingPage;
