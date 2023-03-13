<template>
    <div class="sidebar">
      <com-el-menu style="height: 100%"></com-el-menu>
    </div>
</template>
<script>
import variables from '@/style/variables.scss'
export default {
  name: 'sideBar',
  data () {
    return {
    }
  },
  computed: {
    variables () {
      return variables
    },
    router () {
      return this.$store.getters.permission_router
    },
    settings () {
      return this.$store.getters.settings
    },
    currentBase () {
      return this.$store.getters.initGlobalState
    }
  },
  created () {
  },
  methods: {
    handleSelected (key) {
      const paragraphs = key.split('-')
      console.log(paragraphs)
      const paths = paragraphs.reduce((sum, v, i) => {
        if (i < paragraphs.length - 1) return sum[v].children
        else return sum[v]
      }, this.router)
      this.$router.push({
        path: `${this.$store.getters.initGlobalState.currentBase}${paths.path}`
      })
    }
  }
}
</script>
<style lang="scss">
@import '@/style/variables.scss';

.sidebar {
  height: 100%;
}
</style>
