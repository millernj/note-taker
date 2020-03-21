const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.static('public/'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const htmlRoutes = require('./routes/html');
const apiRoutes = require('./routes/api');

app.use('/', htmlRoutes);
app.use('/api', apiRoutes);


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
