const express = require("express");
const auth = require("./auth");

module.exports = function(server) {
/*
* Rotas abertas
*/
  const openApi = express.Router();
  server.use("/oapi", openApi);
  const AuthService = require("../api/user/authService");
  openApi.post("/login", AuthService.login);
  openApi.post("/signup", AuthService.signup);
  openApi.post("/validateToken", AuthService.validateToken);

  // API de Rotas
  const protectedApi = express.Router();
  server.use("/api", protectedApi);
  
  protectedApi.use(auth)

  // Rota de Teste
  protectedApi.route("/teste").get(function(req, res, next) {
    res.send("Funcionou");
  });

  // Rotas da API
  const billingCycleService = require("../api/billingCycle/billingCycleService");
  billingCycleService.register(protectedApi, "/billingCycles");

  const billingSumaryService = require("../api/billingSumary/billingSumaryService");
  protectedApi.route("/billingSumary").get(billingSumaryService.getSummary);
};