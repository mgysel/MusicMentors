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
  .module('musicTutorsApp', ['ui.router', 'angularCSS'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	// Registering the serviceWorker

	// Only register if the navigator is serviceWorker compatible
	if (navigator.serviceWorker) {
		// Register the service worker
		navigator.serviceWorker.register('../sw.js').then(function(reg) {
			// log a success
			console.log('Registration successful');
		}).catch(function(err) {
			// log a failure
			console.log('Registration failed');
		});
	}
  	$urlRouterProvider.otherwise('/');
  	$stateProvider
	  	.state('home', {
	  		url: '/',
	  		templateUrl: 'views/index.html',
	  		controller: 'IndexCtrl as index',
	  		css: 'styles/index.css'
	  	})
	  	.state('searchArtists', {
	  		url: '/search-artists',
	  		templateUrl: 'views/searchartists.html',
	  		controller: 'SearchartistsCtrl as searchartists',
	  		css: 'styles/search-results.css'
	  	})
	  	.state('Hyroglifics', {
	  		url: '/hyroglifics',
	  		templateUrl: 'views/hyroglifics.html',
	  		controller: 'HyroglificsCtrl as hyroglifics',
	  		css: 'styles/artist1.css'
	  	});
  }]);
