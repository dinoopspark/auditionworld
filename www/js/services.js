app.service("LoginService", function (StoreService, WebService, $state, $ionicPopup) {

    this.loginUser = function (username, pw) {

        var post_url = appData.ws_login_url;

        WebService.loginUser(username, pw, post_url).success(function (data) {
            var user = {user_id: data.id, login: true}
            StoreService.update('user_login', user);
            $state.go('app.home');
        }).error(function (data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });

        });
    }

    this.signupUser = function (formdata) {

        var post_url = appData.ws_signup_url;

        WebService.postData(formdata, post_url).success(function (data) {
            console.log(data);
            var user = {user_id: data.user_id, login: true}
            StoreService.update('user_login', user);
            $state.go('app.home');
        }).error(function (data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Signup failed!',
                template: 'Please resubmit the form'
            });

        });

    }

    this.redirectAuthUser = function () {
        var user_login = StoreService.all('user_login');
        if (user_login.login) {
            $state.go('app.home');
        }
    }

    this.redirectNonAuthUser = function () {
        var user_login = StoreService.all('user_login');
        if (!user_login.login) {
            $state.go('single.signin');
        }
    }

    this.userlogout = function () {

        var user_login = StoreService.all('user_login');
        StoreService.update('user_login', '');
        $state.go('single.signin');

    }

});


app.service("StoreService", function () {

    this.all = function (option_name) {
        var option_value = window.localStorage[option_name];
        if (option_value) {
            return angular.fromJson(option_value);
        }
        return [];
    }

    this.update = function (option_name, option_value) {
        var option_value = (option_value == '') ? option_value : angular.toJson(option_value);
        window.localStorage[option_name] = option_value;
    }
});

app.service("WebService", function ($http, $q) {

    this.base_url = appData.baseUrl;

    this.loginUser = function (username, pw, post_url) {

        var deferred = $q.defer();
        var promise = deferred.promise;

        var postdata = {params: {email: username, password: pw}};

        var url = this.base_url + '/' + post_url;

        $http.get(url, postdata)
                .then(function (response) {
                    if (response.data['status'] != 'invalid') {
                        deferred.resolve(response.data);
                    } else {
                        deferred.reject(0);
                    }
                });




        promise.success = function (fn) {
            promise.then(fn);
            return promise;
        }

        promise.error = function (fn) {
            promise.then(null, fn);
            return promise;
        }
        return promise;

    }

    this.postData = function (formdata, post_url) {

        var deferred = $q.defer();
        var promise = deferred.promise;

        var url = this.base_url + '/' + post_url;

        $http.get(url, formdata)
                .then(function (response) {
                    if (response.data['status'] == 'valid') {
                        deferred.resolve(response.data);
                    } else {
                        deferred.reject(0);
                    }
                });


        promise.success = function (fn) {
            promise.then(fn);
            return promise;
        }

        promise.error = function (fn) {
            promise.then(null, fn);
            return promise;
        }
        return promise;

    }


});

