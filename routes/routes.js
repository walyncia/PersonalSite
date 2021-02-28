var express = require('express');
var router = express.Router();

router.get('/', function(req,res){
    res.render('pages/home');
});

router.get('/abc', (req,res)=>{
    res.render('pages/next');
});
module.exports = router;