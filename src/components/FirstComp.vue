<template>
  <div>
    <p class="msg">{{ msg }}</p>
    <p>{{ name }}</p>
    <p>{{ age }}</p>
    <p>{{ id }}</p>
    <p>computed实验:{{ result }}</p>
    <input v-model="result" />
    <el-button @click="changeIcon">点击切换header ICON</el-button>
    <el-button @click="reset">点击切换header ICON</el-button>
  </div>
</template>

<script lang="ts">
import { computed } from '@vue/reactivity'
import useFavicon from '../utils/useFavicon.ts'
import {
  defineComponent,
  ref,
  reactive,
  toRef,
  toRefs,
  watchEffect,
  watch,
} from 'vue'
import type { ComputedRef } from 'vue'
interface Member {
  id: number
  name: string
  age: number
  gender: string
}
export default defineComponent({
  setup() {
    const msg = ref<string>('HELLO VUE3')
    const msg1: Member = reactive({
      id: 1,
      name: 'Echo',
      age: 26,
    })
    // const msg2 = ref<Member>({
    //   id: 2,
    //   name: 'Janus',
    // })
    console.log('msg1', msg1.id)
    // console.log('msg2', msg2.value)
    const name = toRef(msg1, 'name')
    console.log('name', name.value)
    const newUserInfo = toRefs(msg1)
    console.log('newUserInfo', newUserInfo.name.value)
    setTimeout(() => {
      msg.value = 'HELLO ECHO'
    }, 1000)
    setTimeout(() => {
      msg1.id = 2
      msg1.name = 'HHHH'
    }, 2000)
    function print() {
      console.log('[print]', msg.value)
    }
    function print1() {
      console.log('[print1]', msg.value)
      console.log('[print1]', msg1)
    }
    watch(msg, print)
    watchEffect(print1)
    const result: ComputedRef<string> = computed(
      () => `${msg.value + '-' + msg1.name}`
    )
    let { favicon, reset } = useFavicon()
    let changeIcon = function () {
      favicon.value = 'src/assets/img/arsenal.png'
    }
    return {
      msg,
      msg1,
      // msg2,
      ...newUserInfo,
      changeIcon,
      reset,
      result,
    }
  },
})
</script>

<style scoped lang="less">
.msg {
  font-size: 20px;
}
</style>
