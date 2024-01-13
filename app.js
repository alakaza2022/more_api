const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(morgan('combined'));


// Routes
const indexRoute = require('./routes/index');
const movieRoute = require('./routes/movieRoutes');

app.use('/', indexRoute);
app.use('/movies', movieRoute);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
module.exports = app;

