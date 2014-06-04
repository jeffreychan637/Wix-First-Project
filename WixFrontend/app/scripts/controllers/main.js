'use strict';

angular.module('wixApp')
  .controller('MainCtrl', function ($scope, $wix, lowerCaser) {
    $scope.hello = 'phone';

    $scope.$watch('hello', function(newValue) {
      $scope.newHello = lowerCaser(newValue);
    });

    $scope.handleEvent = function(event) {
      $scope.$apply(function() {
        $scope.message = event;
      });
    };

    $wix.addEventListener($wix.Events.SETTINGS_UPDATED, $scope.handleEvent);

    if ($wix.Utils.getViewMode() !== 'standalone') {
      $scope.instanceId = $wix.Utils.getInstanceId();
      $scope.instance = $wix.Utils.getInstance();
    }
  });