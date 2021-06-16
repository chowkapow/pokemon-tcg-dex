import './style.css';
import { Link } from 'react-router-dom';

function Cards({ pokemonTcgData }) {
  return (
    <div className="gallery">
      {pokemonTcgData.map((pokemon, i) => {
        return (
          <div className="card">
            <Link to={`cards/${pokemon.id}`}>
              <img src={pokemon.images.small} alt={pokemon.name} />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
