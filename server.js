const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

dotenv.config()


const booksRoute = require('./routes/books');
const db = require('./models');
const app = express();

const PORT = 3000;

// Swagger configuration
const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Library API',
        version: '1.0.0',
        description: 'A simple Express Library API'
      },
      servers: [
        {
          url: `http://localhost:${PORT}`,
        },
      ],
    },
    apis: ['./routes/*.js'],
  };


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Serve Swagger documentation as the index route
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/books', booksRoute);



db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
