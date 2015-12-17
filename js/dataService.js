angular.module('sortingApp').service('dataService', function($http) {

this.getData = function() {
  return data;
}

this.getStarWarsData = function() {
  $http({
    method: 'GET',
    url: 'http://swapi.co/api/people/1'
  }).then(function(result) {
    return result.data;
  })
}
var data = [
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

})
