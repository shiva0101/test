(function(){
    
    angular.module('app.home')
    .service('studentService',['$http',function($http){
       
        var mockUrl=" http://localhost:3000/Student"
        
        this.getStudents=function(){
            return $http.get(mockUrl);
        }
        
        this.createStudent=function(student){
            return $http.post(mockUrl,student);
        }
        
        this.deleteStudent=function(id){
            return $http.delete(mockUrl+'/'+id)
        }
        
        this.editStudent=function(id){
            return $http.get(mockUrl+'/'+id)
        }
        
        this.updateStudent=function(id,student){
            return $http.put(mockUrl+'/'+id,student)
        }
    }]);
    
})();