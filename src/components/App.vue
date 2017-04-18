<template>
  <div id="app">
<router-link v-bind:to="'./hero'" class="title tit1">DOTA2出装查询</router-link>
 
<router-link v-bind:to="''" class="title tit2">MAX+数据</router-link>
 
<router-link v-bind:to="''" class="title tit3">近期比赛数据</router-link>
 
  <div class="shade_bg">

                        <img ondragstart="return false" src="http://www.dota2.com.cn/images/cover170320/zhe.png">
                    </div>
                    <div class="video_content">
                         <video autoplay="auto" loop="" style="" class="video-bg" poster="">
                            <source src="http://dota2.dl.wanmei.com/dota2/media/monkeyking_2.mp4" type="video/mp4">
                        </video>
                    </div>
   
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
a{
     text-decoration: none;
    outline: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.shade_bg {
    left: -259px;
    top: 0px;
    position: absolute;
    z-index: 99;
    img {
    height: 100%;
    width: 100%;
}
}
video{
  width:640px;
  height:360px
}
.video_content {
        left: 485px;
    position: absolute;
    top: 100px;
    z-index: 60;
}
.video-bg {
       width: 985px;
    height: 680px;
    vertical-align: middle;
}
.title{
  position:absolute;
  left:100px;
  font-size:3em;
  color:#eee;
  z-index:10000;
    font-family: Audiowide;
    cursor:pointer;
  
}
.title:hover{
  -webkit-animation: neon 1.5s ease-in-out infinite alternate;
  -moz-animation: neon 1.5s ease-in-out infinite alternate;
  animation: neon 1.5s ease-in-out infinite alternate; 

}
@-webkit-keyframes neon {
  from {
    text-shadow: 0 0 10px #fff,
               0 0 20px  #fff,
               0 0 30px  #ff8800,
               0 0 40px  #ff8800,
               0 0 70px  #ff8800,
               0 0 80px  #ff8800,
               0 0 100px  #ff8800,
               0 0 150px  #ff8800
  }
  to {
    text-shadow: 0 0 5px #fff,
               0 0 10px #fff,
               0 0 15px #ff8800,
               0 0 20px #ff8800,
               0 0 35px #ff8800,
               0 0 40px #ff8800,
               0 0 50px #ff8800
  }
}
.tit1{
  top:200px;
}
.tit2{
  top:300px;
}
.tit3{
  top:400px;
}
</style>
