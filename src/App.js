import './App.css';
import React, { useEffect, useState } from 'react';
import Movie from './Movie';
import Filter from './Filter';
import { motion, AnimatePresence } from 'framer-motion';


function App() {

  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=e220c7eebbb3e36db046e5b0d37adb2a&language=en-US&page=1')
    const movies = await data.json();

    //console.log(movies.results)

    setPopular(movies.results);
    setFiltered(movies.results);
  };


  return (
    <div className="App">
      <Filter popular={popular} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre} />
      <motion.div 
        layout 
        className="popular-movies">
          <AnimatePresence>
          {filtered.map(movie => {
            return <Movie key={movie.id} movie={movie} />
          })}
          </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;


//e220c7eebbb3e36db046e5b0d37adb2a

//https://api.themoviedb.org/3/movie/550?api_key=e220c7eebbb3e36db046e5b0d37adb2a

/*
eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMjIwYzdlZWJiYjNlMzZkYjA0NmU1YjBkMzdhZGIyYSIsInN1YiI6IjYzNWFhNDkwODk0ZWQ2MDA5MTQzNWU1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R9KGCioOM1FHnA3arKxLJhNsKmW1lzLVzTJ-GfRLw5g
*/


//https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1

//Genres : id: 35 - Comedy, id 27 - Horror