// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular
.module('todo', [
  'ionic',
  'LocalStorageModule'
  ])

.config(function (localStorageServiceProvider) {
  localStorageServiceProvider
    .setPrefix('todo');
})

.controller('main', function ($scope, localStorageService) { 
  $scope.todo = "";
  $scope.empty = false;
  $scope.exist = false;
  $scope.todos = [
    {
       name: "todo 1"
    },
    {
       name: "todo 2"
    },
    {
       name: "todo 3"
    },
    {
       name: "todo 4"
    }];

    $scope.addTodo = addTodo;

    function addTodo(todo) {
      if (!checkExist(todo) && checkNotEmpty(todo)) {
        $scope.todos.push({name: todo});
        $scope.exist = false;
        $scope.empty = false;
      } else if (checkExist(todo)) {
        $scope.exist = true;
      } else if (!checkNotEmpty(todo)) {
        $scope.empty = true;
      }
    }

    function checkNotEmpty (name) {
      return name.length !== 0;
    }

    function checkExist (name) {
      for (var i = 0; i < $scope.todos.length; i++) {
        if ($scope.todos[i].name === name) {
          return true
        }
      }
      return false;
    }

});





/*.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})*/
