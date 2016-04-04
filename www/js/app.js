
var app = angular.module('auditionworld', ['ionic']);

app.run(function ($ionicPlatform, $location) {
    $ionicPlatform.ready(function () {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            // Set the statusbar to use the default style, tweak this to
            // remove the status bar on iOS or change it to use white instead of dark colors.
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
            .state('app.home', {
                url: '/home',
                cache: false,
                views: {
                    'menuContent': {
                        templateUrl: 'pages/auditions.html',
                    }
                }
            })
            .state('app.signin', {
                url: '/signin',
                cache: false,
                views: {
                    'menuContent': {
                        templateUrl: 'pages/signin.html',
                    }
                }
            })
            .state('app.signup', {
                url: '/signup',
                cache: false,
                views: {
                    'menuContent': {
                        templateUrl: 'pages/signup.html',
                    }
                }
            })
            .state('app.help', {
                url: '/help',
                cache: false,
                views: {
                    menuContent: {
                        templateUrl: 'pages/help.html',
                        controller: 'projectCtrl'
                    }
                }
            })
            .state('app.task', {
                url: '/task/{projectId}',
                views: {
                    menuContent: {
                        templateUrl: 'task.html',
                        controller: 'taskCtrl',
                        resolve: {
                            projectId: function ($stateParams, Projects) {
                                return $stateParams.projectId;
                            }
                        }
                    }
                }
            });

    $urlRouterProvider.otherwise('/app/home');

});
