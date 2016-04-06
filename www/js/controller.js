app.controller("sidemenuCtrl", function ($scope, LoginService) {

    $scope.logout = function () {
        LoginService.userlogout();
    }
    
});

app.controller("signinCtrl", function ($scope, LoginService) {
    
    LoginService.redirectAuthUser();

    $scope.signin = {};

    $scope.login = function () {
        LoginService.loginUser($scope.signin.username, $scope.signin.password);
    }

});



app.controller("profileCtrl", function ($scope) {
    
});