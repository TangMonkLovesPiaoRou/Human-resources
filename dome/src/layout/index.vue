<template>
    <div class="layout">
        <SideBar />
        <div class="aside">
            <Nav />
            <AppMain />
        </div>
    </div>
</template>

<script>
import SideBar from './sideBar/index'
import Nav from './nav/index'
import AppMain from './appMain/index'
export default {
  components: {
    SideBar,
    AppMain,
    Nav
  },
  data () {
    return {}
  },
  created () {
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  height: 100%;
  .aside {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
}
</style>
