const express = require('express');
const troco = require('../controller/troco');
const docs = require('../controller/docs');
const router = express.Router();

router.post('/', troco)
router.get('/', docs)

module.exports = router;