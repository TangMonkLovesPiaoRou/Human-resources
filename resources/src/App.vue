<template>
  <article>
    <!-- <el-config-provider :locale="locale"> -->
      <Layout  childrenName="children" :childrenMeta="childrenMeta" :router="permission.router" v-if="globalState.pigeon.flag === true" />
      <div class="view">
        <router-view :key="path"></router-view>
      </div>
    <!-- </el-config-provider> -->
  </article>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRouter } from 'vue-router'
import { permission, globalState } from '@/types/index'
import { useI18n } from 'vue-i18n'
export default defineComponent({
  name: 'App',
  setup() {
    const router = useRouter()
    const { t } = useI18n()
    const path = computed(() => {
      return router.currentRoute.value.path
    })
    const childrenMeta = {
      icon: 'meta.icon',
      desc: 'meta.desc'
    }
    
    console.log('permission--', permission);
    return {
      path,
      permission,
      childrenMeta,
      globalState,
      t
    }
  }
});
</script>

<style lang="scss">
body,html {
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 100%;
}
#app {
  height: 100%;
}
article {
  height: 100%;
  display: flex;
  .view {
    flex: 1;
  }
  .sideBar {
    min-width: 25%;
  }
  .el-sub-menu > .el-sub-menu__title i {
    margin-right: 10px;
  }
  .el-menu-item,.el-sub-menu__title {
    display: flex;
    align-items: center;
    > i {
      margin-right: 10px;
    }
    span {
      word-break: break-all;
      white-space: normal;
      line-height: 20px;
      overflow: hidden;
      display: -webkit-box;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
  }
}
</style>
