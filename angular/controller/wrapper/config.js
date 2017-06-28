
app.config(function($stateProvider, $urlRouterProvider,$mdThemingProvider) {

$urlRouterProvider.otherwise('/');

$mdThemingProvider.theme('customTheme') 
                  .primaryPalette('green')
                  .accentPalette('orange')
                  .warnPalette('red');
               



	$stateProvider
	// loginstart
	.state('login',{
		url:'/',
		views: {
			'template': {
				templateUrl:'angular/view/test/test.html',
				controller: 'mainCtrl as ctrl',
			}

		}
	})

	





});

