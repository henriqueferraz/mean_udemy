angular.module('primeiraApp').constant('consts', {
  appName: 'Cadastro',
  version: '1.0',
  owner: 'Ofnet Sistemas',
  year: '2017',
  site: 'https://www.ofnet.com.br',
  apiUrl: 'http://localhost:3003/api',
  oapiUrl: 'http://localhost:3003/oapi',
  userKey: '_primeira_app_user'
}).run(['$rootScope', 'consts', function($rootScope, consts) {
  $rootScope.consts = consts
}])
