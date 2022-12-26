require('dotenv').config();
const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const cors = require('cors');
const appRoutes = require('./src/routes/routes');

const app = express();

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Mitra Usaha API with Swagger',
      version: '0.1.0',
      description:
        'This is mitra usaha api documentation made with Express and documented with Swagger',
      license: {
        name: 'MIT',
        url: 'https://spdx.org/licenses/MIT.html',
      },
      contact: {
        // name: 'LogRocket',
        // url: 'https://logrocket.com',
        // email: 'info@email.com',
      },
    },
    servers: [
      {
        url: process.env.BASE_URL + ':' + process.env.PORT,
      },
    ],
  },
  apis: ['./src/routes/routes.js'],
};

const specs = swaggerJSDoc(options);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', appRoutes);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));
app.listen(process.env.PORT, () => {
  console.log('App listening on port ' + process.env.PORT);
});
