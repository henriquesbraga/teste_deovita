import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import './index.css'
import CardType from '../../types/CardType';
import { fetchNews } from '../../service/api';
import { useNavigate } from 'react-router-dom';

const NewsScreen = () => {

  const [news, setNews] = useState<CardType[]>([]);
  const navigation = useNavigate()

  useEffect(() => {
    (async () => {
      const response = await fetchNews()
      setNews(response)
    })()
  }, [])


  function handleCardClick(newsId: number) {
    console.log(newsId)
    navigation(`news/${newsId}`)

  }



  return (
    <div >
      <p>tela de noticias</p>
      {news.map((e) => (
        <Card 
          key={e.id}
          id={e.id}
          title={e.title}
          body={e.body}
          updatedAt={new Date(e.updatedAt)}
          onClick={handleCardClick}
        />
      ))}
    </div>
  )

}


export default NewsScreen