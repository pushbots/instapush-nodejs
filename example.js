var instapush = require('./lib/index.js');
//authorize
instapush.settings({
	token: 'TOKEN',
	id:'ID',
	secret:'SECRET',
});

//basic usage for any method
instapush.request('GET','/apps/list' ,function (err, response){
	console.log(response);
});

//send a push notification triggered with the search event
instapush.notify({"event":"search","trackers":{"term":"api"}} ,function (err, response){
	console.log(response);
});

//list all events for the app, using the id and secret
instapush.listEvents(function (err, response){
	console.log(response);
});
//list all apps for a user using user token
instapush.listApps(function (err, response){
	console.log(response);
});

//adding a new event to an application
data = {"title":"signup",
		"trackers":["email","count"],
		"message":"{email} signed up ({count})"
		};
instapush.addEvent(data,function (err, response){
	console.log(response);
});
//adding a new app to user using user token.
instapush.addApp({"title":"NodeJSAPP"},function (err, response){
	console.log(response);
});