angular.module('MailerApp', [])

.controller('EmailController', ['$scope', '$http', function ($scope, $http){
	$scope.emails = [
    		{ from: 'John', subject: 'I love angular', date:'Jan 1' },
    		{ from: 'Chris', subject: 'whats up Matt', date:'March 4' },
    		{ from: 'Wally', subject: 'Pants pants pants', date:'June 11'}
    		];

}]);