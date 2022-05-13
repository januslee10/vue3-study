<template>
  <div class="container">
    <router-link to="/">Go Back</router-link>
    <p>STYLES DEMO</p>
    <el-button @click="toggle"> 切换全屏 </el-button>
    <div class="demo">
      <div :class="['part', color]">
        <p class="title">动态样式</p>
        <div class="btn-list">
          <button @click="changeColor('red')">red</button>
          <button @click="changeColor('blue')">blue</button>
          <button @click="changeColor('yellow')">yellow</button>
        </div>
      </div>
      <div :class="['part']">
        <p>css module</p>
        <p :class="$style.msg">css module</p>
      </div>
      <div :class="['part', 'bg']">
        <p :class="$style.msg">useCssModule</p>
        <div v-html="content"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, useCssModule } from 'vue'
import { useFullscreen } from '@vueuse/core'

export default defineComponent({
  setup() {
    const color = ref<string>('red')
    const changeColor = function (col: string) {
      color.value = col
    }
    // 获取样式
    const style = useCssModule()
    console.log('[style]', style)
    // 构造模板内容
    const content = `<p class="${style.msg}">
    <span class="${style.text}">测试模板</span>
    </p>
    `

    // 全屏相关功能
    let { toggle } = useFullscreen()
    return {
      color,
      changeColor,
      content,
      toggle,
    }
  },
})
</script>

<style module>
.msg {
  color: aquamarine;
}

.text {
  font-size: 20px;
}
</style>

<style scoped>
.title {
  text-align: center;
  color: v-bind(color);
}
</style>

<style scoped lang="less">
.container {
  display: flex;
  flex-direction: column;
  font-size: 20px;
  height: 100%;
  width: 100%;
  align-items: center;

  button {
    margin: 10px;
  }

  .part {
    height: 200px;
    width: 400px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .bg {
    background-color: burlywood;
  }

  .demo {
    display: flex;
    align-items: center;

    .btn-list {
      width: 60%;
      display: flex;
      justify-content: space-between;
    }
  }
}

.red {
  background-color: rgb(187, 153, 153);
}

.blue {
  background-color: rgb(111, 111, 163);
}

.yellow {
  background-color: rgb(194, 194, 149);
}
</style>
