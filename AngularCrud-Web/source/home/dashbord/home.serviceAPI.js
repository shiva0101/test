(function(){
  
    angular.module('app.home')
    .service('studentService',['$http',function($http){
       
        var mockUrl=" http://localhost:3000/Student"
        
        this.getStudents=function(){
            return $http.get(mockUrl);
        }
        
        this.addStudent=function(student){
            return $http.post(mockUrl,student);
        }
         }]);
        
})();