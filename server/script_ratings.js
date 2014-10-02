var pg = require('pg');
var params = { host: 'ec2-54-243-48-227.compute-1.amazonaws.com',user: 'upiqozgkpecvyk',password: 'xswmZJCFGbOgkQ0RhuGKqtKhbR',port: '5432', database: 'd40b08n5m11i4u',ssl: true };
var client = new pg.Client(params);

client.connect(function(err, client, done) {
  if (err)
  {
      console.log('err is ' + err);
  }
  else
  {
    console.log('POSTGRESQL connection established');
   
   var query = client.query('DROP TABLE ratings', function(err, result) {
    if (err)
      console.log('err ' + err);
    else
      console.log('rating is deleted');
   });

   var query2 = client.query('CREATE TABLE ratings (ratingid int primary key, author varchar(50), authorid int, date varchar(50), placeid int, comment text)', function(err, result) {
    if (err)
      console.log('err ' + err);
    else
      console.log('rating is created ' + result);
    client.end();
   });
  }
});


