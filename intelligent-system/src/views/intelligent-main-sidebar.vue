<template>
  <!-- 左-导航 -->
  <div class="left_nav_Lists" :class="{ zoomState: zoomCondition }">
    <div class="zoomBtn" v-show="!zoomCondition">
      <button type="button" @click="openAndHide"></button>
    </div>
    <p class="leftNavTitle" v-show="zoomCondition">见证数据</p>
    <el-tree
      :data="etsMenuList1"
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
        <el-icon  @click="openAndHide"><fold /></el-icon>
        <!-- <span v-show="zoomCondition">{{ data.name }}</span> -->
        <span v-show="true">巴黎世家老师都说</span>
      </span>
    </template>
    </el-tree>
    <div class="zoomBtn1" v-show="zoomCondition">
      <el-icon  @click="openAndHide"><fold /></el-icon>
    </div>
  </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
export default {
  name: 'Main',
  setup () {
    const router = useRouter()
    const state = reactive({
      showTree: true,
      zoomCondition: true,
      etsMenuList1: [
        {
          label: 'one',
          name: '招标洗那',
          icon: '<el-icon><document /></el-icon>',
          children: [
            {
              label: 'one/one',
              name: '张博上世纪1'
            },
            {
              label: 'one/one',
              name: '张博上世纪12'
            }
          ]
        },
        {
          label: 'one',
          name: '嗯啊',
          children: [
            {
              label: 'one/one',
              name: '嗯啊'
            }
          ]
        }
      ],
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
      router.push({
        name: 'see-all-data'
      })
      // this.$router.push('see-all-data')
      // var route = window.SITE_CONFIG['dynamicMenuRoutes'].filter(item => item.meta.menuId === secondMenu.id)[0]
      // if (route) {
      //   this.$router.push({ name: route.name })
      // }
    }
    // 左侧导航展开，收起以及展开后的文字隐藏
    const openAndHide = () => {
      state.zoomCondition = !state.zoomCondition
      if (!state.zoomCondition) { // 在收起状态下
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
  }
}
</script>
<style lang="less" scoped>
/deep/.el-tree-node .el-tree-node__content {
  line-height: 40px;
  height: 40px;
  padding-left: 26px !important;
}
/deep/.left_nav_Lists .custom-tree-node {
  position: relative;
  padding-left: 26px;
}
/deep/.el-tree-node>.el-tree-node__children {
  .el-tree-node {
    padding-left: 0 !important;
    .el-tree-node__content {
      padding-left: 39px !important;
    }
  }
}
</style>
