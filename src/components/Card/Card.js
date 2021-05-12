import './style.css';

function Card({ pokemon }) {
  return (
    <div className="Card">
      <img src={pokemon.images.small} alt={pokemon.name} />
    </div>
  );
}

export default Card;
