var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/chatbot";

MongoClient.connect(url, { useUnifiedTopology: true },function(err, db ) {
  if (err) throw err;
  var dbo = db.db("chatbot");
  var query = { "username":"vidhya" };
  dbo.collection("user_table").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});