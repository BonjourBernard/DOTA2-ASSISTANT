<template>
<div class="home">
  <div class="hero">
  <div class="hero_top_wrap clearfix">
    <ul class="top_tab_ul clearfix">
     <li>
      <router-link v-bind:to="'http://www.dota2.com.cn/heroes/index.htm'" class="on">力量英雄</router-link>
      </li>
     <li>
      <router-link v-bind:to="'http://www.dota2.com.cn/heroes/index.htm'" class="">敏捷英雄</router-link>
      </li>
     <li>
      <router-link v-bind:to="'http://www.dota2.com.cn/heroes/index.htm'" class="">智力英雄</router-link>
     </li>
    </ul>
   </div>
   <div class="hero_list">
   
   </div>
   
  </div>
</div>
</template>

<script>
export default {
  hero_type: ['力量', '敏捷', '智力']
}
</script>

<style>
ul,li{
  margin: 0;
    padding: 0;
}
.home{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background:url(http://www.dota2.com.cn/event/201401/herodata/images/bg.jpg) center top no-repeat #141516;
}
.hero{
  width:800px;
  height:auto;
  margin:50px auto
}
.clearfix {
    zoom: 1;
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
    overflow: hidden;
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

</style>
