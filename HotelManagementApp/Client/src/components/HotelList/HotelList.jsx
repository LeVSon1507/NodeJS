import React from 'react';
import './HotelList.css';

function HotelList({data}) {
   const topRatesData = data?.topRates
   // const listHotel = [
   //    {
   //       name: 'Aparthotel Stare Miasto',
   //       city: topRatesData?.city,
   //       price: topRatesData?.cheapestPrice,
   //       rate: 8.9,
   //       type: 'Excellent',
   //       image_url: './images/hotel_1.webp',
   //    },
   //    {
   //       name: 'Comfort Suites Airport',
   //       city: 'Austin',
   //       price: 140,
   //       rate: 9.3,
   //       type: 'Exceptional',
   //       image_url: './images/hotel_2.jpg',
   //    },
   //    {
   //       name: 'Four Seasons Hotel',
   //       city: 'Lisbon',
   //       price: 99,
   //       rate: 8.8,
   //       type: 'Excellent',
   //       image_url: './images/hotel_3.jpg',
   //    },
   //    {
   //       name: 'Hilton Garden Inn',
   //       city: 'Berlin',
   //       price: 105,
   //       rate: 8.9,
   //       type: 'Excellent',
   //       image_url: './images/hotel_4.jpg',
   //    },
   // ];
   const renderHotelList = () => {
      return topRatesData?.map(({ name, city, cheapestPrice, photos }, i) => {
         return (
            <div className='hotelListWrap' key={`${name}${i}}`}>
               <img src={photos[0]} alt='hotel' />
               <a href='./detail' className='name'>{name}</a>
               <p>{city}</p>
               <h5>Starting from ${cheapestPrice}</h5>
            </div>
         );
      });
   };
   return <div className='hotelListContainer'>{renderHotelList()}</div>;
}

export default HotelList;
