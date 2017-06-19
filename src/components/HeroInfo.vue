<template>
<div class="info">
  <div class="hero_name">
  {{heroInfo.name}}
  </div>
  <div class="hero_en_name">
  {{heroInfo.enName}}
  </div>
  <div class="row _hero_info clearfix">
  <div class="face">
  <img :src="heroInfo.imgSrc"/>
  </div>
  <div class="des_panel left_10">
  <div class="panel_title">
  背景故事
  </div>
  <div class="des">{{heroInfo.context}}</div>
  </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Hero',
  data:function(){
  return {
  heroInfo:{}
  }
  },
  computed: {
    
  },
  beforeCreate() {
      this.$http.post('http://localhost:8282/heros/detail',{"id":this.$route.params.heroId}, {emulateJSON: true}).then((res) => {
        this.heroInfo = res.data.data[0];
      });
    },
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
._hero_info{

  padding:15px;
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
  height:120px;
  font-size:14px;
  display:block;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
}
</style>
