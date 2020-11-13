const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contatosSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId, //tipo de dado dentro do mongoose de Id que cria automaticamente
        auto: true, // automatico
        required: true //obrigatorio
    },
    nome: {
        type: String,
        required: true
    },
    celular: {
        type: String,
        required: true
    },
    dataNascimento: {
        type: Date,
        required: true
    },
    fotoPerfil: {
        type: String,
        required: false
    }
},
    { collection: "contatos" }
)

const contatoCollection = mongoose.model('contatos', contatosSchema);

module.exports = contatoCollection;