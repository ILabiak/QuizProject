"use strict";

var app = require("./app");
var http = require("http");

//   Sync Database
// models.sequelize.sync()

const port = 8080;
app.set("port", port);

var server = http.createServer(app);

server.listen(port);
