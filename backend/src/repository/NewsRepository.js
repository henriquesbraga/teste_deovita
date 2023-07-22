import News from  "../database/NewsModel.js"


const create = async (newsData) => {
  try {
    await News.create(newsData)
    return true
  }
  catch(err) {
    console.log('Error creating user:', err)
    return false
  }
}

const readAll = async () => {
  try {
    const data = await News.findAll({raw: true})
    return data
  }
  catch(err) {
    console.log('Error loading news:', err)
    return false
  }
}

const readOne = async (id) => {
  try {
    const data = await News.findOne({where:{id}},{raw: true})
    return data
  }
  catch(err) {
    console.log('Error loading news:', err)
    return false
  }
}


const update = async (id, newsData) => {
  try{
    const [rowsUpdated] = await News.update(newsData, { where: {id}})
    if(rowsUpdated === 0 ) {
      return false
    }
    return true
  }
  catch(err) {
    console.log('Error updating news:', err)
    return false
  }
}

const deleteNews = async (id) => {
  try{
    const rowsDeleted = await News.destroy({ where: {id}})
    if(rowsDeleted === 0 ) {
      return false
    }
    return true
  }
  catch(err) {
    console.log('Error deleting news:', err)
    return false
  }
}

export {
    create,
    readAll,
    readOne,
    update,
    deleteNews
}