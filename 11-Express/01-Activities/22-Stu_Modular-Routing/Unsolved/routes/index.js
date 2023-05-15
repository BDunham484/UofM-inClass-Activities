// TODO: Import express
const express = require('express');
// TODO: Import modules for tips/feedback
const tipRouter = require('./tips');
const feedbackRouter = require('./feedback');
// TODO: Create app vaible to store the value of express()
const app = express();
// TODO: Use our routes
app.use('/tips', tipRouter);
app.use('/feedback', feedbackRouter);
// TODO: Export app
module.exports = app;