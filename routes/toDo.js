var express = require('express')
var router = express.Router()

router.get('/', (req, res, next) => {
    res.render('toDo')
})

module.exports = router