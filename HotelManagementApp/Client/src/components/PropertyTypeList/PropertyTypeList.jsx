import React from 'react';
import './PropertyTypeList.css';

function PropertyTypeList({data}) {
   const typeList = [
      {
         name: 'Hotels',
         count: data?.countByType?.hotel ||0,
         image: './images/type_1.webp',
      },
      {
         name: 'Apartments',
         count: data?.countByType?.apartments ||0,
         image: './images/type_2.jpg',
      },
      {
         name: 'Resorts',
         count: data?.countByType?.resorts ||0,
         image: './images/type_3.jpg',
      },
      {
         name: 'Villas',
         count: data?.countByType?.villas ||0,
         image: './images/type_4.jpg',
      },
      {
         name: 'Cabins',
         count: data?.countByType?.cabins ||0,
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
