import React from 'react';

// internal
import './Detail.css';
import Navbar from '../../components/Navbar/Navbar';
import Subscribe from '../../components/Subscribe/Subscribe';
import Footer from '../../components/Footer/Footer';
import { dataDetail } from './dataDetail';

// icon
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Detail() {
   const handleClickBookNow = () => {};
   const handleOpen = () => {};
   let loading = false;
   return (
      <div>
         <Navbar />
         {loading ? (
            <h1>Loading...</h1>
         ) : (
            <div className='hotelContainer'>
               <div className='hotelWrapper'>
                  <button className='bookNow' onClick={handleClickBookNow}>
                     Reserve or Book Now!
                  </button>
                  <h1 className='hotelTitle'>{dataDetail.name}</h1>
                  <div className='hotelAddress'>
                     <FontAwesomeIcon icon={faLocationDot} />
                     <span>{dataDetail.address}</span>
                  </div>
                  <span className='hotelDistance'>{dataDetail.distance}</span>
                  <span className='hotelPriceHighlight'>{dataDetail.price}</span>
                  <div className='hotelImages'>
                     {dataDetail.photos.map((photo, index) => (
                        <div className='hotelImgWrapper' key={index}>
                           <img
                              onClick={() => handleOpen(index)}
                              src={photo}
                              alt='hotelImg'
                              className='hotelImg'
                           />
                        </div>
                     ))}
                  </div>
                  <div className='hotelDetails'>
                     <div className='hotelDetailsTexts'>
                        <h1 className='hotelTitle'>{dataDetail.title}</h1>
                        <p className='hotelDesc'>{dataDetail.description}</p>
                     </div>
                     <div className='hotelDetailsPrice'>
                        <h1>Perfect for a 9-night stay!</h1>
                        <span>
                           Located in the real heart of Krakow, this property has an excellent
                           location score of 9.8!
                        </span>
                        <h2>
                           <b>${dataDetail.nine_night_price}</b> (9 nights)
                        </h2>
                        <button onClick={handleClickBookNow}>Reserve or Book Now!</button>
                     </div>
                  </div>
               </div>
            </div>
         )}
         <Subscribe />
         <Footer />
      </div>
   );
}

export default Detail;
