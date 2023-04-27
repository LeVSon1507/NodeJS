import React from 'react';
import axios from 'axios';
// internal
import './Transaction.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
// icon
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Transaction() {
   const navigate = useNavigate();
   const searchData = useSelector(state => state.searchReducer.searchData);
   const userName = JSON.parse(localStorage.getItem('user')).userName || '';

   const hotelId = useParams().hotelID;
   const [isLoading, setIsLoading] = React.useState(false);
   const [results, setResults] = React.useState([]);
   console.log('🚀 ~ file: Transaction.jsx:19 ~ Transaction ~ results:', results);
   React.useEffect(() => {
      setIsLoading(true);
      try {
         const fetchData = async () => {
            const result = await axios.get(
               `http://localhost:5000/api/user/transaction?username=${userName}`
            );
            if (result.status === 200) {
               setResults(result.data.results);
            }
         };
         fetchData();
         setIsLoading(false);
      } catch (error) {
         console.log(error);
         setIsLoading(false);
      }
   }, [hotelId]);
   function formatDate(dates) {
      const date = new Date(dates);
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const year = date.getFullYear().toString();
      return `${month}/${day}/${year}`;
   }

   const renderRoom = results => {
      return <p>{results.room.map((room, index) => room.roomNumber).join(', ') || ''} </p>;
   };

   return (
      <div>
         <Navbar />
         {isLoading ? (
            <h1>Loading...</h1>
         ) : (
            <div className='wrapTable'>
               <div className='container-fluid'>
                  <div className='tableTrans'>
                     <h5 className='titleTrans'>Your Transactions</h5>
                     <table className='row'>
                        <thead className='col-md-12'>
                           <tr>
                              <th className='id'>#</th>
                              <th className='Hotel'>Hotel</th>
                              <th className='Room'>Room</th>
                              <th className='Date'>Date</th>
                              <th className='Price'>Price</th>
                              <th className='paymed'>Payment Method</th>
                              <th className='Status'>Status</th>
                           </tr>
                        </thead>
                        <tbody>
                           {results.map((result, index) => {
                              const isOdd = (index+1) % 2 !== 0;
                              return (
                                 <tr key={result._id} className={`${isOdd ? 'isOdd' : ''}`}>
                                    <td className='idBody'>0{index + 1}</td>
                                    <td className='HotelBody'>{result.hotelName}</td>
                                    <td className='RoomBody'>{renderRoom(result)}</td>
                                    <td className='DateBody'>
                                       {formatDate(result.dateStart)} - {formatDate(result.dateEnd)}
                                    </td>
                                    <td className='PriceBody'>${result.price}</td>
                                    <td className='paymedBody'>{result.payment}</td>
                                    <td className='StatusBody'>
                                       <div className='bookedStt'>{result.status}</div>
                                    </td>
                                 </tr>
                              );
                           })}
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         )}
         <Footer />
      </div>
   );
}

export default Transaction;
