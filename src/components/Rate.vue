<template>
  <div :style="fontStyle">
    <slot></slot>
    <div class="rate" @mouseout="mouseOut">
      <span @mouseover="mouseOver(num)" v-for="num in 5" :key="num">☆</span>
      <span class="hollow" :style="fontwidth">
        <span
          @click="onRate(num)"
          @mouseover="mouseOver(num)"
          v-for="num in 5"
          :key="num"
          >★</span
        >
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, defineEmits } from 'vue'
let props = defineProps({
  modelValue: Number,
  theme: {
    type: String,
    default: 'orange',
  },
})
const themeObj = {
  black: '#00',
  white: '#fff',
  red: '#f5222d',
  orange: '#fa541c',
  yellow: '#fadb14',
  green: '#73d13d',
  blue: '#40a9ff',
}
const fontStyle = computed(() => `color:${themeObj[props.theme]}`)

// 评分宽度
let width = ref<number>(props.modelValue)
const fontwidth = computed(() => `width:${width.value}em;`)
function mouseOut() {
  width.value = props.modelValue
}

function mouseOver(i: number) {
  width.value = i
}

let emits = defineEmits(['update:modelValue'])
function onRate(num: number) {
  emits('update:modelValue', num)
}
</script>

<style scoped>
.rate {
  position: relative;
  display: inline-block;
  margin: 10px;
}
.rate > span.hollow {
  position: absolute;
  display: inline-block;
  top: 0;
  left: 0;
  width: 0;
  overflow: hidden;
}
</style>
