import { useEffect, useState } from 'react';

function useFetch(url,param,_method) {
   const [results, setResults] = useState({});
   const [isLoading, setIsLoading] = useState(false);

   const handleResponse = async response => {
      if (response.status === 200) {
         const data = await response.json();
         setResults(data);
      }
      setIsLoading(false);
   };

   const fetchData = async () => {
      setIsLoading(true);
      try {
         const response = await fetch(`http://localhost:3001/api/movies/${url}?${param}`,{
            method: _method,
            headers: {
               Authorization: 'Bearer RYoOcWM4JW',
               'Content-Type': 'application/json'
            }
         });
         handleResponse(response);
      } catch (error) {
         console.log(error);
         setIsLoading(false);
      }
   };
  
   useEffect(() => {
      fetchData();
      // eslint-disable-next-line
   }, [url,param]);

   const reLoad = async () => {
      setIsLoading(true);
      try {
         const response = await fetch(`https://api.themoviedb.org/3${url}`);
         handleResponse(response);
      } catch (error) {
         console.log(error);
         setIsLoading(false);
      }
   };

   return { results, isLoading, reLoad };
}

export default useFetch;
