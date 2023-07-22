import CardType from "../types/CardType";

async function fetchNews(): Promise<CardType[]> {
  try {
    const response = await fetch('http://localhost:3000/all', {
      method: 'GET'
    })
    return response.json()
  }
  catch (err) {
    console.log("fetch err: ", err)
    return []
  }
}

async function fetchOneNews(id: string): Promise<CardType | null> {
  try {
    const response = await fetch(`http://localhost:3000/specific/${id}`, {
      method: 'GET'
    })
    return response.json()
  }
  catch (err) {
    console.log("fetch err: ", err)
    return null
  }
}
async function fetchNew({ id, title, body }: CardType): Promise<any> {
  try {
    if(id){
      const response = await fetch(`http://localhost:3000/update/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, body }),
        headers: {'Content-Type': 'application/json'}
      })
      
      console.log('putt', { title, body })
      return response.json()
    }else{
      const response = await fetch(`http://localhost:3000/create`, {
        method: 'POST',
        body: JSON.stringify({ title, body }),
        headers: {'Content-Type': 'application/json'}
      })
      console.log('passou', { title, body })
      return response.json()
    }
   
  }
  catch (err) {
    console.log("fetch err: ", err)
    return err
  }
}



export {
  fetchNews, fetchOneNews, fetchNew
}