(function(){
    
    angular.module('app.student.config',['ngRoute'])
    .config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/student',
                            {
            controller:'studentController',
            templateUrl:'AngularCrud-ui-web/source/student/dashboard/studentView.html'
            
        });
    }]);
})();