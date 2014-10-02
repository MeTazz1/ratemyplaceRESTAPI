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
   
   var query = client.query('SELECT * FROM ratings');
   query.on('row', function(row) {
    console.log('row -> ' + row.comment);
   });

   // var date = new Date();
   //  var rats = [
   //      { id: 0,
   //        author: 'foo@bar.com',
   //        authorid: 1, 
   //        date: date,
   //        placeid: 1,
   //        comment: 'first comment bro'
   //      }, {
   //        id: 1,
   //        author: 'foo@bar.com',
   //        authorid: 1, 
   //        date: date,
   //        placeid: 1,
   //        comment: 'second comment bro'
   //      } ];

   //  var count = rats.length;
   //  rats.forEach(function(rating) {
   //    console.log('parsing ' + rating.ratingid);
   //    var insertQuery = 'INSERT INTO ratings(id, author, authorid, date, placeid, comment) VALUES(' + rating.id + ', \'' + rating.author + '\',' + rating.authorid + ',\'' + rating.date + '\',' + rating.placeid + ', \'' + rating.comment + '\');';
   //    console.log('query is ' + insertQuery);
   //      var qq = client.query(insertQuery, function(err, result) {
   //        if (err)
   //        {
   //          console.log('err is ' + err);
   //        }
   //        else
   //        console.log('ratings ' + rating.id + ' has been added');
   //      });

   //      qq.on('end', function(result) {
   //        console.log('ended ->' + result);
   //      });
   //  });
  }
});


