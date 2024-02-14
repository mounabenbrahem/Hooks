import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ films }) => {
  return (
    <div style={{ display: 'grid', justifyContent: 'center', gap: '20px', gridTemplateColumns: 'repeat(3, 1fr)', width:'50%'}}>
      {films.map((film, index) => (
        <MovieCard key={index} title={film.title} Description={film.Description} rating={film.rating} image={film.image} />
      ))} 
    </div>
  );
};

export default MovieList;

