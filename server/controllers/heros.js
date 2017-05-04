/**
 * Created by liuchengyi on 2017/5/4.
 */

var hero = require('../model/user').hero;

module.exports.list = {
  type: "get",
  handler:function(req,res,next) {
    var query_yy_ll = [];
    var query_yy_mj = [];
    var query_yy_zl = [];
    var query_th_ll = [];
    var query_th_mj = [];
    var query_th_zl = [];
    hero.find({}, ["name","id","imgSrc","type","team","desc"],function(err, doc){
      if(err){
        res.json({msg:"获取列表数据失败",success:false})
      }else{
        doc.map(function(item,i){
          switch(item.type){
            case 1:
              if(item.team==1){
                query_th_ll.push(item);
              }else if(item.team==2){
                query_yy_ll.push(item);
              }
              break;
            case 2:
              if(item.team==1){
                query_th_mj.push(item);
              }else if(item.team==2){
                query_yy_mj.push(item);
              }
              break;
            case 3:
              if(item.team==1){
                query_th_zl.push(item);
              }else if(item.team==2){
                query_yy_zl.push(item);
              }
              break;
            default:
              break;
          }
        });
        res.json({data:{
          yy:{
            ll:query_yy_ll,
            mj:query_yy_mj,
            zl:query_yy_zl
          },
          th:{
            ll:query_th_ll,
            mj:query_th_mj,
            zl:query_th_zl
          }
        },success:true})
      }

    },function(){
      res.json({msg:"获取列表数据失败",success:false})
    });
  }
};
module.exports.detail = {
  type: "get",
  handler: function (req, res, next) {
    hero.find({id:req.query.id}, function(err, doc){
      if(err){
        res.json({msg:"获取详情数据失败",success:false})
      }else{
        res.json({data:doc,success:true});
      }
    },function(){
      res.json({msg:"获取详情数据失败",success:false})
    })
  }
};
module.exports.add = {
  type: "get",
  handler: function (req, res, next) {
    hero.create({id:req.query.id}, function(err){
      if(err){
        res.json({msg:"新增数据失败",success:false})
      }else{
        res.json({msg:"添加成功",success:true});
      }
    },function(){
      res.json({msg:"新增数据失败",success:false})
    })
  }
};
module.exports.edit = {
  type: "get",
  handler: function (req, res, next) {
    var conditions = {id:req.query.id};
    var update     = {$set : {age : 27, title : 'model_demo_title_update'}};
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
