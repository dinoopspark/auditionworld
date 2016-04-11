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

app.controller("profileCtrl", function ($scope, FormService) {

    $scope.profile = appData.dummy.profile;
    var profile_fields = appData.global.profile_fields;


    $scope.profile_refine = FormService.refine_field_attributes(profile_fields, $scope.profile);

    $scope.profile_details = FormService.filter_fields($scope.profile_refine, appData.global.profile_details);
    $scope.physical_details = FormService.filter_fields($scope.profile_refine, appData.global.physical_details);
    $scope.experience_achievements = FormService.filter_fields($scope.profile_refine, appData.global.experience_achievements);





});


