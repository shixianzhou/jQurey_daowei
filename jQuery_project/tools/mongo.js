/**
 * Created by china on 2018/3/22.
 */
/*
 负责连接MongoDB数据库
 */
const mongoose = require("mongoose");

//连接数据库
mongoose.connect("mongodb://127.0.0.1/daoway");

//监听数据库连接
mongoose.connection.once("open",()=>{
  console.log("数据库已经连接");
});
var Schema = mongoose.Schema;

var shopSchema = new Schema({
  "serviceIndex":String,
  "serviceType":Array,
  "shopList":Array,
})
var serviceSchema = new Schema({
  "id":String,
  "title":String,
  "orderCount":Number,
  "positiveRate":Array,
  "imgUrl":Array
})
var itemSchema = new Schema({
  "id":String,
  "title":String,
  "name":String,
  "desc":String,
  "price":Number,
  "oldPrice":Number,
  "orderCount":Number,
  "soldCount":Number,
  "commentCount":Number,
  "accept":String,
  "praise":String,
  "imgUrl":String,
  "company":String,
  "profile":String
})
var commentSchema = new Schema({
  "iconUrl":String,
  "area":String,
  "city":String,
  "comment":String,
  "createtime":Number,
  "nick":String,
  "star":Number
})

var Shop = mongoose.model('shop',shopSchema);
var Service = mongoose.model('service',serviceSchema);
var Item = mongoose.model('item',itemSchema);
var Comment = mongoose.model('comment',commentSchema)

const shopdata = require("../public/data/shop.json")
const servicedata = require("../public/data/service.json")
const itemdata = require("../public/data/item.json")
const commentdata = require("../public/data/comment.json")

Shop.find({},function (err,data) {
    if(data.length===0){
      Shop.create(shopdata)
      Service.create(servicedata)
      Item.create(itemdata)
      Comment.create(commentdata)
    }
  })

  module.exports = function(name){
  return mongoose.model(name)
  }