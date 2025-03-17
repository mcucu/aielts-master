const { Router } = require('../../utils');
const { createHandler } = require('../common');
const essayRouter = require('./handler');

const router = Router();
router.get('/essay', createHandler(essayRouter.handler));
router.post('/essay/submit', createHandler(essayRouter.essaySubmitHandler));
router.post('/essay/submit-v2', createHandler(essayRouter.essaySubmitV2Handler));
router.post('/essay/submit-stream', createHandler(essayRouter.essaySubmitStreamHandler));

module.exports = router;
