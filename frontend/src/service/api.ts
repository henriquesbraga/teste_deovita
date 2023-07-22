import CardType from "../types/CardType";

async function fetchNews(): Promise<CardType[]> {
  try {
    const response = await fetch('http://localhost:3000/all', {
      method: 'GET'
    })
    return response.json()
  }
  catch(err) {
    console.log("fetch err: ", err)
    return []
  }
}



export {
  fetchNews
}