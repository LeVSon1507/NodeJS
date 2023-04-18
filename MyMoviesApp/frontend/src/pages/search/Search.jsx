import React, { useState } from 'react';
import './Search.css';
import NavBar from '../../components/NavBar/NavBar';
import SearchForm from '../../components/SearchForm/SearchForm';
import { API_KEY } from '../../config';
import ResultList from '../../components/ResultList/ResultList';

const Search = () => {
   const [searchValue, setSearchValue] = useState('');
   const [isSearch, setIsSearch] = useState(false);
   const url = `/search/movie?api_key=${API_KEY}&language=en&query=${searchValue}`;
   const handleSearchValue = e => {
      setSearchValue(e.target.value);
   };
   const handleSearch = () => {
      setIsSearch(true);
   };
   const handleReset = () => {
      setIsSearch(false);
      setSearchValue('');
   };

   return (
      <div className='searchContainer'>
         <NavBar />
         <SearchForm
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            handleSearchValue={handleSearchValue}
            handleSearch={handleSearch}
            handleReset={handleReset}
         />
         <h2>Search Result</h2>
         <ResultList url={url} isSearch={isSearch} />
      </div>
   );
};

export default Search;
