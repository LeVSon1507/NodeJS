import React from 'react';
import './HotelList.css';

function HotelList() {
   const listHotel = [
      {
         name: 'Aparthotel Stare Miasto',
         city: 'Madrid',
         price: 120,
         rate: 8.9,
         type: 'Excellent',
         image_url: './images/hotel_1.webp',
      },
      {
         name: 'Comfort Suites Airport',
         city: 'Austin',
         price: 140,
         rate: 9.3,
         type: 'Exceptional',
         image_url: './images/hotel_2.jpg',
      },
      {
         name: 'Four Seasons Hotel',
         city: 'Lisbon',
         price: 99,
         rate: 8.8,
         type: 'Excellent',
         image_url: './images/hotel_3.jpg',
      },
      {
         name: 'Hilton Garden Inn',
         city: 'Berlin',
         price: 105,
         rate: 8.9,
         type: 'Excellent',
         image_url: './images/hotel_4.jpg',
      },
   ];
   const renderHotelList = () => {
      return listHotel.map(({ name, city, price, rate, type, image_url }, i) => {
         return (
            <div className='hotelListWrap' key={`${name}${i}}`}>
               <img src={image_url} alt='hotel' />
               <a href='./detail'>{name}</a>
               <p>{city}</p>
               <h5>Starting from ${price}</h5>
               <div className='rateWrap'>
                  <div className='rate'>{rate}</div>
                  <p className='type'>{type}</p>
               </div>
            </div>
         );
      });
   };
   return <div className='hotelListContainer'>{renderHotelList()}</div>;
}

export default HotelList;
