import React from 'react';
import './CityList.css';

function CityList({ data }) {
   const cityList = [
      {
         name: 'Ha Noi',
         subText: `${data?.countByCity?.hanoi ||0} properties`,
         image: './images/HN.jpg',
      },
      {
         name: 'HCM',
         subText: `${data?.countByCity?.hcm ||0} properties`,
         image: './images/HCM.jpg',
      },
      {
         name: 'Da Nang',
         subText: `${data?.countByCity?.danang ||0} properties`,
         image: './images/DN.jpg',
      },
   ];
   const renderTypeList = () => {
      return cityList.map(({ image, subText, name }) => {
         return (
            <div className='cityListContainer' key={name}>
               <div className='cityItem'>
                  <img
                     src={image}
                     alt='cityImage'
                     //  width={50}
                     //  height={50}
                  />
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
