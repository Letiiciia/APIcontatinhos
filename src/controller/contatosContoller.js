const contatoCollections = require("../modells/contatoSchema");
const contatoCollection = require("../modells/contatoSchema");

const getAll = (request, response) => {
    contatoCollection.find((error, contatos) => {
        console.log(request.url);
        if (error) {
            return response.status(500).send(error);
        } else {
            return response.status(200).json({
                mensagem: "GET com sucesso",
                contatos
            });
        }
    })
}

const addContato = (request, response) => {
    const contatoDoBody = request.body; // pegando o body que o usuario digitou

    const contato = new contatoCollection(contatoDoBody); //criando um novo contato com o body

    contato.save((error) => {
        if (error) {
            return response.status(400).send(error);
        } else {
            return response.status(200).send({
                mensagem: "POST com sucesso",
                contato
            })
        }
    })
}

const getContatoPorNome = (request, response) => {
    const nome = request.params.nome;

    contatoCollection.find({ nome: nome }, (error, contato) => {
        if (error) {
            response.status(500).send(error);
        } else if (contato == "") {
            return response.status(400).send({
                mensagem: "Contato não encontrado",
            })
        } else {
            return response.status(200).send({
                mensagem: "GET por nome realizado com sucesso",
                contato});
        }
    })
}

const getContatoById = (request, response) => {
    const id = request.params.id;

    contatoCollection.findById(id, (error, contato) => {
        if (error) {
            return response.status(500).send(error);
        } else if (contato == "") {
            return response.status(400).send({
                mensagem: "Id não encontrado",
            })
        } else {
            return response.status(200).send({
                mensagem: "GET por Id realizado com sucesso",
                contato
            });
        }
    })
}

const atualizaContato = (request, response) => {
    const id = request.params.id;

    contatoCollection.findByIdAndUpdate()
}



module.exports = {
    getAll,
    addContato,
    getContatoPorNome,
    getContatoById

}