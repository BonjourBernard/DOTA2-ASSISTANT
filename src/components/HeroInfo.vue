<template>
<div class="info">
  <div class="hero_name">
  {{heroInfo.name}}
  </div>
  <div class="hero_en_name">
  {{heroInfo.enName}}
  </div>
  <div class="row hero_info clearfix">
  <div class="face">
  <img :src="heroInfo.imgSrc"/>
  </div>
  <div class="des_panel left_10">
  <div class="panel_title">
  背景故事
  </div>
  <div class="des">{{heroInfo.des}}</div>
  </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Hero',
  computed: {
    heroInfo () {
      return {name: '小小', enName: 'Tiny', des: '以一团石头的形式出现的生命体，小小不断思索他的起源，但这始终是个谜。现在的他是个石巨人，但过去是什么呢？从土傀儡的脚后跟掉落的碎片？从制造石像鬼的工房被打扫出来的碎屑？神圣预言石的表层之砂？受到强烈的好奇心驱使，他不知疲倦的环游世界，寻找着他的起源，他的出身，和他的种族。在旅途中，他变得越来越庞大，不过路上的风雨吹打掉了他身上的石头，所以他不停的吸收新的岩石，永远在长大。', imgSrc: 'http://www.dota2.com.cn/images/heroes/tiny_full.png', id: 1, skill: [{name: '山崩', imgSrc: '', des: ''}]}
    }
  }
}
</script>

<style>
.info{
  width:800px;
  height:auto;
  margin:50px auto;
  font-family:"微软雅黑";
}
.info .hero_name{
  font-size:30px;
  font-weight:bold;
  color: #c0c0c0;
}

.info .hero_en_name{
  font-size:16px;
  color: #444445;
  margin-left:5px;
  margin-bottom:15px;
}
.hero_info{

  padding:15px;
  box-shadow:2px 2px 2px #222;
  background:#0f0f0f;
}

.left_10{
  position:relative;
  left:10px;
}
.face{
  background-color: #202123;
  padding: 10px;
}
.des_panel{
  padding:0 10px;
  width:450px;
  color:#ccc;
  height:168px;
}
.panel_title{
  font-size:18px;
  font-weight:bold;
  line-height:36px;
}
.des{
  width:450px;
  height:132px;
  font-size:14px;
  display:block;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
}
</style>
