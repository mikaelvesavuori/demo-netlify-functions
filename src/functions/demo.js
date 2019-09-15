exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: "Hey there, seems like your Netlify Function is working just fine! :)"
  });
}
