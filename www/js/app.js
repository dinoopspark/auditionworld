
var app = angular.module('auditionworld', ['ionic']);

app.run(function ($ionicPlatform, $location) {
    $ionicPlatform.ready(function () {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            
            StatusBar.styleDefault();
        }


    });

});



app.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
            .state('app', {
                url: '/app',
                templateUrl: 'templates/sidemenu-template.html',
                abstract: true,
            })
            .state('single', {
                url: '/single',
                templateUrl: 'templates/single-template.html',
                abstract: true,
            })
            .state('single.signin', {
                url: '/signin',
                cache: false,
                views: {
                    'menuContent': {
                        templateUrl: 'pages/signin.html',
                        controller: 'signinCtrl',
                    }
                }
            })
            .state('single.signup', {
                url: '/signup',
                cache: false,
                views: {
                    'menuContent': {
                        templateUrl: 'pages/signup.html',
                        controller: 'signupCtrl',
                    }
                }
            })
            .state('app.home', {
                url: '/home',
                cache: false,
                views: {
                    'menuContent': {
                        templateUrl: 'pages/auditions.html',
                    }
                }
            })
            .state('app.profile', {
                url: '/profile',
                cache: false,
                views: {
                    'menuContent': {
                        templateUrl: 'pages/profile.html',
                        controller: 'profileCtrl',
                    }
                }
            })
            .state('app.profile-edit', {
                url: '/profile-edit',
                cache: false,
                views: {
                    'menuContent': {
                        templateUrl: 'pages/profile-edit.html',
                        controller: 'profileCtrl',
                    }
                }
            })
            .state('app.sample-form', {
                url: '/sample-form',
                cache: false,
                views: {
                    'menuContent': {
                        templateUrl: 'pages/sample-form.html',
                        controller: 'sampleCtrl',
                    }
                }
            });

    $urlRouterProvider.otherwise('/app/home');

});
