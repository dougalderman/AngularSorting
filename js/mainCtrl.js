angular.module('sortingApp').controller('mainCtrl', function($scope) {

  /* $scope.showOrder = function(in) {
    console.log(in);
  } */

  $scope.data = [
        {
            firstName: 'Turner',
            lastName: 'Houghton',
            city: 'Orem',
            state: 'Utah'
        },{
            firstName: 'Adam',
            lastName: 'McNevin',
            city: 'Denver',
            state: 'Colorado'
        },{
            firstName: 'Doug',
            lastName: 'Alderman',
            city: 'Millcreek',
            state: 'Utah'
        },{
            firstName: "Jeff",
            lastName: "Garcia",
            city: "Highland",
            state: "Utah"
        },{
            firstName: 'Dan ',
            lastName: 'Le',
            city: 'Ocean Springs',
            state:'Mississippi'
        },{
            firstName: 'Tim',
            lastName: 'Charlesworth',
            city: 'Riverton',
            state: 'Utah'
        }];
  

});
