let express = require('express');
let port = 3000;
let app = express();
let todoController = require('./controllers/todoController');

//set up the template engine
app.set('view engine','ejs');

//static files
app.use(express.static('./public'));

//fire controllers
todoController(app);

//listen to port
app.listen(port,function (err) {
	// body...
	if(err){
		console.log('something bad happened');

	}
	console.log(`you listening the port ${port}`);
})