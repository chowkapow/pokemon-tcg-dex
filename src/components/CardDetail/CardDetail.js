import './style.css';
import { useParams } from 'react-router-dom';

function CardDetail() {
  let { cardId } = useParams();
  return (
    <div className="CardDetail">
      <h2>Hi {cardId}</h2>
    </div>
  );
}

export default CardDetail;
