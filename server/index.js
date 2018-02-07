const dotenv = require('dotenv');
const path = require('path');
const express = require('express');

dotenv.config();

const routes = require('./routes');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/api/v1/', routes);
app.use('*', (req, res) => res.render('index'));

app.listen(process.env.PORT);
console.log(`Listening on port ${process.env.PORT}`);
