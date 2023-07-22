import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CardType from "../../types/CardType";
import { fetchNew, fetchOneNews } from "../../service/api";
import "./index.css";
import TopBar from "../../components/TopBar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type RouterNewsType = {
  newsId: string;
}
type InputsEnum = 'title' | 'body';

const FormNews = () => {
  const [news, setNews] = useState<CardType>({});
  const { newsId } = useParams<RouterNewsType>();
  const navigation = useNavigate()

  const notifyError = () => toast("Preencha todos os campos!", { theme: "dark" });

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
    const title = news?.title;
    const body = news?.body;

    if(title === undefined || body === undefined) {
      notifyError()
    }
    else {
      await fetchNew({id: news?.id, title: news?.title, body: news?.body});
      navigation(-1)
      notifyError()
    }


  }

  return (
    <>
    <ToastContainer position="bottom-right" theme="dark"/>
      <TopBar title={newsId ? 'Edição' : 'Novo'} buttonTitle="Voltar" onClick={() => {navigation(-1)}} isButtonVisible={true}/>
      <div className="box">
          <input id="titleInput" type="text" defaultValue={news?.title} name='title' onChange={handleChangeInput} placeholder="Título" required />
          <textarea id="bodyInput" name='body' onChange={handleChangeInput} value={news.body} placeholder="Corpo da matéria" required rows={10}></textarea>
          <button onClick={handleSave}>Salvar</button>
      </div>
    </>
  )
}

export default FormNews;