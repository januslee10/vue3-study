<template>
  <button @click="toggle">click</button>
  <button @click="add">click</button>
  <!-- <transition name="title">
    <h1 v-if="showTitle">你好 Vue 3</h1>
  </transition> -->
  <transition-group name="title">
    <h1 v-for="num in items" :key="num">{{ num }}</h1>
  </transition-group>
</template>

<script setup lang="ts">
import { ref } from 'vue'
let showTitle = ref(true)
let items = ref<number[]>([1, 2, 3, 4, 5])
function toggle() {
  showTitle.value = !showTitle.value
}
function add() {
  let cur = items.value.length
  items.value.push(cur)
}
</script>

<style lang="less">
.title-enter-active,
.title-leave-active {
  transition: opacity 0.5s linear;
}

.title-enter-from,
.title-leave-to {
  opacity: 0;
}
</style>
