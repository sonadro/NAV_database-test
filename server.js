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
server.get('/', (req, res) => res.redirect('/hjem'));

// routes
server.get('/hjem', (req, res) => res.render('index'));
server.get('/om-siden', (req, res) => res.render('om'));

// admin routes
server.get('/admin', (req, res) => res.render('adminPages/admin'));
server.get('/form', (req, res) => res.render('adminPages/form'));

// 404
server.use((req, res) => res.status(404).render('404.ejs'));