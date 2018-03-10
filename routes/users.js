var express = require('express');
var router = express.Router();
const db = require('../app/db');

/* GET users listing. */
router.get('/', async function(req, res, next) {
	const users = await db('users').first();
  	res.send(users);
});

module.exports = router;
