app.directive("contactTitle",function(){
	return{
		restrict: 'A',
		templateUrl: 'angular/view/contact-title-template.html' , 
		scope:{
			contact:'='
		},
		replace: true
	};
});