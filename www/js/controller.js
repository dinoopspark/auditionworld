app.controller("sidemenuCtrl", function ($scope, LoginService) {

    // LoginService.redirectNonAuthUser();

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



app.controller("signupCtrl", function ($scope, LoginService) {

    $scope.formdata = {}
    $scope.formdata = appData.dummy.signup;
    $scope.signup_here = function () {
        LoginService.signupUser($scope.formdata);
    }

});
app.controller("profileCtrl", function ($scope) {

    $scope.profile = appData.dummy.profile;
    
    var profile_details_required = appData.global.profile_details_required;

    $scope.profile_details = [];
    angular.forEach(profile_details_required , function (value, key) {
        var new_data = {label: value.label, value: $scope.profile[key] };
        $scope.profile_details.push(new_data);
    });

    
});