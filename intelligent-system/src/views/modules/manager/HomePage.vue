<template>
    <div class="add">
         <!-- 首页主体 -->
        <div class="homePage_Main">
          <div class="typeArea">
            <!-- 头部 -->
            <home-page-head></home-page-head>
            <!-- 内容主体 -->
            <div class="sectionMain clear">
              <div class="left_portions">
                <!-- 列表内容 -->
                <home-page-middle />
              </div>
            </div>
            <!-- 版权 -->
            <copy-footer />
          </div>
        </div>
    </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
import HomePageHead from './homepage-head'
import HomePageMiddle from './homepage-middle'
import CopyFooter from '@/components/intelligent-footer-copy'
export default {
  name: 'main1',
  setup () {
    const state = reactive({
    //   isHomePage: true
    })
    return {
      ...toRefs(state)
    }
  },
  components: {
    HomePageHead,
    HomePageMiddle,
    CopyFooter
  }
}
</script>
<style lang="less" scoped>
.left_portions {
  width: 100%;
}
.homePage_Main {
  min-height: calc(100vh - 60px);
}
</style>
