// import query from './db';

// export async function allBooks() { 
//   const sql = `
//   select * from hb.book;
//   `;
//   try {
//     const result = await query(sql);
//     console.log("Returning : ",typeof(result),result.rows[0])
//     return result.rows[0];
//   } catch (err) {
//     console.log(err);
//     throw err;
//   }
// }



export async function allBooks() { 
  var AWS = require('aws-sdk');
  // Set the region 
  AWS.config.update({region: 'ap-southeast-2'});
  console.log("Starting")
  // Create the DynamoDB service object
  var ddb = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});
  
//   var params = {
//     'book':{
//     RequestItems:{
//        Keys: [
//          {
//       'book_id': '1'
//     }]
//   }
//   //   ProjectionExpression: 'ATTRIBUTE_NAME'
//   }
// };


var params = {
  // ExpressionAttributeValues :{ 'book_id': {S: "1"}
  // },
  KeyConditionExpression: "#book_id = :1",
  ExpressionAttributeNames:{
    "#book_id": "book_id"
    },
    ExpressionAttributeValues: {
      ":1":"1"
      },
  TableName: "book"
//   ProjectionExpression: 'ATTRIBUTE_NAME'
}; 
  // return "Test"
  // return `[
  //   {
  //     "date": "12321",
  //     "book_id": "1",
  //     "id": "12312",
  //     "book_author": "A",
  //     "book_name": "whats up"
  //   }
  // ]`
  // Call DynamoDB to read the item from the table
  // const result = await query(sql);

return  ddb.query(params).promise()
  .then(data => {
    console.log("Returning :  ", typeof(data.Items[0]), JSON.stringify(extractData(data.Items[0])))
    return extractData(data.Items[0]) }
  ).catch(err => {
    console.log("Error thrown AVI  ",err)}
    )
  // const data = await ddb.batchGet(params, function(err, data) {
  //   if (err) {
  //     console.log("Error", err);
  //   } else {
  //     console.log("Success", JSON.stringify(data.Responses.book,null,2));
  //     // console.log(typeof(data.Item));
  //     // return "Test";
  //     // console.log("Waiting ")
  //     // return data.Responses.book;
  //   }
  // }).then(value => {
  //   console.log("Value : ",value);
  // },reason => {
  //   console.error(reason)
  // })
  // return JSON.stringify(data.Responses.book,null,2)
}
const extractData = obj => {
  const resultMap = {}
  resultMap.date = obj.date,
  resultMap.book_id = obj.book_id,
  resultMap.book_author = obj.book_author
  return resultMap
}