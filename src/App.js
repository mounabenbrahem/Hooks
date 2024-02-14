import React, { useState } from 'react';
import Filter from './Filter';
import MovieList from './components/MovieList';

const App = () => {
  const [films, setFilms] = useState([
    { title: 'Le Roi Lion', Description: 'Le long combat de Simba le lionceau pour accéder à son rang de roi des animaux, après que le fourbe Scar, son oncle, a tué son père et pris sa place.', rating: 'Aventure, Animation, Famille', image: 'https://i.scdn.co/image/ab67616d0000b27363ac0074287567ea482bd683' },
    { title: 'Avant toi', Description: 'Un film qui raconte une belle histoire d\'amour entre un jeune homme handicapé et une jeune fille pleine de fougue', rating: 'Romance/Comédie' , image: 'https://fr.web.img6.acsta.net/pictures/16/05/02/17/27/063880.jpg' },
    { title: 'Joker', Description: 'Un thriller psychologique américano-canadien réalisé par Todd Phillips', rating: 'Thriller/Crime', image: 'https://www.tallengestore.com/cdn/shop/products/Joker_-_Put_On_A_Happy_Face_-_Joaquin_Phoenix_-_Fan_Art_Hollywood_English_Movie_Poster_2_5e3acf9b-9b40-456b-957e-639cf7e85c0f_grande.jpg?v=1579504878' },
    { title: 'À sa façon', Description:'À sa façon est un film réalisé par Cemal Alpan avec Ahsen Eroğlu, Mine Tugay' , rating: 'Romance/Comédie', image: 'https://image.tmdb.org/t/p/original/vUJUY77yJcMxQTNppKPEoDnwOXI.jpg' },
    { title: 'Spy', Description: 'Susan Cooper est une modeste et discrète analyste au siège de la CIA', rating: 'Comédie/Action', image: 'https://lumiere-a.akamaihd.net/v1/images/spy_584x800_e781538b.jpeg?region=0%2C0%2C584%2C834' },   
  ]);

  const [newFilm, setNewFilm] = useState({ title: '', Description: '', rating: '', image: '' });

  const handleFilter = ({ title, rating }) => {
    // Implémentez la logique de filtrage ici en fonction du titre et de la note
    // Mettez à jour le state des films filtrés
  };

  const handleAddFilm = () => {
    setFilms([...films, newFilm]);
    setNewFilm({ title: '', Description: '', rating: '', image: '' });
  };

  return (
    <div >
      <div className="row">
        <div className="col-md-4">
          <Filter onFilter={handleFilter} />
        </div>
        <div className="col-md-8">
          <MovieList films={films} />
        </div>
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Title"
          value={newFilm.title}
          onChange={(e) => setNewFilm({ ...newFilm, title: e.target.value })}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Rating"
          value={newFilm.rating}
          onChange={(e) => setNewFilm({ ...newFilm, rating: e.target.value })}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Poster URL"
          value={newFilm.image}
          onChange={(e) => setNewFilm({ ...newFilm, image: e.target.value })}
        />
        <button className="btn btn-primary" onClick={handleAddFilm}>ADD FILM</button>
      </div>
    </div>
  );
};

export default App;
