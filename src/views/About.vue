<template>
  <!-- <h2>路由名：{{route}}</h2> -->
  <h1>vue3-ref：{{number}}</h1>
  <h2>computed：当前数据的两倍：{{doubleNum}}</h2>
  <p><button @click="add">增加</button></p>
  <h2>获取Vuex中的值：{{testNum}}</h2>
  <p><button @click="update">更新Vuex中的值</button></p>
</template>

<script>
import { ref, watch, computed, getCurrentInstance, onMounted } from 'vue'
export default {
  name: 'About',
  setup () {
    const { ctx } = getCurrentInstance()
    // 初始化属性
    const number = ref(12)
    // const route = ctx.$router.currentRoute.value.name
    // 事件绑定
    const add = () => { number.value++ }
    const update = () => { ctx.$store.commit('setTest', number) }

    // 计算属性
    const doubleNum = computed(() => number.value * 2)
    const testNum = computed(() => ctx.$store.state.test)

    // 数据监听
    watch(
      number, () => { console.log(`监控number数据为${number.value}`) }, { lazy: true }
    )
    watch(
      doubleNum, () => { console.log(`监控doubleNum数据为${doubleNum.value}`) }
    )

    onMounted(() => {
      console.log(ctx)
    })

    // 获取路由

    return {
      // route,
      number,
      doubleNum,
      testNum,
      add,
      update
    }
  }
}
</script>
