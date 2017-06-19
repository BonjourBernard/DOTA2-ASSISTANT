<template>
<div class="home">
  <div class="hero">
  <div class="hero_top_wrap clearfix">
    <ul class="top_tab_ul clearfix">
     <li v-for="heroType in heroTypes">
      <router-link v-on:click.native='getHeroList(heroType.id)' v-bind:to="heroType.link" :class="currentHeroId == heroType.id ? 'on' : ''">{{heroType.name}}英雄</router-link>
      </li>
    </ul>
   </div>
   <div class="hero_list clearfix">
   <div class="hero_info" v-for="hero in heroList" v-if="hero.name!=null">
   <router-link v-bind:to="hero.link">
   <img :src="hero.imgSrc"/>
   <div class="hero_name">
   {{hero.name}}
   </div>
   </router-link>
   </div>
   </div>
   
  </div>
</div>
</template>

<script>
export default {
  name: 'Hero',
  data:function(){
  return {
        heroList:[]
  }
  },
  methods:{
  getHeroList(id){
  this.$http.post('http://localhost:8282/heros/list',{"type":id}, {emulateJSON: true}).then((res) => {
        this.heroList = res.data.data;
        console.log(this.heroList);
      });
  }
  },
  computed: {
    heroTypes () {
      return [{name: '力量', link: './1', id: 1}, {name: '敏捷', link: './2', id: 2}, {name: '智力', link: './3', id: 3}]
    },
    currentHeroId () {
      return this.$route.params.id
    }
  },
   beforeCreate() {
      this.$http.post('http://localhost:8282/heros/list',{"type":this.$route.params.id}, {emulateJSON: true}).then((res) => {
        this.heroList = res.data.data;
        console.log(this.heroList);
      });
    },
}
</script>

<style>
ul,li{
  margin: 0;
    padding: 0;
}
html{
  background:url(http://www.dota2.com.cn/event/201401/herodata/images/bg.jpg) center top no-repeat #141516;
}
.home{
  position:relative;
  top:0;
  left:0;
  width:100%;
  height:100%;
  
}
.hero{
  width:800px;
  height:auto;
  margin:50px auto;
  font-family:"微软雅黑";
}
.clearfix {
    zoom: 1;
}
.clearfix:after{
  display:block;
  height:0;
  content:"";
  clear:both;
}
.hero_top_wrap {
    width: 800px;
    height: 115px;
    padding: 0 10px;
    margin: 0 auto;
    background-image: url(http://www.dota2.com.cn/event/201401/herodata/images/hero_top_bg.jpg);
    overflow: hidden;
}
    .top_tab_ul {
    float: left;
    padding-top: 69px;
    height: 42px;
    }
    .top_tab_ul li {
    float: left;
    display: inline-block;
    width: 129px;
    margin-right: 1px;
    }
.top_tab_ul li a {
    display: block;
    width: 129px;
    height: 42px;
    text-align: center;
    color: #c0c0c0;
    font: normal 18px/40px "微软雅黑";
    background: url(http://www.dota2.com.cn/event/201401/herodata/images/top_tab.jpg);
    }
    .top_tab_ul li a.on {
    background-position: 0 -42px;
    text-decoration: none;
}
.hero_list{
  width:800px;
  padding:20px 10px 0 10px;
  background:#0f0f0f;
}
.hero_info{
  float:left;
  width:175px;
  margin-left:20px;
  margin-bottom:20px;
  position:relative;
  left:-10px;
  cursor:pointer;
}

.hero_info img{
  width:100%;
}

.hero_info .hero_name{
  width:100%;
  text-align:center;
  color:#ddd;
  font-size:18px;
  line-height:30px;
}
.hero_info:hover .hero_name{

  -webkit-animation: neon 1.5s ease-in-out infinite alternate;
  -moz-animation: neon 1.5s ease-in-out infinite alternate;
  animation: neon 1.5s ease-in-out infinite alternate; 

}
.hero_info:hover img{
      box-shadow: 0 0 10px #ff8800;
}
</style>
