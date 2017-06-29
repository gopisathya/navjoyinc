var app=angular.module('app');
app.factory('mainService',function ($http,$window) {
return{

 addcontact:function(data)
       {
        // alert(JSON.stringify(data));
	       	var update=$http.post('/addcontact/',data).then(function(response)
	       	{
                return response;
	       	});           
           return update;
       },

 refresh:function(data)
       {
        // alert(JSON.stringify(data));
	       	var update=$http.get('/contactlistdata/',data).then(function(response)
	       	{
                return response;
	       	});           
           return update;
       },



// remove

removecontact:function(id)
       {
	       	var update=$http.delete('/removecontact/'+id).then(function(response)
	       	{
                return response;
	       	});           
           return update;
       },



// Edit

editcontact:function(id)
       {
        
	       	var update=$http.get('/editcontact/'+id).then(function(response)
	       	{
                return response;
	       	});           
           return update;
       },


// Update

updatecontact:function(data)
       {
        alert(JSON.stringify(data));
	       	var update=$http.put('/updatecontact/'+data).then(function(response)
	       	{
                return response;
	       	});           
           return update;
       },
}

})