/**
 * Created by liuchengyi on 2017/4/27.
 */

var crypto = require('crypto');
var user = require('../model/user').user;

function hashPW(userName, pwd){
  var hash = crypto.createHash('md5');
  hash.update(userName + pwd);
  return hash.digest('hex');
}
module.exports.login = {
  type:"post",
  handler:function(req,res,next){
    var query_doc = {name: req.body.name, password: req.body.pwd};
    (function(){
      user.count(query_doc, function(err, doc){
        if(err){
          res.json({msg:"服务器失效",success:false})
        }else{
          if(doc == 1){
            var hash = hashPW(req.body.name, req.body.pwd);
            res.json({data: {u_name: req.body.name,hash: hash}, success: true});
            console.log(query_doc.name + ": login success in " + new Date());
          }else{
            console.log(query_doc.name + ": login failed in " + new Date());
            res.json({msg:"用户名或密码错误，请重试" , success: false});
          }
        }
      },function(){
        res.json({msg:"验证失败" , success: false});
      });
    })(query_doc);
  }
};
