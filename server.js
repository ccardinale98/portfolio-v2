const path = require('path');
const express = require('express');
const routes = require('./controllers');

const app = express();
const PORT = process.env.PORT || 3005;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));

app.use(routes);

app.listen(PORT, () => console.log('Now listening'));