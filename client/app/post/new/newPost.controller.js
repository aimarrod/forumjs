angular.module('forumjsApp')
.controller('NewPostCtrl', function ($scope, $http, socket, $state,Auth,$stateParams) {
  	$scope.post={};
	$scope.createPost=function(form){
  		$scope.submitted = true;
      	if(form.$valid){
      		var userId=Auth.getCurrentUser()._id;
      		var threadId=$stateParams.id;
			var post={'text':$scope.post.text,'voters':{}, 'author':userId,'thread':threadId};
			$http.post('/api/posts',post).success(function(post) {
				$state.go("showThread",{id: threadId })
			});
    	}
	};
});