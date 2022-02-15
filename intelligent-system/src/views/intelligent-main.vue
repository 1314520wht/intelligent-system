<template>
    <div class="main">
        <intelligent-main-navbar ref="intelligentMainNavbar" @slideBarList="slideBarList" />
        <!-- 主页 -->
        <div class="homePage_Main" v-if="isHomePage">
            <manager-homepage></manager-homepage>
            <!-- 问题反馈按钮及弹窗 -->
            <intelligent-main-questionBack ref="intelligentMainQuestionBack" />
        </div>
    </div>
    <!-- 内容主体 -->
    <!-- <div class="platform_contentMain clear" v-else>
      <ets-main-sidebar ref="etsMainSidebar" />
      <ets-main-content ref="etsMainContent" /> -->
      <!-- 问题反馈按钮及弹窗 -->
      <!-- <ets-main-questionBack ref="EtsMainQuestionBack" />
    </div> -->
</template>
<script>
import { reactive, toRefs } from 'vue'
import IntelligentMainNavbar from './intelligent-main-navbar'
import ManagerHomepage from './modules/manager/HomePage'
export default {
  name: 'Main',
  setup () {
    const state = reactive({
      isHomePage: true
    })
    return {
      ...toRefs(state)
    }
  },
  components: {
    IntelligentMainNavbar,
    ManagerHomepage
  }
}
</script>
