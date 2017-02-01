'use strict';

/**
 * @ngdoc function
 * @name musicTutorsApp.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * Controller of the musicTutorsApp
 */
angular.module('musicTutorsApp')
  .controller('IndexCtrl', function () {
  	$("#sign-up-button").click(function() {
  		if ($(".sign-up-popout").css("display") === "none") {
	  		$(".sign-up-popout").show();
  		} else {
  			$(".sign-up-popout").hide();
  		}
  	})
  	$("#login-button").click(function() {
  		if ($(".login-popout").css("display") === "none") {
	  		$(".login-popout").show();
  		} else {
  			$(".login-popout").hide();
  		}
  	})
  });
