// internal
import { useEffect, useState } from 'react';
import axios from 'axios';
import CityList from '../../components/CityList/CityList';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import HotelList from '../../components/HotelList/HotelList';
import Navbar from '../../components/Navbar/Navbar';
import PropertyTypeList from '../../components/PropertyTypeList/PropertyTypeList';
import Subscribe from '../../components/Subscribe/Subscribe';
import './Home.css';

const Home = () => {
   const [results, setResults] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   useEffect(() => {
      const fetchResults = async () => {
         setIsLoading(true);
         try {
            const response = await axios.get('http://localhost:5000/api/hotel/getCount');
            if(response.status === 200) {
               setResults(response.data.result);
            }
            setIsLoading(false);
         } catch (error) {
            console.log(error);
            setIsLoading(false);
         }
      };
      setIsLoading(false);
      fetchResults();
   }, []);
   return (
      <>
         <Navbar />
         <Header />
         {!isLoading ? (
            <div className='homeContainer'>
               <CityList data={results}/>
               <h3>Browse by property type</h3>
               <PropertyTypeList data={results}/>
               <h3>Homes guests love</h3>
               <HotelList data={results}/>
            </div>
         ) : (
            <h1>Loading...</h1>
         )}
         <Subscribe />
         <Footer />
      </>
   );
};

export default Home;
