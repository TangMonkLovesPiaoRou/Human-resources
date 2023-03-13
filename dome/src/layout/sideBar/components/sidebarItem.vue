<template>
  <a class="sidebarItem" src="javascript:;">
    <div class="menu" :class="selected ? 'menuActiveColor' : 'menuColor'">
      <i class="iconfont" :class="icon"></i>
      <span>{{ text }}</span>
    </div>
  </a>
</template>

<script>
export default {
  name: 'sidebarItem',
  props: {
    icon: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  created () {
    console.log(this.selected)
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';
.sidebarItem {
  display: block;
  width: 100%;
  height: 56px;
  .menu {
    padding: 0px 26px;
    height: 56px;
    line-height: 56px;
    font-size: 14px;
    overflow: hidden;
    > .iconfont {
      margin-right: 16px;
    }
  }
  .menuColor {
    color: #{$sideBarTextColor};
  }
  .menuActiveColor {
    color: #{$sideBarActiveTextColor};
  }
}
.sidebarItem:hover {
  background-color: #{$sideBarHoverBackgorund};
}
</style>
