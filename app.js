require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const appRoutes = require('./src/routes/routes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/app', appRoutes);
app.listen(process.env.PORT, () => {
  console.log('App listening on port ' + process.env.PORT);
});
