var express = require('express');
var router = express.Router();
var getConstructor = require('../tools/mongo')

var Shop = getConstructor('shop')
var Service = getConstructor('service')
var Item = getConstructor('item')
var Comment = getConstructor('comment')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/service',function (req,res) {
  Service.find({}, function (err, data) {
    res.send(data)
  });
});
router.get('/item',function (req,res) {
  Item.find({}, function (err, data) {
    res.send(data)
  });
});
router.get('/shop',function (req,res) {
  Shop.find({}, function (err, data) {
    res.send(data)
  });
});
router.get('/comment',function (req,res,next) {
  const {page} = req.query
  console.log(page);
  Comment.find({}).skip(page*10).limit(10).sort("-createtime").exec(function (err,data) {
    res.send(data)
  });
});

module.exports = router
