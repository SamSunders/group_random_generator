var express = require('express');
var router = express.Router();

var path = require('path');
var studentInfo = require('../public/data/data.json');

router.get('/data', function(req, res){
    res.json(studentInfo);

});

router.get("/*", function(req, res){
    var file = req.params[0] || "views/index.html";
    res.sendFile(path.join(__dirname, "../public", file));
});

module.exports = router;