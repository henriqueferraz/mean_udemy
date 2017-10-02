const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

// let url = "mongodb://localhost:27017/db_finance";
let url = "mongodb://henriqueferraz:lai7452@ds127101.mlab.com:27101/ofnet";

module.exports = mongoose.connect(url, { useMongoClient: true });

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum = "'{VALUE}' não é válido para o atributo '{PATH}'."