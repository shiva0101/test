(function(){
    
    angular.module('app.student.config',['ui.router'])
    .config(['$stateProvider',function($stateProvider){
       $stateProvider
            .state('student',{
           url:'/student',
           controller:'studentController',
           templateUrl:'AngularCrud-Web/source/student/dashbord/studentView.html'
       }).state('addStudents',{
           url:'/addStudents',
           views:{
               "AddStudentView":{
                   controller:'studentController',
                   templateUrl:'AngularCrud-Web/source/student/dashbord/addStudent.html'
               }
           }
       })
    }]);
    
})();

