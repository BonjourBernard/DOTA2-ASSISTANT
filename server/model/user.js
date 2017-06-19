var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var userScheMa = new Schema({
  name: String,
  password: String
});
var heroScheMa = new Schema({
  name: String,
  desc: String,
  id: Number,
  imgSrc: String,
  context: String,
  skillChosenTime: Array,
  type: Number,//1 力量 2 敏捷 3 智力
  team: Number, //1 天辉 2 夜魇
  skills: Array,
  link: String
});
exports.user = mongoose.model('users', userScheMa);
exports.hero = mongoose.model('heros', heroScheMa);
