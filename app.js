
var express = require('express');
var indexRouter = require('./routes/index');
var app = express();

app.use(express.json());


app.use('/', indexRouter);


let port=process.env.PORT||4444;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

module.exports = app;
