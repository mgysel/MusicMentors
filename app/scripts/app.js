'use strict';

/**
 * @ngdoc overview
 * @name musicTutorsApp
 * @description
 * # musicTutorsApp
 *
 * Main module of the application.
 */
angular
  .module('musicTutorsApp', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  	$urlRouterProvider.otherwise('/');
  	$stateProvider
	  	.state('home', {
	  		url: '/',
	  		templateUrl: 'views/index.html',
	  		controller: 'IndexCtrl as index'
	  	})
	  	.state('searchArtists', {
	  		url: '/search-artists',
	  		templateUrl: 'views/searchartists.html',
	  		controller: 'SearchartistsCtrl as searchartists'
	  	})
	  	.state('Hyroglifics', {
	  		url: '/hyroglifics',
	  		templateUrl: 'views/hyroglifics.html',
	  		controller: 'HyroglificsCtrl as hyroglifics'
	  	});
  }]);
