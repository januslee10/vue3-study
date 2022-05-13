<template>
  <div class="home">
    <img alt="Vue logo" :src="logo" />
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    <FirstComp />
    <!-- <Rate :value="score" :theme="'red'" v-model="score"> 评分系统 </Rate>
    <el-input-number v-model="score" :min="0" :max="5" />
    <TransitionComp />
    <Header :level="3">测试123</Header> -->
  </div>
</template>

<script setup lang="ts">
// import { ref } from 'vue'
import HelloWorld from '@cp/HelloWorld.vue'
import FirstComp from '@/components/FirstComp.vue'
// import Rate from '@/components/Rate.vue'
// import TransitionComp from '@/components/TransitionComp.vue'
// import Header from '@/components/Header.jsx'
// import logo from '@img/logo.png'

// let score = ref<number>(4)

// function update(val: number) {
//   score.value = val
// }
</script>

<style lang="less" scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: @color-black;
  padding: (@margin * 3) 0;
  margin: 0 auto;
}
</style>
