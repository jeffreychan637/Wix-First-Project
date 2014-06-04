'use strict';

var app = require('./app');

var server = app.listen(process.env.PORT || 3000, function() {
    console.log('listening to port %d', server.address().port);
});

