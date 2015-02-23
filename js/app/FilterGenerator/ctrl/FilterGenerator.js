app.controller(
	'ctrl.FilterGenerator',
	[
	 	'$scope'
	 	, '$resource'
		, function(
			$scope 
			, $resource
		){
	 		$scope.domainsInput = '';
	 		$scope.domains = [];
	 		$scope.usersInput = '';
	 		$scope.users = [];
	 		
	 		$scope.addDomain = function(){
	 			$scope.domains.push({
	 				name: $scope.domainsInput
	 			});
	 			$scope.domainsInput = '';
	 		};
	 		$scope.removeDomain = function( domain ){
	 			$scope.domains.splice(
	 				$scope.domains.indexOf(domain),
	 				1
	 			);
	 		};
	 		$scope.addUser = function(){	
	 			$scope.users.push({
	 				name: $scope.usersInput
	 			});
	 			$scope.usersInput = '';
	 		};
	 		$scope.removeUser = function( user ){
	 			$scope.users.splice(
	 				$scope.users.indexOf(user),
	 				1
	 			);
	 		};
	 		
	 		$scope.applyFilters = function(){
	 			console.log('apply filters');
	 		};
		} 
	]
);