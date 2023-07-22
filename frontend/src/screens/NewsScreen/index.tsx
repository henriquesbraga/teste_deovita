import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import './index.css'
import CardType from '../../types/CardType';
import { deleteNew, fetchNews } from '../../service/api';
import { Link, useNavigate } from 'react-router-dom';
import TopBar from '../../components/TopBar';

const NewsScreen = () => {

  const [news, setNews] = useState<CardType[]>([]);
  const navigation = useNavigate()

  async function fetchData(){
    const response = await fetchNews()
    setNews(response)
  }

  async function removeNews(id:number) {
    await deleteNew(id);
    const newNews = [...news].filter((e) => e.id != id);
    setNews(newNews)
  }

  useEffect(() => {
    fetchData();
  }, [])


  function handleCardClick(newsId: number) {
    console.log(newsId)
    navigation(`news/${newsId}`)
  }

  function handleNewPublicationClick() {
    navigation('news/new')
  }

  return (
    <>
    <TopBar title='Noticias' buttonTitle='Nova publicação' onClick={handleNewPublicationClick} isButtonVisible />
    <div className='cardsContainer'>
      {news.map((e) => (
        <Card 
          key={e.id}
          id={e.id}
          title={e.title}
          body={e.body}
          updatedAt={new Date(e.updatedAt)}
          onClick={handleCardClick}
          removeNews={removeNews}
        />
      ))}
    </div>
    </>
  )

}


export default NewsScreen