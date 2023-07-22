import CardType from "../../types/CardType";


type OnCardPressType = {
  onClick: (newsid: number) => void;
};

type CardIndex = CardType & OnCardPressType;

const Card = ({id, title, body, updatedAt, onClick}: CardIndex) => {

  return (
    <div className='cardContainer'>
      <h1>{title}</h1>
      <p>{body}</p>
      <span>{updatedAt.toISOString()}</span>
      <button onClick={() => onClick(id)}>Editar</button>
    </div>
  );

}

export default Card;