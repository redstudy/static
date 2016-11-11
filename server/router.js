app.get('/hello', function(req, res) {
	res.send({
		status: 0,
		msg: "hello"
	});
});

app.get('/api/proxy', function(req, res) {
	res.send({
		status: 0,
		msg: "hello"
	});
});

app.get('/user/:uid', function(req, res) {
	console.log(req.params.uid); //100
	console.log(req.query.name); // ''
	res.send({
		status: 1,
		errorMsg: ""
	});
});

app.post('/comment', function(req, res) {
	console.log(req.body.comment); // ""
	res.send({
		status: 0,
		data: {
			cid: 100,
			comment: ""
		}
	});
});

app.get('/user', function(req, res) {
	res.render('user.ejs', {
		username: ''
	});
});