// 1. IMPORT REACT
import React, { useState, useEffect } from 'react';

// 2. ADDITIONAL IMPORTS
import axios from 'axios';

// 3. CREATE COMPONENT
const Movies = () => {
  // LETS CREATE A VARIABLE TO HOLD OUR APPLICATION STATE
  const [movies, setMovies] = useState([]);
  // LETS CREATE OUR EFFECT
  useEffect(() => {
    // Create a helper function to make api calls
    const helperFunction = async () => {
      // Retrieve data from api
      const response = await axios.get(
        'https://omdbapi.com/?s=girl&apikey=4a638f24&'
      );
      // Lets retrieve the data from the response object
      const data = response.data;
      setMovies(data.Search);

      //   let moviesList = [];
      //   data.Search.forEach((element) => moviesList.push(element));
      //   console.log('h', moviesList);
      //   setMovies([...movies, moviesList]);
    };
    helperFunction();
  }, []);

  const moviesList = movies.map((element) => {
    return <p>{element.Title}</p>;
  });

  return (
    <div>
      <span>{moviesList}</span>
    </div>
  );
};

// 4. EXPORT COMPONENT
export default Movies;
