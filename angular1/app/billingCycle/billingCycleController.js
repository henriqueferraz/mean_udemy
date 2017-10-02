(function () {
  angular
    .module("primeiraApp")
    .controller("BillingCycleCtrl", [
      "$http",
      "msgs",
      "tabs",
      BillingCycleController
    ]);

  function BillingCycleController($http, msgs, tabs) {
    const vm = this;
    const url = "http://localhost:3003/api/billingCycles";
    const selectUrl = `${url}/${vm.billingCycle._id}`;
    vm.refresh = function () {
      $http.get(url).then(function (response) {
        vm.billingCycle = {};
        vm.billingCycles = response.data;
        tabs.show(vm, {
          tabList: true,
          tabCreate: true
        });
      });
    };
    vm.create = function () {
      $http
        .post(url, vm.billingCycle)
        .then(function (response) {
          vm.refresh();
          msgs.addSuccess("Operação realizada com sucesso!");
        })
        .catch(function (resp) {
          msgs.addError(resp.data.errors);
        });
    };

    vm.showTabUpdate = function (billingCycle) {
      vm.billingCycle = billingCycle;
      tabs.show(vm, {
        tabUpdate: true
      });
    };

    vm.showTabDelete = function (billingCycle) {
      vm.billingCycle = billingCycle;
      tabs.show(vm, {
        tabDelete: true
      });
    };

    vm.update = function () {
      $http
        .put(selectUrl, vm.billingCycle)
        .then(function (response) {
          vm.refresh();
          msgs.addSuccess("Operação realizada com sucesso");
        })
        .catch(function (data) {
          msgs.addError(data.errors);
        });
    }

    vm.delete = function () {
      $http
        .delete(selectUrl, vm.billingCycle)
        .then(function (response) {
          vm.refresh();
          msgs.addSuccess("Operação realizada com sucesso");
        })
        .catch(function (data) {
          msgs.addError(data.errors);
        });
    };
    vm.refresh();
  }
})();