'use strict';

angular.module('forumjsApp')
  .controller('ThreadCtrl', function ($scope, $http, socket,$state) {
    $http.get('/api/threads').success(function(threads) {
      $scope.threads = threads;
    });
  });

angular.module('forumjsApp')
.controller('NewThreadCtrl', function ($scope, $http, socket, $state,Auth) {
	$scope.thread={};
	$scope.createThread=function(form){
  		$scope.submitted = true;
      if(form.$valid){
      	var userId=Auth.getCurrentUser()._id;
        var thread={'title':$scope.thread.title,'author':userId };
      	$http.post('/api/threads',thread).success(function(thread){
    			var post={'text':$scope.thread.post,'voters':{}, 'author':userId,'thread':thread._id};
    			$http.post('/api/posts',post).success(function(post) {
    				$state.go("showThread",{id: thread._id })
  			});
  		});
    }
	};
});

angular.module('forumjsApp')
.controller('ShowThreadCtrl', function ($scope, $http,$stateParams, socket, Auth) {
	$scope.thread={};
	$http.get('/api/threads/'+$stateParams.id).success(function(thread) {
    $scope.thread = thread;
    $http.get('/api/posts/'+$stateParams.id).success(function(posts) {
      thread.posts=posts;
    });
  });
});
