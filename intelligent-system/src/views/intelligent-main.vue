<template>
    <div class="main">
        <intelligent-main-navbar ref="intelligentMainNavbar" @slideBarList="slideBarList" />
        <!-- 主页 -->
        <div class="homePage_Main" v-if="isHomePage">
            <manager-homepage></manager-homepage>
            <!-- 问题反馈按钮及弹窗 -->
            <intelligent-main-questionBack ref="intelligentMainQuestionBack" />
        </div>
        <!-- 内容主体 -->
        <div class="platform_contentMain clear" v-else>
          <intelligent-main-sidebar ref="etsMainSidebar" />
          <intelligent-main-content ref="etsMainContent" />
          <!-- 问题反馈按钮及弹窗 -->
          <!-- <ets-main-questionBack ref="EtsMainQuestionBack" /> -->
        </div>
    </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
import IntelligentMainNavbar from './intelligent-main-navbar'
import IntelligentMainSidebar from './intelligent-main-sidebar'
import IntelligentMainContent from './intelligent-main-content'
import ManagerHomepage from './modules/manager/HomePage'
export default {
  name: 'Main',
  setup () {
    const state = reactive({
      isHomePage: false
    })
    return {
      ...toRefs(state)
    }
  },
  components: {
    IntelligentMainNavbar,
    ManagerHomepage,
    IntelligentMainSidebar,
    IntelligentMainContent
  }
}
</script>
