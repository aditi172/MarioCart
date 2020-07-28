const awsServerlessExpress = require('aws-serverless-express');
const app = require('./app');

const server = awsServerlessExpress.createServer(app);

exports.handler = (event, context) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  return awsServerlessExpress.proxy(server, event, context, 'PROMISE').promise;
};


// "Access-Control-Allow-Origin": {
//   "type": "string"
// },
// "Access-Control-Allow-Methods": {
//   "type": "string"
// },
// "Access-Control-Allow-Headers": {
//   "type": "string"
// }