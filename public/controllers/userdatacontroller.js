app.controller("userdatacontroller",function($scope,$localStorage){
    $scope.data = $localStorage.currentApplication;
    console.log( $scope.data);
    $scope.goBack = function(){
        window.history.back();
    }
});