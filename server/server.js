var http = require('http'),
    app = require('./config/express');

http.createServer(app).listen(3920, function() {
    console.log('Server running on port: ' + this.address().port);
});

