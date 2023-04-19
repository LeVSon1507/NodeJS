import React from 'react';
import './CityList.css';

function CityList() {
   const cityList = [
      {
         name: 'Dublin',
         subText: '123 properties',
         image: './images/city_1.webp',
      },
      {
         name: 'Reno',
         subText: '533 properties',
         image: './images/city_2.webp',
      },
      {
         name: 'Austin',
         subText: '532 properties',
         image: './images/city_3.webp',
      },
   ];
   const renderTypeList = () => {
      return cityList.map(({ image, subText, name }) => {
         return (
            <div className='cityListContainer' key={name}>
               <div className='cityItem'>
                  <img src={image} alt='cityImage' />
                  <h1 className='cityName'>{name}</h1>
                  <h3 className='cityCount'>{subText}</h3>
               </div>
            </div>
         );
      });
   };
   return <div className='cityList'>{renderTypeList()}</div>;
}

export default CityList;
