'use strict';

/**
 * Application
 */
angular.module('movieSearch', [
    'ui.router',
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'movieSearch.config',
    'movieSearch.services',
    'movieSearch.controllers',
    'movieSearch.components'
])
    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('search', {
                url: '/',
                templateUrl: 'views/search-results.html',
                controller: 'SearchCtrl'
            })
            .state('details', {
                url: '/details/:slug',
                templateUrl: 'views/details.html',
                controller: 'DetailsCtrl'
            })

        $urlRouterProvider.otherwise('/');

    });