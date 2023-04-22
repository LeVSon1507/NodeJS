import React from 'react';
import axios from 'axios';
// internal
import './Detail.css';
import Navbar from '../../components/Navbar/Navbar';
import Subscribe from '../../components/Subscribe/Subscribe';
import Footer from '../../components/Footer/Footer';
// icon
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate, useParams } from 'react-router-dom';

function Detail() {
   const navigate = useNavigate();
   const hotelId = useParams().hotelID;
   const handleClickBookNow = () => {
      navigate(`/booking/${hotelId}`,{state: {hotelId: hotelId}})
   };
   const handleOpen = () => {};
   const [dataDetail, setDataDetail] = React.useState({})
   const [isLoading, setIsLoading] = React.useState(false);
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
         <Navbar />
         {isLoading ? (
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
                  <span className='hotelDistance'>Excellent location — {dataDetail.distance}m from center</span>
                  <span className='hotelPriceHighlight'>
                  Book a stay over ${dataDetail.cheapestPrice} at this property and get a free airport taxi
                  </span>
                  <div className='hotelImages'>
                     {dataDetail.photos?.map((photo, index) => (
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
                        <p className='hotelDesc'>{dataDetail.desc}</p>
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
