/**
 * Created by liuchengyi on 2017/4/27.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var user = require("./user");
for(var u in user){
  mongoose.model(u,new Schema(user[u]));
}
module.exports = {
  getModel:function (type) {
    return _getModel(type);
  }
};
var _getModel = function (type) {
  return mongoose.model(type);
};
