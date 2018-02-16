let AWS = require('aws-sdk');
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



	//test
	callback(null, 'Successfully executed');
}