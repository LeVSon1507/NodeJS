import React, { useState } from 'react';
import './Search.css';
import NavBar from '../../components/NavBar/NavBar';
import SearchForm from '../../components/SearchForm/SearchForm';
import { API_KEY } from '../../config';
import ResultList from '../../components/ResultList/ResultList';

const Search = () => {
   const [searchValue, setSearchValue] = useState('');
   const [isSearch, setIsSearch] = useState(false);
   
   return (
      <div className='searchContainer'>
         <NavBar />
         <SearchForm
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            setIsSearch={setIsSearch}
         />
         <h2>Search Result</h2>
         <ResultList  isSearch={isSearch} searchValue={searchValue}/>
      </div>
   );
};

export default Search;
