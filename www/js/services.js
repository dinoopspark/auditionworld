app.service("ModuleService", function ($ionicPopup) {

    this.message = function (info) {
        var response = info.response;
        var message = (response.message) ? response.message : info.defaultMsg;
        var alertPopup = $ionicPopup.alert({
            title: info.title,
            template: message
        });
    }

});
app.factory("LoginService", function (ModuleService, StoreService, WebService, $state, $ionicPopup, FormGenerator) {

    var fact = {};

    fact.loginUser = function (username, password) {

        var url = appData.url_login;

        var postdata = {email: username, password: password};

        WebService.postData(url, postdata).success(function (response) {

            var user = {user_id: response.id, login: true}
            StoreService.update_option('user_login', user);
            $state.go('app.home');

        }).error(function (response) {

            ModuleService.message({
                title: "Login failed",
                defaultMsg: "Please check your credentials",
                response: response,
            });

        });
    }

    fact.signupUser = function (formdata) {

        var url = appData.url_signup;

        delete formdata.confirm_password;

        WebService.postData(url, formdata).success(function (response) {
            var user = {user_id: response.id, login: true}
            StoreService.update_option('user_login', user);
            $state.go('app.home');

        }).error(function (response) {

            ModuleService.message({
                title: 'Signup failed!',
                defaultMsg: "Please re-submit the form",
                response: response,
            });

        });

    }

    fact.redirectAuthUser = function () {
        var user_login = StoreService.get_option('user_login');
        if (user_login.login) {
            $state.go('app.home');
        }
    }

    fact.redirectNonAuthUser = function () {
        var user_login = StoreService.get_option('user_login');
        if (!user_login.login) {
            $state.go('single.signin');
        }
    }

    fact.userlogout = function () {
        var user_login = StoreService.get_option('user_login');
        StoreService.update_option('user_login', '');
        $state.go('single.signin');
    }

    fact.get_current_userid = function () {
        var user_login = StoreService.get_option('user_login');
        return user_login.user_id;
    }

    fact.userProfile = function (user_id, callback) {

        var results = {};
        var url = appData.url_profile;
        var data = {id: user_id};

        WebService.getData(url, data).success(function (response) {

            var form_fields = appData.global.user_profile;
            var form_field_value = response.user;

            var form_refine = FormGenerator.refine_field_attributes(form_fields, form_field_value);

            // Basic view
            var profile_view_basic = appData.global.profile_view_basic;
            var rf_profile_view_basic = FormGenerator.filter_fields(form_refine, profile_view_basic);
            results.basic = rf_profile_view_basic.form_values;

            results.basic.profile_pic = fact.profile_pic(form_refine.profile_pic.value, true);


            // Detailed view
            var rf_profile_view = appData.global.profile_view;
            results.detailed = FormGenerator.filter_fields(form_refine, rf_profile_view);
            callback(results);
        });
    }

    fact.profile_pic = function (image_name, small) {
        if (image_name == '') {
            return appData.sample_profile_pic;
        }

        if (small) {
            return appData.baseUrl + '/assets/profile/small_' + image_name;
        } else {
            return appData.baseUrl + '/assets/profile/' + image_name;
        }

    }

    fact.userProfileEdit = function (user_id, callback) {

        var results = {};
        var url = appData.url_profile;
        var data = {id: user_id};

        WebService.getData(url, data).success(function (response) {

            var form_fields = appData.global.user_profile;
            var form_field_value = response.user;
            console.log(form_field_value);
            var form_refine = FormGenerator.refine_field_attributes(form_fields, form_field_value);

            
            var required_fields = appData.global.profile_edit;
            results.user_refine = FormGenerator.filter_fields(form_refine, required_fields);
            results.user_refined_value = results.user_refine.form_values;

            callback(results);
        });
    }

    return fact;

});


app.service("StoreService", function () {

    this.get_option = function (option_name) {
        var option_value = window.localStorage[option_name];
        if (option_value) {
            return angular.fromJson(option_value);
        }
        return [];
    }

    this.update_option = function (option_name, option_value) {
        var option_value = (option_value == '') ? option_value : angular.toJson(option_value);
        window.localStorage[option_name] = option_value;
    }
});

app.service("WebService", function ($http, $q) {

    this.base_url = appData.baseUrl;

    this.postData = function (url, postdata) {

        var deferred = $q.defer();
        var promise = deferred.promise;

        var url = this.base_url + '/' + url;

        $http.post(url, postdata)
                .then(function (response) {
                    if (response.data['status'] == 'valid') {
                        deferred.resolve(response.data);
                    } else {
                        deferred.reject(response.data);
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

    this.getData = function (url, formdata) {

        var deferred = $q.defer();
        var promise = deferred.promise;

        var passdata = {params: formdata};

        var url = this.base_url + '/' + url;

        $http.get(url, passdata)
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

app.service("FormService", function () {

    // refine field attributes
    this.refine_field_attributes = function (fields, valueObj) {
        var refine = {};
        angular.forEach(fields, function (value, key) {

            var type = (value.type) ? value.type : "text";
            var field_value = (valueObj[value.name]) ? valueObj[value.name] : "";


            var new_data = {name: value.name, label: value.label, value: field_value, type: type};

            refine[value.name] = new_data;
        });
        return refine;
    }

    // set required fields in refine
    this.filter_fields = function (refined_fields, required) {
        var structured = [];
        angular.forEach(required, function (value, key) {
            var new_data = refined_fields[value];
            structured.push(new_data);
        });
        return structured;
    }


});
