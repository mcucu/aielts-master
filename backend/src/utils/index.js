const express = require('express');
const Response = require('./response');

module.exports = {
    Router: express.Router,
    ...Response
};
