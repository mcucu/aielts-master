const express = require('express');
const Response = require('./response');
const WritingPrompts = require('./writingPrompts');
const Helpers = require('./helpers');

module.exports = {
    Router: express.Router,
    ...Response,
    ...WritingPrompts,
    ...Helpers
};
