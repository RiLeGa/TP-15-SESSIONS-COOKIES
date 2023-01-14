var express = require('express');
var router = express.Router();
const Validation = require('../validations/Validation')

const {index, color, logout, destroy} = require('../controller/indexController')



router.get('/', index)
router.post('/', Validation, color)
router.get('/logout', logout)
router.get('/destroy', destroy)

module.exports = router;
