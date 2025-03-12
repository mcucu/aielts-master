const { Router } = require('../../utils');
const { createHandler } = require('../common');
const essayRouter = require('./handler');

const router = Router();
router.get('/essay', createHandler(essayRouter.handler));
router.post('/essay/submit', createHandler(essayRouter.essaySubmitHandler));

module.exports = router;
