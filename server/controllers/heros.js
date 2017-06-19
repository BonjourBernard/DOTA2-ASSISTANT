/**
 * Created by liuchengyi on 2017/5/4.
 */

var hero = require('../model/user').hero;

module.exports.list = {
  type: "POST",
  handler:function(req,res,next) {
    hero.find({type:req.body.type}, ["name","link","id","imgSrc","type","team","desc"],function(err, doc){
      if(err){
        res.json({msg:"获取列表数据失败",success:false})
      }else{
        res.json({data:doc,success:true})
      }

    },function(){
      res.json({msg:"获取列表数据失败",success:false})
    });
  }
};
module.exports.detail = {
  type: "post",
  handler: function (req, res, next) {
    hero.find({id:req.body.id}, function(err, doc){
      if(err){
        res.json({msg:"获取详情数据失败",success:false})
      }else{
        doc.map(function(item,i){
          if(item.name!=null){
            res.json({data:doc,success:true});
          }
        })
      }
    },function(){
      res.json({msg:"获取详情数据失败",success:false})
    })
  }
};
module.exports.add = {
  type: "get",
 handler: function (req, res, next) {
    hero.create({
  name: '小小',
  desc: String,
  id: 1,
  imgSrc: 'http://www.dota2.com.cn/images/heroes/tiny_full.png',
  context: '以一团石头的形式出现的生命体，小小不断思索他的起源，但这始终是个谜。现在的他是个石巨人，但过去是什么呢？从土傀儡的脚后跟掉落的碎片？从制造石像鬼的工房被打扫出来的碎屑？神圣预言石的表层之砂？受到强烈的好奇心驱使，他不知疲倦的环游世界，寻找着他的起源，他的出身，和他的种族。在旅途中，他变得越来越庞大，不过路上的风雨吹打掉了他身上的石头，所以他不停的吸收新的岩石，永远在长大。',
  skillChosenTime: [],
  type: 1,//1 力量 2 敏捷 3 智力
  team: 1, //1 天辉 2 夜魇
  skills: [],
  link: '/heroInfo/1'
}, function(err){
        res.json({msg:"添加成功",success:true});
    },function(){
      res.json({msg:"新增数据失败",success:false})
    })
  }
};
module.exports.edit = {
  type: "get",
  handler: function (req, res, next) {
    var conditions = {id:req.query.id};
    var update     = {};
    var options    = {upsert : true};
    hero.update(conditions,update,options, function(err, doc){
      if(err){
        res.json({msg:"修改失败",success:false})
      }else{
        res.json({msg:"修改成功",success:true});
      }
    },function(){
      res.json({msg:"修改失败",success:false})
    })
  }
};
module.exports.del = {
  type: "get",
  handler: function (req, res, next) {
    hero.remove({id:req.query.id}, function(err, doc){
      if(err){
        res.json({msg:"删除失败",success:false})
      }else{
        res.json({msg:"删除成功",success:true});
      }
    },function(){
      res.json({msg:"删除失败",success:false})
    })
  }
};
module.exports.delAll = {
  type: "get",
  handler: function (req, res, next) {
    hero.remove({}, function(err, doc){
      if(err){
        res.json({msg:"删除失败",success:false})
      }else{
        res.json({msg:"删除成功",success:true});
      }
    },function(){
      res.json({msg:"删除失败",success:false})
    })
  }
};
