<template lang="html">
  <el-row class="slide-box">
    <el-col>
      <el-menu
        :defaultActive="defaultNum"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu-item
          v-for="(i, k) in pathList"
          :key="k"
          :index="String(k)"
          @click="navPath(i)"
        >
          <i :class="['path-icon', i['name']]"></i>
          <span slot="title">{{ i["meta"]["title"] }}</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>
<script>
import RouterConfig from "@/config/router.config";
export default {
  data() {
    return {
      defaultNum: "0",
      pathList: RouterConfig
    };
  },
  watch: {
    "$route.name"(n) {
      this.pathList.map((i, k) => {
        if (n == i["name"]) {
          this.defaultNum = String(k);
        }
      });
    }
  },
  created() {
    console.log(this.$route.name);
    this.pathList.map((i, k) => {
      if (this.$route.name == i["name"]) {
        this.defaultNum = String(k);
      }
    });
  },
  methods: {
    navPath(i) {
      window.clearInterval(window.inter);
      this.$router.push({
        name: i["name"]
      });
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style lang="scss" scoped>
$icons: test;
@each $c in $icons {
  .is-active {
    .#{$c} {
      background: url("../assets/common/#{$c}-active.png") no-repeat center;
      background-size: cover;
    }
  }

  .#{$c} {
    display: inline-block;
    vertical-align: middle;
    height: 1vw;
    width: 1vw;
    background: url("../assets/common/#{$c}.png") no-repeat center;
    background-size: cover;
    margin-right: 0.6vw;
  }
}
.path-icon {
  margin-top: -3px;
}
.slide-box {
  user-select: none;
}
</style>
<style lang="scss">
.slide-box .el-menu {
  border-right: none;
}
</style>
