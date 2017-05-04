<template>
  <div class="login">
    <div class="panel-lite">
      <div class="thumbur">
        <div class="icon-lock"></div>
      </div>
      <h4>用户登录</h4>
      <p v-if="warnFlag">{{warnInfo}}</p>
      <div class="form-group group1">
        <input required="required" class="form-control"  v-model="uname">
        <label class="form-label">用户名    </label>
      </div>
      <div class="form-group">
        <input type="password" required="required" class="form-control" v-model="upwd">
        <label class="form-label">密　码</label>
      </div>
      <button v-on:click="submitForm()" class="floating-btn"><i class="icon-arrow"></i></button>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Login',
    data: function () {
      return {
        uname: '',
        upwd: '',
        warnFlag: false,
        warnInfo: '请输入用户名及密码'
      }
    },
    methods: {
      submitForm () {
        if (!this.uname || !this.upwd) {
          this.warnFlag = true
          return false
        } else {
          this.warnFlag = false
        }
        this.$http.post('http://localhost:8282/login/login', {name: this.uname, pwd: this.upwd}, {emulateJSON: true}).then(function (res) {
          if (res.data.success) {
            sessionStorage.setItem('account', res.data.data.hash)
            this.$router.push({path: this.$route.query.origin})
          } else {
            this.warnInfo = res.data.msg
            this.warnFlag = true
          }
        })
      }
    }
  }
</script>

<style>
  *, *:after, *:before {
    box-sizing: border-box;
  }
  .panel-lite {
    margin: 20px auto;
    max-width: 360px;
    background: #fff;
    padding: 45px 20px;
    border-radius: 4px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    position: relative;
  }

  .thumbur {
    width: 150px;
    height: 150px;
    position: relative;
    background-color: #efefef;
    filter: progid:DXImageTransform.Microsoft.gradient(gradientType=1, startColorstr='#FFEFEFEF', endColorstr='#FFE1E1E1');
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiP…B3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyYWQpIiAvPjwvc3ZnPiA=);
    background-size: 100%;
    background-image: -webkit-gradient(linear, 0% 50%, 100% 50%, color-stop(0%, #efefef), color-stop(50%, #efefef), color-stop(50%, #e1e1e1), color-stop(100%, #e1e1e1));
    background-image: -webkit-linear-gradient(left, #efefef 0%, #efefef 50%, #e1e1e1 50%, #e1e1e1 100%);
    background-image: linear-gradient(to right, #efefef 0%, #efefef 50%, #e1e1e1 50%, #e1e1e1 100%);
    margin: auto;
    border-radius: 100%;
  }
  [class^="icon-"], [class*=" icon-"] {
    font-family: 'icomoon';
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .thumbur:before {
    content: '';
    position: absolute;
    width: 6px;
    height: 12px;
    background-color: #efefef;
    left: 50%;
    bottom: 50px;
    z-index: 5;
    -ms-transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
  }
  .icon-lock {
    position: relative;
    width: 80px;
    height: 60px;
    background: #FFA000;
    margin: auto;
    -ms-transform: translateY(60px);
    -webkit-transform: translateY(60px);
    transform: translateY(60px);
    border-radius: 8px;
    box-shadow: 0 0 2px #F57C00 inset;
  }
  .icon-lock:before {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    background-color: #efefef;
    left: 50%;
    top: 20px;
    -ms-transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    border-radius: 100%;
  }
  .icon-lock:after {
    content: '';
    position: absolute;
    width: 50px;
    height: 35px;
    border: 9px solid #F57C00;
    border-bottom: none;
    bottom: 100%;
    left: 50%;
    -ms-transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
  }
  .panel-lite h4 {
    font-size: 24px;
    text-align: center;
    color: #666;
    font-weight: bold;
    margin: 15px auto;
  }
  .panel-lite p{
    font-size:12px;
    color:#ff8800;
    text-align: center;
  }
  .form-group {
    position: relative;
    font-size: 15px;
    color: #666;
  }
  .group1{
    margin-bottom: 30px;
  }
  .form-group .form-control {
    width: 100%;
    position: relative;
    z-index: 3;
    height: 35px;
    background: none;
    border: none;
    padding: 5px 0;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    border-bottom: 1px solid #777;
  }
  .form-group .form-control:invalid {
    outline: none;
  }
  .form-group .form-label {
    position: absolute;
    z-index: 1;
    left: 0;
    top: 5px;
    -webkit-transition: 0.3s;
    transition: 0.3s;
  }
  .floating-btn:hover {
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.3) inset, 0 3px 6px rgba(0, 0, 0, 0.16), 0 5px 11px rgba(0, 0, 0, 0.23);
  }
  .floating-btn {
    background: #141516;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    color: #fff;
    font-size: 32px;
    border: none;
    position: absolute;
    margin: auto;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    box-shadow: 1px 0px 0px rgba(0, 0, 0, 0.3) inset;
    margin: auto;
    right: -30px;
    bottom: 50px;
    cursor: pointer;
  }
  .floating-btn:hover .icon-arrow {
    -ms-transform: rotate(45deg) scale(1.2);
    -webkit-transform: rotate(45deg) scale(1.2);
    transform: rotate(45deg) scale(1.2);
  }
  .icon-arrow {
    position: relative;
    width: 13px;
    height: 13px;
    border-right: 3px solid #fff;
    border-top: 3px solid #fff;
    display: block;
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    margin: auto;
    -webkit-transition: 0.3s;
    transition: 0.3s;
  }
  .icon-arrow:after {
    content: '';
    position: absolute;
    width: 18px;
    height: 3px;
    background: #fff;
    left: -5px;
    top: 5px;
    -ms-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
  .form-group .form-control:invalid {
    outline: none;
  }

  .form-group .form-control:focus, .form-group .form-control:valid {
    outline: none;
    color: #141516;
    box-shadow: 0 1px #141516;
    border-color: #141516;
  }

  .form-group .form-control:focus + .form-label, .form-group .form-control:valid + .form-label {
    font-size: 12px;
    -ms-transform: translateY(-15px);
    -webkit-transform: translateY(-15px);
    transform: translateY(-15px);
  }

</style>
