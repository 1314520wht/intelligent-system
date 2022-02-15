<template>
  <!-- 左-导航 -->
  <div class="left_nav_Lists" :class="{ zoomState: zoomCondition }">
    <div class="zoomBtn" v-show="!zoomCondition">
      <!-- <button type="button" @click="zoomCondition = !zoomCondition"></button> -->
      <button type="button" @click="openAndHide"></button>
    </div>
    <p class="leftNavTitle" v-show="zoomCondition">{{ menuName }}</p>
    <el-tree
      :data="etsMenuList"
      :props="defaultProps"
      node-key="id"
      :currentNode="currentNodeKey"
      :current-node-key="currentNodeKey"
      :default-expanded-keys="[currentNodeKey]"
      accordion
      ref="tree"
      @node-click="goto"
      :highlight-current="showTree"
    >
    <template v-slot:{ data }>
      <span class="custom-tree-node">
        <i :class="data.icon"></i>
        <span v-show="zoomCondition">{{ data.name }}</span>
      </span>
    </template>
    </el-tree>
    <div class="zoomBtn1" v-show="zoomCondition">
      <i
        type="button"
        @click="openAndHide"
        :class="zoomCondition ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      ></i>
    </div>
  </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
export default {
  name: 'Main',
  setup () {
    const state = reactive({
      showTree: true,
      zoomCondition: true,
      etsMenuList: [],
      currentNodeKey: '',
      menuName: '',
      defaultProps: {
        id: '',
        children: 'children',
        label: 'name'
      }
    })
    const goto = secondMenu => {
      sessionStorage.setItem('secondMenu', JSON.stringify(secondMenu))
      this.$nextTick(() => {
        this.currentNodeKey = secondMenu.id
        this.$refs.tree.setCurrentKey(secondMenu.id)
      })
      // var route = window.SITE_CONFIG['dynamicMenuRoutes'].filter(item => item.meta.menuId === secondMenu.id)[0]
      // if (route) {
      //   this.$router.push({ name: route.name })
      // }
    }
    // 左侧导航展开，收起以及展开后的文字隐藏
    const openAndHide = () => {
      this.zoomCondition = !this.zoomCondition
      if (!this.zoomCondition) { // 在收起状态下
        const containChildren2 = document.querySelectorAll('.el-tree-node .el-tree-node__children .el-tree-node')
        console.log(containChildren2, 2)
        this.$refs.tree.$children.forEach(el => {
          const itemContent = document.getElementsByClassName('el-tree-node__content')
          const containChildren = document.querySelectorAll('.el-tree-node__children .el-tree-node')
          // let containChildren2 = document.querySelectorAll(".el-tree-node .el-tree-node__children .el-tree-node")
          const childrenIcon = document.getElementsByClassName('el-tree-node__expand-icon')
          itemContent.forEach(item => { // 取消每一项的右边框
            item.style.borderRight = 'none'
          })
          containChildren.forEach(item => {
            // console.log(item);
            item.style.display = 'none' // 让二级菜单进行隐藏
          })
          childrenIcon.forEach(item => {
            item.style.display = 'none' // 让二级菜单的下拉小按钮消失
          })
        })
      } else {
        const childrenIcon = document.getElementsByClassName('el-tree-node__expand-icon')
        childrenIcon.forEach(item => {
          item.style.display = 'block' // 让二级菜单的下拉小按钮消失
        })
      }
    }
    const methods = {
      goto,
      openAndHide
    }
    return {
      ...toRefs(state),
      ...methods
    }
  },
  components: {
    // IntelligentMainNavbar
    // ManagerHomepage
  }
}
</script>
