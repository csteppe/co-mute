angular.module('app')
.controller('PostsCtrl', function ($scope, PostsSvc) {
  $scope.addPost = function () {
  
      PostsSvc.create({
        username: $scope.currentUser.username,
		departure: $scope.departure,
		arrival: $scope.arrival,
		origin: $scope.origin,
		days: $scope.days,
		destination: $scope.destination,
		seats: $scope.seats,
		notes: $scope.notes
        
		
      }).success(function (post) {
        $scope.posts.unshift(post)
        $scope.postBody = null
      })
    
  }

  PostsSvc.fetch().success(function (posts) {
    $scope.posts = posts
  })
})