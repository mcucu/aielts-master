/**
 * everything start from here!!!
 */
const express = require('express');
const cors = require('cors');
const logger = require('pino')()

const config = require('../config');
const {
    notFoundHandler,
    errorHandler
} = require('./utils/response');
const routes = require('./routes');

const app = express();
app.locals.config = config;
app.locals.logger = logger;

/**
 * register middlewares
 */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

/**
 * register routes
 */
routes.forEach(route => app.use(route));

/**
 * notfound & error handler
 */
app.use(notFoundHandler);
app.use(errorHandler);

/**
 * startServer
 */
server = app.listen(config.port || 3000, function() {
    app.locals.logger.info(`${config.name} is listening on ${config.host}:${config.port}`);
});

/**
 * stopServer
 * @returns {void} - stop signal
 */
const stopServer = () => {
    server.close();
};

process.on('SIGINT', stopServer);
process.on('SIGTERM', stopServer);
