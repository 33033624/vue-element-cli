# vue-element-cli

基于 vue element-ui 集合而成的脚手架，主要应用于后台管理页面，主要功能包括 router 配置、axios 请求、权限控制等

# To start

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli)

```bash
# install dependencies
npm install or yarn install

# serve with hot reload at localhost:8080
npm run serve

# build for production with minification
npm run build

```

# utils/ajaxManage 用法

提供了 get post 等方式的请求， 同时拓展了 downfile 的函数，在这里 get/post 等请求不再多说，简单说明一下 downFile 的方式

```bash
downFile(url, parameter, name) //url(请求地址) parameter(请求参数) name(下载的文件的名称和格式  比如'测试.xls')

```

# mixins/searchTable.mixin.js 的用法

抽离了 element 的表单搜索与 table 组件的联动逻辑

```bash
# 引用
import searchMixins from '@/mixins/searchTable.mixin.js'
export default {
   mixins: [searchMixins],
   data () {
   return {
      listApiName: '/api', //接口地址
   }
   }
}

# 绑定table
<el-table
      :data="listData"
      ><el-table>

# form组件的引用:点击我们自定义search组件中的搜索按钮 将form表单的筛选条件当成参数传递给setFilter函数， 那么表单就自动刷新了
  <search @search="setFilter"  />

```
