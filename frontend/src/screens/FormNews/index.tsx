import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CardType from "../../types/CardType";
import { fetchNew, fetchOneNews } from "../../service/api";
import "./index.css";
import TopBar from "../../components/TopBar";


type RouterNewsType = {
  newsId: string;
}
type InputsEnum = 'title' | 'body';

const FormNews = () => {
  const [news, setNews] = useState<CardType>({});
  const { newsId } = useParams<RouterNewsType>();
  const navigation = useNavigate()

  useEffect(() => {
    if (newsId) {
      (async () => {
        const response = await fetchOneNews(newsId ?? '')
        setNews(response ?? {})
      })()
    }
  }, []);



  function handleChangeInput(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const name: InputsEnum = event.target.name;
    const value = event.target.value;
    const newNews: CardType = { ...news };
    newNews[name] = value;
    setNews(prev=>newNews)
  }


  async function handleSave() {
    await fetchNew({id: news?.id, title: news?.title, body: news?.body});
    navigation(-1)

  }

  return (
    <>
      <TopBar title={newsId ? 'Edição' : 'Novo'} onClick={() => {}} isButtonVisible={false}/>
      <div className="box">
          <input type="text" defaultValue={news?.title} name='title' onChange={handleChangeInput} />
          <textarea name='body' onChange={handleChangeInput} value={news.body}></textarea>
          <button onClick={handleSave}>Salvar</button>
      </div>
    </>
  )
}

export default FormNews;