import React from 'react';

const MovieCard = ({ title, Description, rating, image }) => {
  return (
    <div >
      <img style={{  width: 400, height: 500 , padding:'100px'}} src={image} alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Description: {Description}</p>
        <p className="card-text">Rating: {rating}</p>
      </div>
    </div>
  );
};

export default MovieCard;