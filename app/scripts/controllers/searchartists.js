'use strict';

/**
 * @ngdoc function
 * @name musicTutorsApp.controller:SearchartistsCtrl
 * @description
 * # SearchartistsCtrl
 * Controller of the musicTutorsApp
 */
angular.module('musicTutorsApp')
  .controller('SearchartistsCtrl', function ($scope, $http) {
    $http.get('data/music-artists.json').then(function(response) {
		$scope.data = response.data;
		console.log($scope.data.length);

		var addFilterItems = function() {
		// Adds list items to filters
			// array of food styles and neighborhoods
			var genre = [];
			var focus = [];
			// number of restaurants
			var numArtists = $scope.data.length;

			// GENRE INPUTS
			// loop to add all genres to an array
			for (var i=0; i<numArtists; i++) {
				var artistGenre = $scope.data[i].style;
				var artistGenresLength = artistGenre.length;
				for (var j=0; j<artistGenresLength; j++) {
					genre.push($scope.data[i].style[j]);
				}
			}
			// Sort and filter genres array
			var genres = $.unique(genre).sort();
			var genresLen = genres.length;
			for (var i=0; i<genresLen; i++) {
				$("#genres").append(
			        '<option value="' + genres[i] + '">' + genres[i] + '</option>'
			    );
			}

			// FOCUS INPUTS
			// loop to add all skills to an array
			for (var i=0; i<numArtists; i++) {
				var artistFocus = $scope.data[i].skills;
				var artistFocusLength = artistFocus.length;
				for (var j=0; j<artistFocusLength; j++) {
					focus.push($scope.data[i].skills[j]);
				}
			}
			// Sort and filter genres array
			var focuses = $.unique(focus).sort();
			var focusLen = focuses.length;
			for (var i=0; i<focusLen; i++) {
				$("#focus").append(
			        '<option value="' + focuses[i] + '">' + focuses[i] + '</option>'
			    );
			}

		}();



		// Genre, Focus, and Price
		var filterArtists = function() {
		// Function that Sorts Artists based on filters.
			// number of artists
			var numArtists = $scope.data.length;
			// When changing the artist genre name.
			$("#genres").change(function() {
				// Rating value variable
				var genreVal = $("#genres").val();
				// Loop through each artist
				for (var i=0; i<numArtists; i++) {
					var thisArtist = $scope.data[i];
					var thisId = "#" + thisArtist.name.replace(/\s/g, '');
					// Check if the selected genre matches the artist
					// If clicked on Top Choice, display all and return
					if ($.inArray(genreVal, thisArtist.style)<0) {
						$(thisId).hide();
					} else {
						$(thisId).show();
					}
					if (genreVal === "Genre") {
						$(thisId).show();
					}
				};
			});
			// When changing the artist focus name.
			$("#focus").change(function() {
				// Rating value variable
				var focusVal = $("#focus").val();
				// Loop through each artist
				for (var i=0; i<numArtists; i++) {
					var thisArtist = $scope.data[i];
					var thisId = "#" + thisArtist.name.replace(/\s/g, '');
					// Check if the selected genre matches the artist
					// If clicked on Top Choice, display all and return
					if ($.inArray(focusVal, thisArtist.skills)<0) {
						$(thisId).hide();
					} else {
						$(thisId).show();
					}
					if (focusVal === "Focus") {
						$(thisId).show();
					}
				};
			});
			// When changing the artist price name.
			$("#price").change(function() {
				// Rating price variable
				var priceVal = $("#price").val();
				// Loop through each artist
				for (var i=0; i<numArtists; i++) {
					var thisArtist = $scope.data[i];
					var thisId = "#" + thisArtist.name.replace(/\s/g, '');
					// Check if the selected genre matches the artist
					// If clicked on Top Choice, display all and return
					if (priceVal === "Price") {
						$(thisId).show();
					} else if (thisArtist.price !== priceVal) {
						$(thisId).hide();
					} else {
						$(thisId).show();
					}
				}
			});
		}();
	});
  });
