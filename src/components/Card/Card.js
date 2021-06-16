import './style.css';
import { useParams } from 'react-router-dom';

function Card() {
  let { cardId } = useParams();
  return (
    <div className="Card">
      <h2>Hi {cardId}</h2>
    </div>
  );
}

export default Card;
