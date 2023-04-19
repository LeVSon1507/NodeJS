// internal
import CityList from '../../components/CityList/CityList';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import HotelList from '../../components/HotelList/HotelList';
import Navbar from '../../components/Navbar/Navbar';
import PropertyTypeList from '../../components/PropertyTypeList/PropertyTypeList';
import Subscribe from '../../components/Subscribe/Subscribe';
import './Home.css';

const Home = () => {
   return (
      <>
         <Navbar />
         <Header />
         <div className='homeContainer'>
            <CityList />
            <h3>Browse by property type</h3>
            <PropertyTypeList />
            <h3>Homes guests love</h3>
            <HotelList />
         </div>
         <Subscribe />
         <Footer />
      </>
   );
};

export default Home;
