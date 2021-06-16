import './style.css';
import { Link } from 'react-router-dom';

function Card({ pokemon }) {
  return (
    <div className="Card">
      <Link to={`cards/${pokemon.id}`}>
        <img src={pokemon.images.small} alt={pokemon.name} />
      </Link>
    </div>
  );
}

export default Card;
