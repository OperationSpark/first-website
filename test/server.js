'use strict';

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(7777, () => {
	console.log('Running on http://localhost:7777');
});

app.use(express.static(path.join(__dirname, '../../../')));
