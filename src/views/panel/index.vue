<template>
  <div class="panel-container">
    <DragContainer />
    <div class="config-container">配置区域</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DragContainer from './drag-container/index.vue'

export default defineComponent({
  components: {
    DragContainer,
  },
  setup() {
    return {}
  },
})
</script>

<style scoped lang="less">
.panel-container {
  height: 100%;
  width: 100%;
  display: flex;

  .config-container {
    width: 400px;
    height: 100%;
    overflow: scroll;
    background-color: rgb(167, 72, 159);
  }
}
</style>
