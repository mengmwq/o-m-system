<template>
<div class="sky">
<!--	<div class="clouds_one"></div>-->
<!--	<div class="clouds_two"></div>-->
<!--	<div class="clouds_three"></div>-->
   <el-form :rules="rules2" label-position="left" label-width="0px" class="demo-ruleForm card-box loginform">
      <el-form-item>
          <img src="../../assets/login.png" alt="" style="display: flex;margin: auto">
      </el-form-item>
      <h4 class="title">欢迎登录中集冷云订单管理系统</h4>
       <el-form-item>
          <el-input type="text" auto-complete="off" placeholder="用户名" v-model="account"></el-input>
       </el-form-item>

       <el-form-item style="margin-bottom: 10px">
           <el-input type="password" auto-complete="off" placeholder="密码" v-model="checkPass"
                     @keyup.enter.native="handleSubmit2"></el-input>
       </el-form-item >
       <el-form-item  style="margin-bottom: 10px">
           <el-checkbox v-model="checked" checked class="remember" style="color:#cccccc">记住密码</el-checkbox>

       </el-form-item>

       <el-form-item style="width:100%;">
           <el-button type="info" style="width:100%; background: rgba(132, 148, 160,0.6); /*背景透明*/

            border: 2px solid rgba(255,255,255,0.1); /*边框半透明*/
            box-shadow: inset 0 0 4px rgba(255,255,255,0.1),0 0 4px rgba(255,255,255,0.1);  /*内外渐变阴影*/"           @click.native="handleSubmit2" :loading="logining">登录
           </el-button>
       </el-form-item>
   </el-form>
</div>

</template>

<script>
export default {
  data() {
    return {
      logining: false,
      show: true,
      account: "",
      checkPass: "",
        checked:false,
      rules2: {
        account: [{ required: true, message: "请输入账号", trigger: "blur" }],
        checkPass: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },

  methods: {
    handleSubmit2(ev) {
      let that = this;
      this.$axios({
        url: "http://out.ccsc58.cc/OMS/v1/public/index/login/index",
        method: "post",
        data: {
            UserName: this.account,
            PassWord:this.checkPass
        },
        transformRequest: [
          function(data) {
            let ret = "";
            for (let it in data) {
              ret +=
                encodeURIComponent(it) +
                "=" +
                encodeURIComponent(data[it]) +
                "&";
            }
            return ret;
          }
        ],
        // headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" }
      }).then(function(res) {

        if (res.data.code == "200") {
          window.sessionStorage.setItem('username',that.account);
         // window.sessionStorage.setItem('token',res.data.data.token);
          window.sessionStorage.setItem('items',JSON.stringify(res.data.data));
         that.$router.push({path:'/home'});

        }else{
          that.$message(res.data.msg);
        }
      });

    }
  }
};
</script>
<style>

</style>
<style lang="css" scoped>
@import "../../css/style.css";
.card-box {
  padding: 20px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  margin-bottom: 20px;
  /*background-color: #f9fafc;*/
  margin: 180px auto;
  width: 350px;
  /*border: 2px solid #8492a6;*/

}
.el-input__inner {
    -webkit-appearance: none;
    /*background-color: #fff;*/
    background-image: none;
    border-radius: 20px;
    border: 1px solid #dcdfe6;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: 0;
    padding: 0 15px;
    -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;

}

.title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #fff;
    font-family: cursive;
    /*background: linear-gradient(45deg, rgba(0,173,181,1) 0%, rgba(0,173,181,.4)  100%);*/
    -webkit-background-clip: text;
    text-shadow: 0 0 2px rgba(0, 173, 181, .2882),
    0 0 2px rgba(0, 173, 181, .2882),
    0 0 2px rgba(0, 173, 181, .2882),
    0 0 2px rgba(0, 173, 181, .2882),
    0 0 2px rgba(0, 173, 181, .2882),
    0 0 2px rgba(0, 173, 181, .2882),
    0 0 2px rgba(0, 173, 181, .2882),
    0 0 2px rgba(0, 173, 181, .2882),
    0 0 2px rgba(0, 173, 181, .2882);
}

.loginform {
  /*width: 350px;*/
  /*padding: 35px 35px 15px 35px;*/
  position: absolute;
  left:73%;
  margin-left: -175px;
    top:50px;
}

.form-input{
    background: transparent; /*背景透明*/
    border: 2px solid rgba(255,255,255,0.3); /*边框半透明*/
    box-shadow: inset 0 0 4px rgba(255,255,255,0.2),0 0 4px rgba(255,255,255,0.2);  /*内外渐变阴影*/
}
</style>
