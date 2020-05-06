<template>
  <h1>路由：{{route.name}}</h1>
  <h1>vue3-reactive：{{number}}</h1>
  <h2>computed：当前数据的两倍：{{doubleNum}}</h2>
  <p><button @click="add">增加</button></p>
  <h2>获取Vuex中的值：{{testNum}}</h2>
  <p><button @click="update">更新Vuex中的值</button></p>
</template>

<script>
import { reactive, toRefs, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
export default {
  name: 'Test',
  setup () {
    // 路由
    const route = useRoute()
    // vuex
    const store = useStore()

    const state = reactive({
      number: 12,
      doubleNum: computed(() => state.number * 2)
    })
    // 事件绑定
    const add = () => state.number++
    const update = () => store.commit('setTest', state.number)

    // 计算属性
    const testNum = computed(() => store.state.test)

    // 数据监听
    watch(() =>
      state.number, () => { console.log(`监控number数据为${state.number}`) }
    )
    watch(() =>
      state.doubleNum, () => { console.log(`监控doubleNum数据为${state.doubleNum}`) }
    )

    return {
      ...toRefs(state),
      route,
      testNum,
      add,
      update
    }
  }
}
</script>
