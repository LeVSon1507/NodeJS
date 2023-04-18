import { useEffect, useState } from 'react';
import axios from 'axios';

function usePost(url,param,token,_body,_dependencies) {
   const [results, setResults] = useState({});
   const [isLoading, setIsLoading] = useState(false);

   const handleResponse = async response => {
      if (response.status === 200) {
         const data = await response.json();
         setResults(data);
      }
      setIsLoading(false);
   };


   const postData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.post(
          `http://localhost:3001/api/movies/${url}?${param}`,
          {_body},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        handleResponse(response);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
   }
  
   useEffect(() => {
    postData();
      // eslint-disable-next-line
   }, [url,token,_body,_dependencies]);

   return { results, isLoading };
}

export default usePost;
