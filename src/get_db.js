// var AWS = require('aws-sdk');
// // Set the region 
// AWS.config.update({region: 'ap-southeast-2'});
// console.log("Starting")
// // Create the DynamoDB service object
// var ddb = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});

// var params = {
//   TableName: 'book',
//   Key: {
//     'book_id':  "1"
//   },
// //   ProjectionExpression: 'ATTRIBUTE_NAME'
// };

// // Call DynamoDB to read the item from the table
// ddb.get(params, function(err, data) {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     console.log("Success", data.Item);
//   }
// });

var AWS = require('aws-sdk');
  // Set the region 
  AWS.config.update({region: 'ap-southeast-2'});
  console.log("Starting123")
  // Create the DynamoDB service object
  var ddb = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});
  
  var params = {
    RequestItems:{
      'book':{
       Keys: [
         {
      'book_id': '1'
    }]
  }
  //   ProjectionExpression: 'ATTRIBUTE_NAME'
  }
};
   
// var params = {
  
//   ExpressionAttributes: {
//     ""
//   }
//   TableName: 'book',
//   Key:{'book_id': '1'}
// };
console.log("Step2")
  // Call DynamoDB to read the item from the table
  const data =  ddb.batchGet(params, function(err, data){ 
  // const data =  ddb.get(params, function(err, data){
    if (err) {
      console.log("Error111", err);
    } else {
      console.log("Success", data.Responses.book);
      console.log(typeof(data.Item));
      return data.Item
    }
  });