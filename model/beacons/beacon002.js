var mongoose = require('mongoose');

var beacon002 ={
  gnum:{type:String},
  bnum:{type:String},
  beacon:{type:String},
  status:{type:String},
  createdAt:{type:Date,default:Date.now},
};

module.exports =beacon002;
