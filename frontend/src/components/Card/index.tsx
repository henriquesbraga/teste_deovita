import CardType from "../../types/CardType";
import formatDate from "../../utils/dateFormatter";

import "./index.css"

type OnCardPressType = {
  onClick: (newsid: number) => void;
  removeNews: (id?:number)=>void;
};

type CardIndex = CardType & OnCardPressType;

const Card = ({id, title, body, updatedAt, onClick, removeNews}: CardIndex) => {
  

  return (
    <div className='cardContainer'>
      <h1>{title}</h1>
      <p>{body}</p>
      <span>Data da publicação: {formatDate(updatedAt?.toISOString())}</span>
      <button onClick={() => onClick(id)}>Editar</button>
    </div>
  );

}

export default Card;