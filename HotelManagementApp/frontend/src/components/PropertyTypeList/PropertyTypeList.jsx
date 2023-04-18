import React from 'react';
import './PropertyTypeList.css';

function PropertyTypeList() {
   const typeList = [
      {
         name: 'Hotels',
         count: 233,
         image: './images/type_1.webp',
      },
      {
         name: 'Apartments',
         count: 2331,
         image: './images/type_2.jpg',
      },
      {
         name: 'Resorts',
         count: 2331,
         image: './images/type_3.jpg',
      },
      {
         name: 'Villas',
         count: 2331,
         image: './images/type_4.jpg',
      },
      {
         name: 'Cabins',
         count: 2331,
         image: './images/type_5.jpg',
      },
   ];
   const renderTypeList = () => {
      return typeList.map(({ name, count, image }, i) => {
         return (
            <div className='typeListWrap' key={`${name}${i}}`}>
               <img src={image} alt='typeImage' className='typeImage' />
               <h4>{name}</h4>
               <p>{count} hotels</p>
            </div>
         );
      });
   };
   return <div className='typeContainer'>{renderTypeList()}</div>;
}

export default PropertyTypeList;
