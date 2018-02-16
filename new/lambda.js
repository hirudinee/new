let AWS = require('aws-sdk');
let connectionManager = require('./ConnectionManager');
let SL = require('@slappforge/slappforge-sdk');
const rds = new SL.AWS.RDS(connectionManager);
const s3 = new AWS.S3();
const ddb = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback) {
	ddb.get({
		TableName: 'ThuvvaTable',
		Key: { 'ID': 'test' }
	}, function (err, data) {
		if (err) {
			//handle error
		} else {
			//your logic goes here
		}
	});
	s3.getBucketLocation({
		'Bucket': "hiru.test"
	}).promise()
		.then(data => {
			console.log(data);           // successful response
			/*
			data = {
				LocationConstraint: "us-west-2"
			}
			*/
		})
		.catch(err => {
			console.log(err, err.stack); // an error occurred
		});

	// You must always end/destroy the DB connection after it's used
	rds.beginTransaction({
		instanceIdentifier: 'hiru'
	}, function (error, connection) {
		if (error) { throw err; }
	});



	//test
	callback(null, 'Successfully executed');
}