const contatoCollections = require("../modells/contatoSchema");
const contatoCollection = require("../modells/contatoSchema");

const getAll = (request, response) => {
    contatoCollection.find((error, contato) => {
        console.log(request.url);
        if (error) {
            return response.status(500).send(error);
        } else {
            return response.status(200).json({
                mensagem: "GET com sucesso",
                contato
            });
        }
    })
}

const addContato = (request, response) => {
    const contatoDoBody = request.body; // pegando o body que o usuario digitou

    const contatos = new contatoCollection(contatoDoBody); //criando um novo contato com o body

    contatos.save((error, contato) => {
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
                contato
            });
        }
    })
}

const getContatoById = (request, response) => {
    const id = request.params.id;

    contatoCollection.find({ _id: id }, (error, contato) => {
        console.log(contato);
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
    const contatoBody = request.body;
    const update = { new: true };

    contatoCollection.findByIdAndUpdate(id, contatoBody, update, (error, contato) => {

        if (error) {
            return response.status(500).send({ mensagem: "erro", error });
        } else if (contato == "") {
            return response.status(400).send({
                mensagem: "Id não encontrado"
            })
        } else {
            return response.status(200).send({
                mensagem: "PUT geral realizado com sucesso",
                contato
            })
        }
    })
}

const contatoTelefonicoAtualiza = (request, response) => {
    const id = request.params.id;
    const bodytelefone = request.body;
    const update = { new: true };

    contatoCollection.findByIdAndUpdate(
        id,
        bodytelefone,
        update,
        (error, contato) => {
            if (error) {
                return response.status(500).send({
                    mensagem: "error",
                    error
                });
            } else if (contato == "") {
                return response.status(400).send({
                    mensagem: "Id não indetificado"
                })
            } else {
                return response.status(200).send({
                    mensagem: "Patch realizado com sucesso",
                    contato
                })
            }
        }
    )
}


//feito com query
const updateContato = (request, response) => {
    const idParam = request.query.id;
    const contatoBody = request.body;
    const update = { new: true };

    contatoCollection.findByIdAndUpdate(
        idParam,
        contatoBody,
        update,
        (error, contatos) => {
            if (error) {
                return response.status(500).send({
                    mensagem: "Erro",
                    error
                })
            } else {
                return response.status(200).send({
                    mensagem: "Contato atualizado",
                    contatos
                })
            }
        })

}

const deleteContato = (request, response) => {
    const id = request.params.id;

    contatoCollection.findByIdAndDelete({ _id: id }, (error, contato) => {
        if (error) {
            return response.status(500).send({
                mensagem: "error",
                error
            })
        } else {
            return response.status(200).send({
                mensagem: "Delete por Id realizado com sucesso",
                contato
            })
        }
    })
}


module.exports = {
    getAll,
    addContato,
    getContatoPorNome,
    getContatoById,
    atualizaContato,
    updateContato,
    contatoTelefonicoAtualiza,
    deleteContato

}