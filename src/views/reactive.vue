<template>
  <div class="home">
    <VueCodemirror
      v-model="codeRef"
      :default-value="code"
      :read-only="readOnly"
    />
    <button @click="onChangeCodeContent">外部直接设置编辑器内容</button>
    <button @click="onSetReadOnly">外部设置/取消只读</button>
    是否只读:{{ readOnly }}
    <p>
      {{ codeRef }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import VueCodemirror from '@/components/VueCodemirror.vue' // @ is an alias to /src

export default defineComponent({
  setup() {
    const codeRef = ref<string>('')
    const readOnly = ref<boolean>(false)
    const onChangeCodeContent = () => {
      codeRef.value = `const test='你好世界';`
    }
    const onSetReadOnly = () => {
      readOnly.value = !readOnly.value
      console.log('xxx', readOnly.value)
    }
    const code = `let test='abc'`
    return { codeRef, readOnly, onChangeCodeContent, onSetReadOnly, code }
  },
  components: {
    VueCodemirror,
  },
})
</script>

<style lang="less">
.home {
  height: 600px;
  width: 600px;
}
</style>
