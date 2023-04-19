import Navbar from '../../components/Navbar/Navbar';
import SearchList from '../../components/SearchList/SearchList';
import SearchPopup from '../../components/SearchPopup/SearchPopup';
import { searchData } from './dataSearch';
import './Search.css';

const Search = () => {
   const handleClick = () => {};
   const handleBtnSeeDetail = () => {
      window.location.replace('./Detail');
   };
   let loading = false;
   return (
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
                        {searchData.map(item => (
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
