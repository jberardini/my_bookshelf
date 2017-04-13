app.controller('BookShelfController', ['$scope', function($scope) {
  $scope.books = [
    {
      title: 'The Three Muskateers',
      author: 'Alexandre Dumas',
      rating: '***'
    },
    {
      title: 'The Complete Works of Edgar Allen Poe',
      author: 'Edgar Allen Poe',
      rating: '*****'
    },
    {
      title: 'A Little Life',
      author: 'HY',
      rating: '****'
    }
  ]
}]);