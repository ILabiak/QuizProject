const express = require("express");

const indexRouter = require("./routes/index");

const app = express();

app.use(express.json());

app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.status(404).send({ error: "Not found" });
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500).send({ error: err });
});

module.exports = app;
