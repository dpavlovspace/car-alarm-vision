const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const config = require('./config');

const app = express();

// DB Connection
mongoose
  .connect(process.env.DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
  })
  .then(() => {
      console.log(`DB connected ${process.env.DATABASE}`);
  });

// app setup
app.enable('trust proxy');
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

if (process.env.CORS) {
    app.use(cors());
}

// routes
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../../client/public')));
    app.get('/', (req, res) =>
      res.sendFile(path.resolve(__dirname, '../../client/public/index.html'))
    );
}

app.use('/api/', require('./routes/settings'));
// app.use('/api/', require('./routes/state'));

app.use((err, req, res, next) => {
    console.log('Error:', err.message);
    res.status(422).json(err.message);
});

// start the server
const port = process.env.PORT || 3000;
global.server = app.listen(port, () => {
    console.info(`Server listening on port ${port}`);
});
