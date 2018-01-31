const mv = require('mv');
const del = require('del');
 
//Delete files that might be in the server folder, and rebuild new assets in their place
del(['server/public/*', 'server/views/*']).then(paths => {
    console.log('Deleted files and folders:\n', paths.join('\n'));

    mv('./dist/index.html', './server/views/index.ejs', function(err) {
      if (err) throw err;
    });
    mv('./dist', './server/public', function(err) {
      if (err) throw err;
    });
});
