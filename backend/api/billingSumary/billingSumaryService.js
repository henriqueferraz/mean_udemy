const _ = require("lodash");
const BillingCycle = require("../billingCycle/billingCycle");

//Função Middleware - responçavel por agurpar ou sumarizar todos os tipos de pagamento

function getSummary(req, res) {
  BillingCycle.aggregate(
    {
      $project: {
        credit: { $sum: "$credits.value" },
        debt: { $sum: "$debits.value" }
      }
    },
    {
      $group: {
        _id: null,
        credit: { $sum: "$credit" },
        debt: { $sum: "$debt" }
      }
    },
    {
      // Aqui o project vai ignorar o id e só vai se ater ao credito e debito (1)
      $project: {
        _id: 0,
        credit: 1,
        debt: 1
      }
    },
    function(error, result) {
      if (error) {
        res.status(500).json({ errors: [error] });
      } else {
        res.json(_.defaults(result[0], { credit: 0, debt: 0 }));
      }
    }
  );
}

module.exports = { getSummary };
