angular.module('sortingApp').controller('mainCtrl', function($scope, dataService) {

  $scope.data = dataService.getData();

  /* $scope.starWars = dataService.getStarWarsData().then(function(result) {
    $scope.starWars = result;
  }) */
});
