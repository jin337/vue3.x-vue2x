<template>
  <h1>vue3-reactive：{{number}}</h1>
  <h2>computed：当前数据的两倍：{{doubleNum}}</h2>
  <p><button @click="add">增加</button></p>
  <h2>获取Vuex中的值：{{testNum}}</h2>
  <p><button @click="update">更新Vuex中的值</button></p>
</template>

<script>
import { reactive, toRefs, computed, getCurrentInstance } from 'vue'
export default {
  name: 'Test',
  setup () {
    const { ctx } = getCurrentInstance()
    const state = reactive({
      number: 12,
      doubleNum: computed(() => state.number * 2)
    })
    // 事件绑定
    const add = () => state.number++
    const update = () => ctx.$store.commit('setTest', state.number)

    // 计算属性
    const testNum = computed(() => ctx.$store.state.test)

    // 数据监听
    const router = ctx.$router
    console.log(router)

    return {
      ...toRefs(state),
      testNum,
      add,
      update
    }
  }
}
</script>
