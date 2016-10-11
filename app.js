(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController ($scope) {
  $scope.lunch = "";
  $scope.message = {
  	success: false,
  	content: ""
  };
  var comma = ',';

  $scope.checkLunch = function () {
  	var string = $scope.lunch;
  	string = string.replace(/\s+/g, '');

  	var array = string.split(comma);
  	var count = 0;

  	for (var i = 0, length = array.length; i < length; i++) {
  		if (array[i] !== "") {
  			count++;
  		}
  	}

    if (count === 0) {
      $scope.message.success = false;
      $scope.message.content = "Please enter data first!";
    }
  	else if (count > 3) {
  		$scope.message.success = false;
  		$scope.message.content = "Too many!";
  	}
  	else {
  		$scope.message.success = true;
  		$scope.message.content = "Enjoy!";
  	}
  };

}

})();
