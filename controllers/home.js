/**
 * Created by Bernard on 2017/1/29.
 */

module.exports.index = {
    type:"get",
    handler:function(req,res,next){
        res.json({data:"fuck"});
    }
}