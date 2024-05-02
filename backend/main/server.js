const express = require('express');
const cors = require('cors');
const router = require('./routes');
const { port } = require('./config');

const app = express();

app.use(express.json());
app.use(cors({
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
  allowedMethods: ['GET', 'POST', 'PATCH', 'DELETE'],
}));
app.use('/uploads', express.static('uploads'));
app.use(router);

app.listen(port);
