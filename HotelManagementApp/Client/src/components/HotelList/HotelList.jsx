import React from 'react';
import './HotelList.css';
import {   useNavigate } from 'react-router-dom';

function HotelList({data}) {
   const navigate = useNavigate()
   const goToDetailPage = (_id) => {
      navigate(`/detail/${_id}`,{state: {hotelId: _id}});
   }
   const topRatesData = data?.topRates
   const renderHotelList = () => {
      return topRatesData?.map(({ name, city, cheapestPrice, photos,_id }, i) => {
         return (
            <div className='hotelListWrap' key={`${name}${i}}`}>
               <img src={photos[0]} alt='hotel' />
               <p className='name' onClick={()=>goToDetailPage(_id)}>{name}</p>
               <p>{city}</p>
               <h5>Starting from ${cheapestPrice}</h5>
            </div>
         );
      });
   };
   return <div className='hotelListContainer'>{renderHotelList()}</div>;
}

export default HotelList;
