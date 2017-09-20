const express = require("express");

module.exports = function(server) {
  // API de Rotas
  const router = express.Router();
  server.use("/api", router);

  // Rota de Teste
  router.route("/teste").get(function(req, res, next) {
    res.send("Funcionou");
  });

  // Rotas da API
  const billingCycleService = require("../api/billingCycle/billingCycleService");

  billingCycleService.register(router, "/billingCycles");

  const billingSumaryService = require("../api/billingSumary/billingSumaryService");
  router.route("/billingSumary").get(billingSumaryService.getSummary);
};
