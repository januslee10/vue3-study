<template>
  <el-container class="layout">
    <el-header style="padding: 0 20px 0 200px">
      <Header />
    </el-header>
    <el-container>
      <el-aside width="200px">
        <!-- <div>
          <router-link to="/">Home</router-link>
        </div>
        <div>
          <router-link to="/style"> Styles </router-link>
        </div> -->
        <Sidebar />
      </el-aside>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import Header from './views/layout/header.vue'
import Sidebar from './views/layout/Sidebar.vue'
console.log('env', process.env.BASE_API)
</script>

<style lang="less">
.el-header,
.el-footer {
  background-color: #545c64;
  color: #333;
  text-align: center;
  --el-header-padding: 0;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
}
body > .el-container {
  margin-bottom: 40px;
}

.layout {
  height: 100%;
  width: 100%;
}
</style>
