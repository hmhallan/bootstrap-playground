


angular.module("helloApp", []);

angular.module("helloApp").controller("helloController", function( $scope ){   

    $scope.minhaVariavel = "Abcs1234";
    
    $scope.lista = [];

    $scope.addNaLista = function(){
        $scope.lista.push($scope.texto); 
        $scope.texto = "";
    }

    
});