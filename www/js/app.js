// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular
.module('todo', [
  'ionic'
  ])

.controller('main', function ($scope) { 
  $scope.empty = false;
  $scope.duplicated = false;
  $scope.todos = [
    { name: "todo 1"},
    { name: "todo 2"},
    { name: "todo 3"},
    { name: "todo 4"}
  ];

  $scope.addTodo = addTodo;
  $scope.deleteTodo = deleteTodo;
  $scope.isEmpty = isEmpty;
  $scope.isDuplicated = isDuplicated;

  function addTodo (todo) {
    if (!isEmpty(todo) && !isDuplicated(todo)) {
      $scope.todos.push({
        name : todo
      });
      $scope.empty = false;
      $scope.duplicated = false;
      console.log("test");
    } else if (isEmpty(todo)) {
      $scope.empty = true;
    } else if (isDuplicated(todo)) {
      $scope.duplicated = true;
    } 
  }

  function deleteTodo (todo) {
    $scope.todos = $scope.todos.filter(function(obj) {
      return todo.name !== obj.name;
    })
  }

  function isEmpty (todo) {
    return todo === undefined || todo.length === 0;
  }

  function isDuplicated (todo) {
    for (var i=0; i < $scope.todos.length ; i++) {
      if ($scope.todos[i].name === todo) {
        return true;
      }
    }
    return false;
  }

});
