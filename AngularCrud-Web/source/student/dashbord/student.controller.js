(function(){
    
    angular.module('app.student')
    .controller('studentController',['$scope', 'studentService',function($scope, studentService){
        studentService.getStudents().then(function(response){
            $scope.allStudents=response.data;
        });
        allStudents=function(){
            studentService.getStudents().then(function(response){
                $scope.allStudents=response.data;
            });
        }
        addStudents=function(student){
            console.log(student.name+""+student.address);

            studentService.addStudents()
                .then(function(response){
                this.allStudents();
            });
        }
    }]);
    
})();