const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

// let url = "mongodb://localhost:27017/db_finance";
let url = "mongodb://henriqueferraz:lai7452@ds127101.mlab.com:27101/ofnet";

module.exports = mongoose.connect(url, { useMongoClient: true });
