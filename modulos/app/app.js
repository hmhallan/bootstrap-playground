
var app = angular.module("rotas", ['ngRoute', 'ngSanitize'] );




app.config(function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'modulos/home/home.html', controller: 'HomeController'
        })
        .when('/formulario', {
            templateUrl: 'modulos/home/formulario.html', 
            controller: 'FormularioController'
        })
});
