import {create, readAll, readOne, update, deleteNews} from "../repository/NewsRepository.js"

const insertNews = async (request, response) => {
	try {
		const newsData = request.body;
		if(await create(newsData)) {
			response.status(201).send({
				message: "Notícia cadastrada com sucesso!"
			})
		}
		else {
			response.status(500).send({
				message: "Erro ao cadastrar notícia!"
			})
		}
	}
	catch(err) {
		response.status(500).send({
			message: "Erro ao cadastrar notícia!" + err
		})
	}
}

const listAllNews = async (request, response) => {
	try {
		const allNews = await readAll()
		response.status(200).send(allNews)
	}
	catch(err) {
		response.status(500).send({
			message: "Erro ao listar notícias!" + err
		})
	}
}

const listOne = async (request, response) => {
	try {
		const id = request.params.id
		const specificNews = await readOne(id) 
		response.status(200).send(specificNews)
	}
	catch(err) {
		response.status(500).send({
			message: "Erro ao listar notícias!" + err
		})
	}
}

const updateNews = async (request, response) => {
	try {
		const id = request.params.id
		const body = request.body
		
		if(await update(id, body)) {
			response.status(200).send({mensagem: "Notícia atualizada com sucesso!"})
		}
		else {
			response.status(500).send({mensagem: "Erro ao atualizar Notícia!"})
		}
	}
	catch(err) {
		response.status(500).send({
			message: "Erro ao atualizar notícias!" + err
		})
	}
}

const deleteSpecificNews = async(request, response) => {
	try {
		const id = request.params.id
		
		if(await deleteNews(id)) {
			response.status(200).send({mensagem: "Notícia deletada com sucesso!"})
		}
		else {
			response.status(500).send({mensagem: "Erro ao deletar Notícia!"})
		}
	}
	catch(err) {
		response.status(500).send({
			message: "Erro ao deletar notícias! " + err
		})
	}
}






export {
	insertNews,
	listAllNews,
	listOne,
	updateNews,
	deleteSpecificNews
}