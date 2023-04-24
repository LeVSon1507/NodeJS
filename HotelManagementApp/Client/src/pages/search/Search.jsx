import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import SearchList from '../../components/SearchList/SearchList';
import SearchPopup from '../../components/SearchPopup/SearchPopup';
import { useSelector } from 'react-redux';
import './Search.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Search = () => {
   const navigate=  useNavigate();
   const searchData = useSelector(state => state.searchReducer.searchData);
   const [searchResults, setSearchResults] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   useEffect(() => {
      try {
         setIsLoading(true);
         const fetchData = async () => {
            const body = {
                  city: searchData.city,
                  dateStart: searchData.dateStart,
                  dateEnd: searchData.dateEnd,
                  numPeople: searchData.numPeople,
                  numRooms: searchData.numRooms,
               }
            const res = await axios.post(
               'http://localhost:5000/api/hotel/search',
               //add body here city, dateStart, dateEnd, numPeople, numRooms
               body
            );
            if (res.status === 200) {
               setSearchResults(res.data.results);
            }
            setIsLoading(false);
         };
         fetchData();
      } catch (error) {
         console.log(error);
         setIsLoading(false);
      }
   }, []);

   const handleClick = () => {};
   const handleBtnSeeDetail = (_id) => {
      navigate(`/detail/${_id}`)
   };
   let loading = false;
   return isLoading ? (
      <>
         <h1>Loading...</h1>
      </>
   ) : (
      <>
         <Navbar />
         <div className='listContainer'>
            <div className='listWrapper'>
               <SearchPopup handleClick={handleClick} />
               <div className='listResult'>
                  {loading ? (
                     <h1>Loading...</h1>
                  ) : (
                     <>
                        {searchResults?.map(item => (
                           <SearchList
                              item={item}
                              key={item._id}
                              handleBtnSeeDetail={handleBtnSeeDetail}
                           />
                        ))}
                     </>
                  )}
               </div>
            </div>
         </div>
      </>
   );
};

export default Search;
