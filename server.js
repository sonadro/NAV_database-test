// express
const express = require('express');
const server = express();

// middleware
server.use(express.static('public'));
server.use(express.json());

// view engine
server.set('view engine', 'ejs');

// listen for requests
const port = 80;
server.listen(port);
console.log(`Listening for request on port ${port}`);

// redirects
server.get('/', (req, res) => res.redirect('/form'));

// routes
server.get('/form', (req, res) => res.render('index'));

// 404
server.use((req, res) => res.status(404).render())