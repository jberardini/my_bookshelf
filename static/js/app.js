var app = angular.module('BooksApp', ['ngRoute']).config(function($interpolateProvider){
    $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});

app.config(function($routeProvider) {
  $routeProvider.when('/', {
    controller: 'BookShelfController',
    templateUrl: '/static/angular_templates/bookshelf.html'
  }).when('/:id', {
    controller: 'BookController',
    templateUrl: '/templates/book.html'
  }).otherwise({
    redirectTo: '/'
  });
});

