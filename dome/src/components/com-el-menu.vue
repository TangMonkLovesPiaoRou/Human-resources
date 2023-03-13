
<script>
import variables from '@/style/variables.scss'
export default {
  props: {
    childrenName: {
      type: String,
      default: 'children'
    },
    childrenMeta: {
      type: Object,
      default: () => ({ icon: 'meta.icon', desc: 'meta.desc' })
    }
  },
  data () {
    return {
    }
  },
  computed: {
    variables () {
      return variables
    },
    settings () {
      return this.$store.getters.settings
    },
    router () {
      return this.$store.getters.permission_router
    }
  },
  methods: {
    createDom (list, str) {
      const arr = []
      list.forEach((item, index) => {
        if (item[this.childrenName] && item[this.childrenName].length) {
          arr.push(this.createMenu(item, str + index))
        } else {
          arr.push(this.createMenuItem(item, str + index))
        }
      })
      return arr
    },
    getMeta (meta, index) {
      const y = index.split('.').reduce((s, c) => {
        return s[c]
      }, meta)
      return y
    },
    handleSelected (key) {
      const paragraphs = key.split('-')
      console.log(paragraphs)
      const paths = paragraphs.reduce((sum, v, i) => {
        if (i < paragraphs.length - 1) return sum[v].children
        else return sum[v]
      }, this.router)
      this.$router.push({
        path: `/portal${this.$store.getters.initGlobalState.currentBase}${paths.path}`
      })
    }
  },
  render (h) {
    const createMenuItem = (dom, index) => {
      const scopedSlots = {
        title: () => <span>{ this.$t('sideBar.' + this.getMeta(dom, this.childrenMeta.desc)) }</span>
      }
      return <el-menu-item index={ index } scopedSlots={scopedSlots}>
        <i class={ `iconfont ${this.getMeta(dom, this.childrenMeta.icon)}` }></i>
      </el-menu-item>
    }

    const createMenu = (dom, index) => {
      return <el-submenu index={ index } class={ this.settings.sideBar ? 'packUp' : '' }>
        <template slot="title">
          <i class={ `iconfont ${this.getMeta(dom, this.childrenMeta.icon)}` }></i>
          <span>{ this.$t('sideBar.' + this.getMeta(dom, this.childrenMeta.desc)) }</span>
        </template>
        { this.createDom(dom[this.childrenName], index + '-') }
      </el-submenu>
    }

    this.createMenuItem = createMenuItem
    this.createMenu = createMenu
    return <el-menu
      class={ 'el-menu-vertical-demo' }
      default-active="0"
      width="210px"
      background-color={ this.variables.menuBg }
      text-color={ this.variables.menuText }
      active-text-color={ this.variables.menuActiveText }
      collapse={ this.settings.sideBar }
      collapse-transition
      v-on:select={ this.handleSelected }
    >{ this.createDom(this.router, '') }</el-menu>
  }
}
</script>

<style lang="scss">
.iconfont {
  margin-right: 16px;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 210px;
}

::v-deep .el-menu{
  height: 100% !important;
  border-right: 0px;
}

::v-deep .packUp {
  .el-submenu__title {
    .el-submenu__icon-arrow,span {
      display: none !important;
    }
  }
}

::v-deep .el-menu .el-menu-item {
  display: flex;
  align-items: center;
  span {
    word-break: break-all;
    white-space: normal;
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-height: 20px;
  }
}

::v-deep .el-menu .el-submenu .el-submenu__title {
  display: flex;
  align-items: center;
  span {
    padding-right: 20px;
    word-break: break-all;
    white-space: normal;
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-height: 20px;
  }
}

</style>
