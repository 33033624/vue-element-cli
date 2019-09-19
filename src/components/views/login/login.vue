<template lang="html">
  <div class="login_box">
    <p class="login_top_logo"></p>
    <section class="login_filter"></section>
    <section class="login_content">
      <p class="login-text">用户登录</p>
      <el-input placeholder="用户名" class="username" v-model="username" />
      <el-input
        placeholder="密码"
        class="password"
        v-model="password"
        type="password"
        @keyup.enter.native="handleSubmit"
      />
      <p class="error_text" v-if="error">{{ error }}</p>
      <el-button
        type="primary"
        class="login_button"
        @click="handleSubmit"
        :loading="loginLoading"
        :disabled="loginLoading"
        >登录</el-button
      >
    </section>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  data() {
    return {
      username: "",
      password: "",
      validateCode: "",
      allow: false,
      error: "",
      loginLoading: false
    };
  },
  methods: {
    handleSubmit() {
      if (!this.username || !this.password) {
        this.error = "请将用户名或者密码填写完整";
      }
      Vue.ls.set("token", "token");
      window.location.reload();
    }
  }
};
</script>

<style lang="scss" scoped>
.login_box {
  z-index: 100;
  width: 27.6vw;
  height: 30vw;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 16.1vw;
}
.login_top_logo {
  background: url("../../../assets/login/login_logo1.png") no-repeat center;
  width: 100%;
  height: 6.2vw;
  background-size: contain;
  margin: 0;
  padding: 0;
}
.login-text {
  padding-bottom: 1.5vw;
  font-size: 1.4vw;
}
.login_filter {
  position: absolute;
  top: 7vw;
  left: 0;
  width: 100%;
  height: 20vw;
  background: #fff;
}
.login_content {
  width: 100%;
  /* height: 29vw; */
  position: absolute;
  top: 7vw;
  box-sizing: border-box;
  padding: 2vw 2.8vw;
}
.username,
.password {
  box-sizing: border-box;
  font-size: 1.4vw;
  width: 22.3vw;
}
.password {
  margin-top: 1vw;
}
.error_text {
  color: red;
  margin: 0;
  font-size: 1vw;
  margin-top: 1vw;
  padding: 0;
}
.login_button {
  margin-top: 2.1vw;
  width: 22.3vw;
  height: 3.2vw;
  font-size: 1.4vw;

  background-image: linear-gradient(#5a79fe, #5a79fe),
    linear-gradient(90deg, #0036ff 0%, #11f5f2 100%);
}
</style>
<style lang="scss">
.login_box .el-input__inner {
  height: 3.2vw;
}
</style>
