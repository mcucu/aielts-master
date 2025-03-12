const { Router } = require('../../utils');

const { createHandler } = require('../common');
var handler = require('../base/handler');

const router = Router();
router.get('/', createHandler(handler));

module.exports = router;
