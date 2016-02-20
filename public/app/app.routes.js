angular.module('appRoutes', ['ngRoute'])

.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'app/views/pages/home.html',
		})
		.when('/community', {
			templateUrl: 'app/views/pages/community.html',
		})
		.when('/howto', {
			templateUrl: 'app/views/pages/howto.html',
		})
		.when('/kabar-kampus', {
			templateUrl: 'app/views/pages/kabarkampus.html',
		})
		.when('/kata-dosen', {
			templateUrl: 'app/views/pages/katadosen.html',
		})
		.when('/news', {
			templateUrl: 'app/views/pages/news.html',
		})
		.when('/events', {
			templateUrl: 'app/views/pages/event.html',
		})
		.when('/home', {
			templateUrl: 'app/views/pages/home.html',
		})
		.when('/5-hal-penting', {
			templateUrl: 'app/views/pages/articles/5-hal-penting.html',
		})
		.when('/post1', {
			templateUrl: 'app/views/pages/articles/post1.html',
		})
		.when('/login', {
			templateUrl: 'app/views/pages/login.html',
		})
		.otherwise({
        	redirectTo: '/home'
      	});
});