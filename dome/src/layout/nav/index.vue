<template>
  <div class="navbox">
    <i class="iconfont icon-zhediemianban left-muen" @click="handlePanel"></i>
    <!-- <el-breadcrumb separator="/">
      <el-breadcrumb-item
      :to="cilp.length > 1 && index === 0 ? { path: `${item}` } : ''"
      v-for="(item, index) in cilp"
      :key="index"
      >{{ $t(`nav.${item}`) }}</el-breadcrumb-item>
    </el-breadcrumb> -->
    <div class="right-muen">
      <div class="search">
        <i class="iconfont icon-search" @click="headleSearch"></i>
        <input type="text" v-model="searchText" :class="search ? 'searchInput' : ''">
      </div>
      <i class="iconfont icon-exit-fullscreen"></i>
      <i :class="`iconfont ${ settings.language === 'zh' ? 'icon-zhongwenyuyan' : 'icon-yingwenyuyan' }`" @click="language"></i>
      <div class="portrait">
        <img :src="user.portrait || portrait" />
        <!-- <i class="iconfont icon-sanjiaoxing sanjiaoxing"></i> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
      search: false,
      searchText: '',
      portrait: require('@/assets/CrazyRabbit.gif')
    }
  },
  computed: {
    router () {
      return this.$store.getters.permission
    },
    settings () {
      return this.$store.getters.settings
    },
    cilp () {
      const cilp = this.$route.fullPath.split('/')
      if (cilp.findIndex((v) => v === 'home') === -1) cilp.unshift('home')
      return cilp.filter(Boolean)
    },
    user () {
      return this.$store.state.user
    }
  },
  created () {
  },
  methods: {
    handlePanel () {
      this.$store.commit('settings/SET_sideBar', !this.settings.sideBar)
    },
    headleSearch () {
      this.search = !this.search
    },
    language () {
      const local = this.settings.language === 'zh' ? 'en' : 'zh'
      this.$store.commit('settings/SET_language', local)
      this.$i18n.locale = local
    }
  },
  watch: {
    searchText (newValue) {
      // console.log('搜索--', newValue)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';

.iconfont {
  transition: all 0.5s;
}

.en {
  transform: rotate(480deg);
}

.navbox {
  flex-shrink: 0;
  height: 50px;
  line-height: 50px;
  padding-right: 27px;
  font-size: 14px;
  box-shadow: 0px 2px 3px #ece6e6ef;
  .left-muen {
    float: left;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    margin-right: 16px;
    cursor: pointer;
    font-size: 14px;
    &:hover {
      background-color: #{$hoverBg};
      transition: all 0.6s;
    }
  }
  .el-breadcrumb {
    float: left;
    height: 50px;
    line-height: 50px;
    font-size: 14px;
  }
  .right-muen {
    float: right;
    display: flex;
    align-items: center;
    > i,.portrait {
      padding: 0px 10px;
      font-size: 16px;
      &:hover {
        background-color: #{$hoverBg};
        transition: all 0.6s;
      }
    }
    .search {
      margin-right: 10px;
      .icon-search {
        cursor: pointer;
      }
      > input {
        width: 0px;
        border: 0px solid red;
        padding: 0px;
        transition: all 0.5s;
      }
      .searchInput {
        width: 169px;
        margin-left: 10px;
        border: none;
        outline: none;
        padding: 1px 2px;
        border-bottom: 1px solid red;
        transition: all 0.5s;
      }
    }
    .portrait {
      width: 60px;
      height: 40px;
      cursor: pointer;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }
      .sanjiaoxing {
        display: inline-block;
        position: absolute;
        right: -4px;
        bottom: -19px;
        font-size: 8px;
        color: #{$menuBg};
      }
      &::after {
        content: "";
        position: absolute;
        right: -9px;
        bottom: 6px;
        border: 3px solid transparent;
        border-right-color: #{$menuBg};
        border-bottom-color: #{$menuBg};
        transform: rotate(45deg);
      }
    }
  }
}

@keyframes searchWidth {
  0% {
    width: 0px;
  }
  100% {
    width: 169px;
  }
}
</style>
