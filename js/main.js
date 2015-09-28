var myApp = angular.module('tableApp', ['ngRoute', 'angularUtils.directives.dirPagination']);

myApp.config(function($routeProvider){
    $routeProvider.
        when("/",
        {
            templateUrl: "view/table.html",
            controller: "tableCtrl"
        }
    ).otherwise({
        redirectTo: '/'
    });
});

myApp.controller('tableCtrl', function($scope)
{
    $scope.users = [{
        Id: 1, Name: 'Test Name 1',Age : 12,
        Country: 'INDIA',BirthDay: 20-1-2000
    },{
        Id: 2,Name: 'Test Name 2', Age : 13,
        Country: 'USA',BirthDay: 20-12-2001
    },{
       Id: 3,Name: 'Test Name 3',Age : 14,
       Country: 'UK',BirthDay: 20-12-2002
    },{
        Id: 4,Name: 'Test Name 4',Age : 15,
        Country: 'RUSIA',BirthDay: 20-12-2003
    },{
        Id: 5,Name: 'Test Name 5',Age : 16,
        Country: 'CHINA',BirthDay: 20-12-2004
    }];
    $scope.sortKey = 'Name';
    $scope.sort = function(keyname){
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    }
})
