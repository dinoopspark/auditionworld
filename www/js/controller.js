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
app.controller("signupCtrl", function ($scope, LoginService) {

    $scope.formdata = {}

    $scope.signup_here = function (formdata) {
        LoginService.signupUser(formdata);
    }

});


app.controller("profileCtrl", function ($scope, StoreService, LoginService) {

    var user_id = LoginService.get_current_userid();

    LoginService.userProfile(user_id, function (data) {
        $scope.basic = data.basic;
        $scope.detailed = data.detailed;
    });

});


app.controller("profileEditCtrl", function ($scope, $state, ModuleService, LoginService, WebService, StoreService, $ionicPopup) {

    var user_id = LoginService.get_current_userid();

    LoginService.userProfileEdit(user_id, function (response) {
        $scope.fields = response.user_refine;
        $scope.field_values = response.user_refined_value;
    });



    $scope.update = function (formdata) {

        var url = appData.url_profile_update;

        WebService.postData(url, formdata).success(function (response) {
            /// console.log(response);
            $state.go('app.profile');

        }).error(function (response) {

            ModuleService.message({
                title: "Update failed",
                defaultMsg: "Please try again later",
                response: response,
            });

        });

    }

});




app.controller("auditionCtrl", function ($scope, WebService, LoginService) {


    LoginService.redirectNonAuthUser();

    $scope.page = 1;
    $scope.auditions = [];
    $scope.oldpost = [];
    var url = appData.url_audition;
    $scope.doRefresh = function () {

        // Get latest post
        var data = {page: 1}

        WebService.getData(url, data).success(function (data) {
            $scope.auditions = data.posts;
            $scope.auditions = $scope.auditions.concat($scope.oldpost);
            $scope.$broadcast('scroll.refreshComplete');
        }).error(function (data) {
            $scope.$broadcast('scroll.refreshComplete');
        });
    };
    $scope.loadMore = function () {

        var data = {page: $scope.page}

        WebService.getData(url, data).success(function (data) {
            $scope.oldpost = data.posts;
            $scope.auditions = $scope.auditions.concat($scope.oldpost);
            $scope.page++;
            $scope.$broadcast('scroll.infiniteScrollComplete');
        }).error(function (data) {
            $scope.$broadcast('scroll.infiniteScrollComplete');
        });
    };
});


app.controller("testCtrl", function ($scope, $http) {

    //var url = 'http://auditionworldtv.com/authenticate?callback=JSON_CALLBACK';
    // 
    var url = 'http://auditionworldtv.com/authenticate';

    var postdata = {email: "soni@sparksupport.com", password: "soni123"};

    $scope.msg = "h";


    $http.post(url, postdata)
            .success(function (data) {
                $scope.msg = "GG";
            })
            .error(function (data) {
                $scope.msg = "KK";
            });
});