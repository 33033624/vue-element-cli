<template lang="html">
  <div class="">
    <div class="slidemenu-box">
      <SlideMenu />
    </div>
    <Head />
    <div class="content-box">
      <router-view />
    </div>
    <p class="footer-text">Copyright©xxxx版权所有</p>
  </div>
</template>

<script>
export default {
  components: {
    SlideMenu: () => import("@comp/slideMenu.vue"),
    Head: () => import("@comp/head.vue")
  }
};
</script>

<style lang="scss" scoped>
.slidemenu-box {
  position: fixed;
  left: 0;
  width: 11vw;
  height: calc(100vh - 4.5vw);
  background: #fff;
  top: 4.5vw;
  overflow-x: hidden;
}
.footer-text {
  width: 100%;
  height: 2vw;
  line-height: 2vw;
  position: fixed;
  bottom: 0;
  left: 0;
  font-size: 0.7vw;
  color: #44474d;
  text-align: center;
}
.content-box {
  width: 88.5vw;
  height: calc(100vh - 8vw);
  margin-top: 0.5vw;
  background-color: #f8f8f8;
  float: right;
  overflow-y: hidden;
}
</style>
