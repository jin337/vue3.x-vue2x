<template>
  <h1>vue2x-data：{{number}}</h1>
  <h2>computed：当前数据的两倍：{{doubleNum}}</h2>
  <p><button @click="add">增加</button></p>
  <h2>获取Vuex中的值：{{testNum}}</h2>
  <p><button @click="update">更新Vuex中的值</button></p>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      number: 12
    }
  },
  computed: { // 计算属性
    ...mapState([
      'test'
    ]),
    testNum () {
      return this.test
    },
    doubleNum () {
      return this.number * 2
    }
  },
  methods: { // 事件绑定
    ...mapMutations([
      'setTest'
    ]),
    add () { this.number++ },
    update () { this.setTest(this.number) }
  },
  watch: {
    number: (val) => { console.log(`监控number数据为${val}`) },
    doubleNum: (val) => { console.log(`监控doubleNum数据为${val}`) }
  }
}
</script>
