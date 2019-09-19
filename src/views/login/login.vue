<template>
  <div class="login">
    <Login />
    <p class="copy_right">
      Copyright©xxxx 版权所有
    </p>
  </div>
</template>

<script>
export default {
  components: {
    Login: () => import("@/components/views/login/login")
  },
  data() {
    return {};
  },
  created() {},
  beforeMount() {},
  mounted() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  background: url("../../assets/login/login_bg.png") no-repeat center;
  background-size: cover;
  position: relative;
}
.copy_right {
  position: absolute;
  width: 100%;
  bottom: 2.5vw;
  text-align: center;
  color: #ffffff;
  opacity: 0.5;
  font-size: 1vw;
}
</style>
