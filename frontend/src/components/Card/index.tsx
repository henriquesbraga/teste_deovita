import CardType from "../../types/CardType";

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
      <span>{updatedAt.toISOString()}</span>
      <button onClick={() => onClick(id)}>Editar</button>
      
      <a href="#" onClick={()=>removeNews(id)} className="excluir">X</a>
    </div>
  );

}

export default Card;