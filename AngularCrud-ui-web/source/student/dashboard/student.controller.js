(function(){
    
    angular.module('app.student')
    .controller('studentController',['$scope','studentService',function($scope,studentService){
       studentService.getStudents().then(function(response){
           $scope.allStudents=response.data;
       });
        
    }]);
})();