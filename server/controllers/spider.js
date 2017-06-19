var http = require("http");
var cheerio = require("cheerio");
var request = require("request");
var hero = require('../model/user').hero;

module.exports.index = {
  type: "GET",
  handler:function(req,res,next) {
    var url = "http://www.dota2.com.cn/heroes/index.htm";
	http.get(url,function(res){
		var html = '';
		res.setEncoding("utf-8");
		res.on('data',function(chunk){
			html += chunk;
		});
		res.on('end',function(){
			var $ = cheerio.load(html);
			var detailUrl = "";
			$(".hero_list").find(".heroPickerIconLink").each(function(i,item){
				detailUrl = $(this).attr("href");
				var self = $(this);
				var detailHtml = "";
				http.get(detailUrl,function(res){
					res.on('data',function(chunk){
						detailHtml += chunk;
					});
					res.on('end',function(){
						var _ = cheerio.load(detailHtml);
						hero.create({
							 name: _(".hero_name").text(),
							 desc: String,
							 id: i+1,
							 imgSrc: _(".top_hero_card").find("img").attr("src"),
							 context: _(".story_box").text(),
							 skillChosenTime: [],
							 type: 1,//1 力量 2 敏捷 3 智力
							 team: _(".zhengying_p").text().indexOf("天辉")>-1?1:2, //1 天辉 2 夜魇
							 skills: [],
							 link: '/heroInfo/'+(i+1)
							}, function(err){
								console.log({msg:"添加成功",success:true});
							},function(){
								console.log({msg:"新增数据失败",success:false})
							})
					});
				});
			})
		});
	});
}
}
