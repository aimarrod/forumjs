angular.module('forumjsApp')
.controller('ShowThreadCtrl', function ($scope, $http,$stateParams, socket, Auth,$filter) {
	$scope.isLoggedIn = Auth.isLoggedIn;
  $scope.thread={};
  $scope.searchText = ""; 
	$http.get('/api/threads/'+$stateParams.id).success(function(thread) {
    $scope.thread = thread;
    $http.get('/api/posts/'+$stateParams.id).success(function(posts) {
      thread.posts=posts;
      if($scope.isLoggedIn){
        var found;
        var userId=Auth.getCurrentUser()._id;
        for(var i=0;i<$scope.thread.posts.length;i++){
          found=false;
          for(var j=0;j<$scope.thread.posts[i].voters.length && !found;j++){
            if($scope.thread.posts[i].voters[j] === userId){
              found=true;
              $scope.thread.posts[i].userHasVoted=true;
            }
          }
        }
      }
    });
  });
  $scope.addVote=function(index){
    $http.post('/api/posts/'+$scope.thread.posts[index]._id+'/vote').success(function(post) {
      $scope.thread.posts[index].voters=post.voters;
      $scope.thread.posts[index].userHasVoted=true;
    });
  }
  //TODO in Server
  $scope.removeVote=function(index){
    $http.post('/api/posts/'+$scope.thread.posts[index]._id+'/vote').success(function(post) {
      $scope.thread.posts[index].voters=post.voters;
    });
  }
  var orderBy = $filter('orderBy');
  $scope.orderByNote = function () {
    $scope.thread.posts = orderBy($scope.thread.posts, '-voters.length', false);
  };
});