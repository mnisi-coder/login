 var app = angular.module('bookitnow',[]);
        app.controller('myCtrl', function($scope,$http){
        $scope.submit = function() {

            var data = {
                    Name   : $scope.fname, 
                    Email   : $scope.email,
                    Roles   : $scope.rolrs,
                    password: $scope.pswd,
                    confirm : $scope.confirm,,
				
                }   
            };

            $http.post('/', &scope.data)
            .success(function (data, status, headers, config) {
                    $scope.result = data;
                    console.log("inserted successfully")
                })
                .error(function(data, status, header, config){
                    $scope.result = "Data: " + status;


                });

            $scope.add.push(data);
            $scope.addNewUser = {
					
                    Name:"",
                    Email:"",
                    Roles:"",
                    password:"",
                    confirm:"",
					
        };
});