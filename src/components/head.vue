<template lang="html">
  <div class="head-box">
    <header class="head-wrap">
      <section class="logo-title">
        <span class="logo"></span>
        <h1 class="title">vue-element-cli 脚手架</h1>
      </section>
      <section class="user-info">
        <i class="user-icon"></i>
        <span class="user-name">{{ userInfo["realname"] }} </span>
        <span class="logout" @click="logout">退出</span>
      </section>
    </header>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  data() {
    return {
      userInfo: {
        realname: "admin"
      }
    };
  },
  mounted() {},
  methods: {
    logout() {
      this.$confirm("您确认退出吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        Vue.ls.remove("token");
        Vue.ls.remove("userInfo");
        window.location.reload();
      });
    },
    clickPage(k) {
      this.activeKey = k;
    }
  }
};
</script>

<style lang="scss" scoped>
.head-box {
  height: 4.5vw;
  background: blue;
  background-size: cover;
}
.head-wrap {
  width: 94vw;
  margin: 0 3vw;
  height: 4.5vw;
  z-index: 1000;
  position: relative;
}
.logo-title {
  display: inline-block;
  height: 2.5vw;
  padding-top: 1vw;
  .logo {
    display: inline-block;
    width: 4.7vw;
    height: 2.5vw;
    background-size: contain;
    vertical-align: middle;
  }
  .title {
    display: inline-block;
    height: 1.4vw;
    font-size: 1.4vw;
    color: #ffffff;
    vertical-align: middle;
  }
}
.page-list {
  display: inline-block;
  margin-left: 2vw;
  margin-top: 1.4vw;
  li {
    display: inline-block;
    width: 5.1vw;
    height: 2.1vw;
    background-color: #2c4ee1;
    border-radius: 1vw;
    margin-right: 1vw;
    font-size: 1vw;
    text-align: center;
    color: #fff;
    line-height: 2.1vw;
    cursor: pointer;

    &.active {
      background-color: #fff;
      color: #6482fd;
    }
  }
}
.user-info {
  float: right;
  margin-top: 1.7vw;
  .user-icon {
    display: inline-block;
    width: 0.8vw;
    height: 1vw;
    background: url("../assets/common/user.png") no-repeat center;
    background-size: cover;
    vertical-align: -2px;
  }
  .user-name {
    display: inline-block;
    color: #fff;
    font-size: 1vw;
    /*     vertical-align: middle;
     */
    margin-left: 0.4vw;
    line-height: 1vw;
    &::after {
      display: inline-block;
      content: "";
      height: 1vw;
      width: 1px;
      background: #fff;
      vertical-align: -2px;
      margin-left: 1vw;
    }
  }
  .logout {
    display: inline-block;
    width: 3.1vw;
    height: 1.4vw;
    line-height: 1.4vw;
    background-color: #ffffff;
    border-radius: 0.6vw;
    vertical-align: 1px;
    margin-left: 1vw;
    font-size: 0.7vw;
    color: #999999;
    text-align: center;
    cursor: pointer;
  }
}
</style>
