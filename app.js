(function(){
  'use strict';

  angular.module('MsgApp', [])
  .controller('MsgController', MsgController)
  // step2: Register Filter factory with module
  .filter('registration', RegistrationFilter);

  // 1. Attach $inject property to the function obejct more effidient way
  // step3: Inject it with name Filter.
  MsgController.$inject = ['$scope','registrationFilter'];

  function MsgController($scope,registrationFilter) {
    $scope.stateOfBeing = "registration";

    $scope.displayMessage = function () {
      var msg = "Your Registration has been done successfully...!";
      return msg;
    }

    $scope.registrationMessage = function () {
      var msg = "Your Registration has been done successfully...!";
      // call to custom filter
      msg = registrationFilter(msg);
      return msg;
    }

    $scope.feedMessage = function(){
      $scope.stateOfBeing = "registrationdone";
    };
  }
  //  step1: Define filter factory function: its as example of Factory Desgin Pattern
  function RegistrationFilter(){
    console.log('custom filter');
    return function (input){
      input = input || "";
      input = input.replace("Registration","Admission");
      return input;
    }
  }
})();
