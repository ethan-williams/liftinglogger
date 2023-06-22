"use strict";

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mssql = require('mssql');

const app = express();
const port = 8080;

// paser application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/', function (req, res) {
	const config = {
		user: 'gymgirl',
		password: 'trapezius',
		server: 'localhost',
		database: 'lifting_log'
	};

	mssql.connect(config, function (err) {
		let request = new mssql.Request();
		request.query('SELECT * FROM [lifting_log].[dbo].[exercise]', function (err, records) {
			if (err) {
				console.log(err);
				res.send(err);
			} else {
				res.send(records);
			}
		});
	});
});

app.get('/form', function (req, res) {
	res.sendFile(path.join(__dirname, '/src/components/LiftingDataEntryForm.html'));
});

app.post('/form', (req, res) => {
	let data = req.body;
	res.send('Data Received: ' + JSON.stringify(data));
})

let server = app.listen(5000, function () {
	console.log('Server is listening on port 5000...');
});