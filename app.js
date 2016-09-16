(function () {
'use strict';

angular.module('lunchChecker', [])
.controller('LunchController', LunchController);

LunchController.$inject = ['$scope'];
function LunchController($scope){
  $scope.currentText = "";
  $scope.message = "";

  $scope.checkIfTooMuch = function(){
    setMessageProperties(calculateDishesAmount($scope.currentText))
  };

  function calculateDishesAmount(string){
      if (string == "" || string == '""') {
        return 0;
      }
      return string.split(',').length;
  };

  function setMessageProperties(amount){
    if(amount==0){
      $scope.message = "Please enter data first";
      $scope.msgClass = 'msgEmptyClass';
      return;
    }
      $scope.msgClass = 'msgNormalClass';
    if (amount <=3) {
      $scope.message = "Enjoy!";
      return;
    }
    $scope.message =  "Too much!";
    return;
  };
}

})();
