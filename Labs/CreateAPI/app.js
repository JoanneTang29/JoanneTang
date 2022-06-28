// IMPORT EXPRESS IN ORDER TO CREATE OUR OWN EXPRESS APPLICATION
// This is the type of import you use for the backend
const express = require('express');

// use import if you don't want to switch back and forth between require and import... This will  be the same syntax for front-end and back-end. must use "type": "commonjs" in package.json
// import express from 'express';

// IMPORT TODO ROUTER
const todoRouter = require('./routes/todoRoute');

// CREATE A VARIABLE TO HOLD OUR EXPRESS METHODS
const app = express();

// TELL YOUR EXPRESS APPLICATION NOT TO ACCEPT NESTED DATA
app.use(
  express.urlencoded({
    extended: false,
  })
);

// ADD A BODY PARSER
app.use(express.json());

// ADD A PATH TO STATIC FILES
app.use(express.static('public'));

// SEND USER TO THE TODO ROUTER
app.use('/todos', todoRouter);

module.exports = app;
