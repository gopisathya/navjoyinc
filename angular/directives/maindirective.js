app.directive("contactTitle",function(mainService,$http){
	return{
		restrict: 'AE',
		templateUrl: 'angular/view/contact-title-template.html', 
		scope:{},
	  // replace: true,
       link:function(scope, element, attrs){
       	scope.addcontact = function(data) {
  		alert(JSON.stringify(data));
        if (angular.isDefined(data)) {
            mainService.addcontact(data).then(function(response) { 
                console.log(response);
                refresh();
            });
        }
    }


var refresh= function(){

$http.get('/contactlistdata').success(function(response){
  console.log("i received data from response");
  scope.contactList = response;
  scope.contact ="";
})
}

refresh();

// remove

scope.remove = function(id){
console.log(id);
if (angular.isDefined(id)) {
            mainService.removecontact(id).then(function(response) { 
                console.log(response);
                refresh();
            });
        }
    }

// Edit

scope.edit = function(id){
console.log(id);
if (angular.isDefined(id)) {
            mainService.editcontact(id).then(function(response) { 
                console.log("response"+JSON.stringify(response));
                 scope.contact = response.data;
            });
        }
    }


// update
scope.update = function(){
  $http.put('/updatecontact/'+scope.contact._id, scope.contact).success(function(response){
    refresh();
  })
}
// clear
scope.deselect = function(){
    scope.contact=" ";

}

       } // link ends
}

	
});