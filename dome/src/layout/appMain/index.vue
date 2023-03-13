<template>
  <div class="AppMain">
    <article id="vue3Resources" v-show="$store.getters.initGlobalState.currentBase === '/resources'"></article>
    <article id="vueElementAdmin" v-show="$store.getters.initGlobalState.currentBase === '/ElementAdmin'"></article>
  </div>
</template>

<script>
import { start } from 'qiankun'
export default {
  name: 'appMain',
  data () {
    return {
    }
  },
  created () {
  },
  mounted () {
    if (!window.qiankunStarted) {
      window.qiankunStarted = true
      start({
        sandbox: {
          experimentalStyleIsolation: true
        }
      })
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.AppMain {
  position: relative;
  flex: 1;
  display: flex;
  article {
    flex: 1;
  }
}
</style>
