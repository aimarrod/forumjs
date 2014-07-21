
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