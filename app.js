const express = require('express');
const bodyParser = require('body-parser');
const teacherRouter = require('./routes/teacherRoutes');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/api/v1/teachers', teacherRouter);

module.exports = app;
