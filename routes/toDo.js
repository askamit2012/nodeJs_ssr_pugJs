var express = require('express')
var fs = require('fs')
var path = require('path')
var router = express.Router()

var fileName = path.join(__dirname + '../../' + '/public/files/tasks.json')

router.get('/', (req, res, next) => {
    console.log('to do router')
    try {
        fs.readFile(fileName, 'utf-8', (err, data) => {
            res.render('toDo', { tasks: data })
        })
    } catch(err) {
        console.log('err in getting tasks: ', err)
    }
})

module.exports = router