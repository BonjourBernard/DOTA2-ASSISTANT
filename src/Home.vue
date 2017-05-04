<template>
  <div id="home">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>
<style>
  canvas{
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: -1;
  }
  .row{
    display: block;
  }
  .row>div{
    float:left;
  }
</style>
