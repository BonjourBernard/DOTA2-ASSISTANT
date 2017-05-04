<template>
  <div class="manager">
      <div class="row clearfix">
        <div class="liLiang hero_panel">
          <div class="tianHui">
            <div class="hero_detail" v-for="hero in thLlHeroList">
              <div class="hero_detail_i">
                <img :src="hero.imgSrc" width="90" height="60"/>
                <div class="row hero_skill clearfix">
                  <div><img src="" width="22.5" height="15"/></div>
                  <div><img src="" width="22.5" height="15"/></div>
                  <div><img src="" width="22.5" height="15"/></div>
                  <div><img src="" width="22.5" height="15"/></div>
                </div>
              </div>
            </div>
          </div>
          <div class="yeYan">
            <div class="hero_detail" v-for="hero in yyLlHeroList">
              <div class="hero_detail_i">
                <img :src="hero.imgSrc" width="90" height="60"/>
                <div class="row hero_skill clearfix">
                  <div><img src="" width="22.5" height="15"/></div>
                  <div><img src="" width="22.5" height="15"/></div>
                  <div><img src="" width="22.5" height="15"/></div>
                  <div><img src="" width="22.5" height="15"/></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="space"></div>
        <div class="minJie hero_panel">
          <div class="tianHui">
            <div class="hero_detail" v-for="hero in thMjHeroList">
              <div class="hero_detail_i">
                <img :src="hero.imgSrc" width="90" height="60"/>
                <div class="row hero_skill clearfix">
                  <div><img src="" width="22.5" height="15"/></div>
                  <div><img src="" width="22.5" height="15"/></div>
                  <div><img src="" width="22.5" height="15"/></div>
                  <div><img src="" width="22.5" height="15"/></div>
                </div>
              </div>
            </div>
          </div>
          <div class="yeYan">
            <div class="hero_detail" v-for="hero in yyMjHeroList">
              <div class="hero_detail_i">
                <img :src="hero.imgSrc" width="90" height="60"/>
                <div class="row hero_skill clearfix">
                  <div><img src="" width="22.5" height="15"/></div>
                  <div><img src="" width="22.5" height="15"/></div>
                  <div><img src="" width="22.5" height="15"/></div>
                  <div><img src="" width="22.5" height="15"/></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="space"></div>
        <div class="zhiLi hero_panel">
          <div class="tianHui">
            <div class="hero_detail" v-for="hero in thZlHeroList">
              <div class="hero_detail_i">
                <img :src="hero.imgSrc" width="90" height="60"/>
                <div class="row hero_skill clearfix">
                  <div><img src="" width="22.5" height="15"/></div>
                  <div><img src="" width="22.5" height="15"/></div>
                  <div><img src="" width="22.5" height="15"/></div>
                  <div><img src="" width="22.5" height="15"/></div>
                </div>
              </div>
            </div>
          </div>
          <div class="yeYan">
            <div class="hero_detail" v-for="hero in yyZlHeroList">
              <div class="hero_detail_i">
                <img :src="hero.imgSrc" width="90" height="60"/>
                <div class="row hero_skill clearfix">
                  <div><img src="" width="22.5" height="15"/></div>
                  <div><img src="" width="22.5" height="15"/></div>
                  <div><img src="" width="22.5" height="15"/></div>
                  <div><img src="" width="22.5" height="15"/></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>

  export default {
    name: 'Manager',
    methods: {
    },
    data: function () {
      return {
        yyLlHeroList:[],
        yyMjHeroList:[],
        yyZlHeroList:[],
        thLlHeroList:[],
        thMjHeroList:[],
        thZlHeroList:[],
      }
    },
    created() {
      this.$http.get('http://localhost:8282/heros/list').then((res) => {
        this.yyLlHeroList = res.data.data.yy.ll;
        this.yyMjHeroList = res.data.data.yy.mj;
        this.yyZlHeroList = res.data.data.yy.zl;
        this.thLlHeroList = res.data.data.th.ll;
        this.thMjHeroList = res.data.data.th.mj;
        this.thZlHeroList = res.data.data.th.zl;
      });
    },
  }
</script>

<style>
  .manager{
    width:1200px;
    height:auto;
    margin:50px auto;
    font-family:"微软雅黑";
    color:#ccc;
  }
  .manager .row{
    width:1200px;
  }
  .manager .row .hero_panel{
    width: 380px;
  }
  .manager .row .space{
    width:30px;
    height:100px;
  }
  .hero_detail{
    position: relative;
    display: inline-block;
    width:90px;
    height:60px;
    cursor:pointer;
  }
  .yeYan,.tianHui{
    min-height:350px;
  }
  .hero_detail .hero_detail_i{
    transition: all .5s ease-in-out;
  }
  .hero_detail:hover .hero_detail_i{
    position: absolute;
    transform: scale(2,2);
  }
  .hero_skill{
    display:none;
    padding:0;
    position: absolute;
    bottom:-15px;
    left:0;
  }
  .hero_detail:hover .hero_skill{
    display:block;
  }
</style>
